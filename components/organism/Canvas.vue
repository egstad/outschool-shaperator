<template>
  <div class="canvas-wrap">
    <canvas ref="canvas" resize></canvas>
  </div>
</template>

<script>
import paper from 'paper'

export default {
  data() {
    return {
      app: null,
      shape: null,
      shapeVals: null,
      shapeRadius: null,
      gui: null,
      center: null,
      segment: null,
      hitResult: null,
    }
  },
  computed: {
    color() {
      return this.$store.state.shapeFill
    },
    shapePoints() {
      return this.$store.state.shapePoints
    },
  },
  mounted() {
    this.initPaperJS()
    this.$nuxt.$on('shape/update', this.resetShape)
    this.$nuxt.$on('shape/downloadSVG', this.downloadSVG)
    this.$nuxt.$on('shape/downloadPNG', this.downloadPNG)
  },
  methods: {
    initPaperJS() {
      paper.install(window)
      paper.setup(this.$refs.canvas)
      this.app = paper.view
      window.paper.settings.hitTolerance = 24
      window.paper.settings.handleSize = 12

      this.setShapeRadius()
      this.drawShape()
      this.onFrame()
      this.onResize()
      this.onMouseDown()
      this.onMouseMove()
      this.onMouseDrag()
      this.onKeyUp()

      this.$nuxt.$emit('index/animate')
    },
    onFrame() {
      this.app.onFrame = (event) => {
        // shape.rotate(0.1);
        this.shape.fillColor = this.color
        this.shape.smooth({ type: 'continuous', factor: 0 })
      }
    },
    onResize() {
      this.app.onResize = (event) => {
        this.setShapeRadius()
        this.shape.position = this.app.center
        this.resetShape()
      }
    },
    onMouseDown() {
      this.app.onMouseDown = (event) => {
        this.segment = null
        this.hitResult = this.shape.hitTest(event.point)

        if (!this.hitResult) return

        if (this.hitResult && this.hitResult.type === 'segment') {
          this.segment = this.hitResult.segment
        }
      }
    },
    onMouseDrag() {
      this.app.onMouseDrag = (event) => {
        this.segment.point = {
          x: this.segment.point.x + event.delta.x,
          y: this.segment.point.y + event.delta.y,
        }
      }
    },
    onMouseMove() {
      this.app.onMouseMove = (event) => {
        this.hitResult = this.shape.hitTest(event.point)

        if (this.hitResult) {
          this.shape.selected = true
          document.body.style.cursor = 'pointer'
        } else {
          this.shape.selected = false
          document.body.style.cursor = 'default'
        }
      }
    },
    onKeyUp() {
      this.app.onKeyUp = (event) => {
        switch (event.key) {
          case 'space':
            this.resetShape()
            break

          case 'enter':
            this.downloadSVG()
            break

          default:
        }
      }
    },
    drawShape() {
      this.shape = this.createBlob(
        this.app.center,
        this.shapeRadius,
        this.shapePoints
      )
    },
    setShapeRadius() {
      const r = this.$refs.canvas.getBoundingClientRect()
      const w = r.width
      const h = r.height

      this.shapeRadius = Math.round(Math.min(Math.min(w, h) * 0.5))
    },
    createBlob(center, maxRadius, points) {
      const path = new window.Path({
        fillColor: this.color,
      })
      path.closed = true

      for (let i = 0; i < points; i++) {
        const delta = new window.Point({
          length: maxRadius * 0.5 + Math.random() * maxRadius * 0.5,
          angle: (360 / points) * i,
        })
        path.add(delta)
      }

      path.position = this.app.center

      return path
    },
    downloadSVG() {
      const now = new window.Date().toISOString()
      const fileName = `outschool-shape-${now}.svg`
      const url =
        'data:image/svg+xml;utf8,' +
        encodeURIComponent(paper.project.exportSVG({ asString: true }))
      const link = document.createElement('a')
      link.download = fileName
      link.href = url
      link.click()
    },
    downloadPNG() {
      const canvas = paper.view.element
      let exportBlob = null

      canvas.toBlob((blob) => {
        /* eslint-disable  */
        exportBlob = new ClipboardItem({ 'image/png': blob })
        navigator.clipboard.write([exportBlob])
      })
    },
    resetShape() {
      window.project.clear()
      this.drawShape()
    },
    copy() {
      const url = paper.project.exportSVG({ asString: true })
      navigator.clipboard.writeText(url)
    },
  },
}
</script>

<style scoped>
.canvas-wrap {
  max-height: 100vh;
}

canvas {
  width: 100%;
  height: 100%;
}
</style>
