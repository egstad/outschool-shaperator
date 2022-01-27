<template>
  <main class="app">
    <Header ref="header" />
    <Canvas ref="canvas" />
    <Controls ref="controls" />
  </main>
</template>

<script>
import { gsap } from 'gsap'
import Header from '@/components/organism/Header'
import Canvas from '@/components/organism/Canvas'
import Controls from '@/components/organism/Controls'

gsap.registerPlugin()

export default {
  components: {
    Header,
    Canvas,
    Controls,
  },
  data() {
    return {
      tl: gsap.timeline(),
    }
  },
  beforeMount() {
    this.$nuxt.$on('index/animate', this.animatePage)
  },
  beforeDestroy() {
    this.$nuxt.$off('index/animate', this.animatePage)
    this.tl.kill()
  },
  methods: {
    animatePage() {
      this.animateControls()
      this.animateCanvas()
    },
    animateControls() {
      const header = this.$refs.header.$el
      const topEls = Array.prototype.slice.call(
        this.$refs.controls.$el.children[0].children,
        0
      )
      const botEls = Array.prototype.slice.call(
        this.$refs.controls.$el.children[1].children,
        0
      )
      const allEls = [header, ...topEls, ...botEls]

      this.tl.fromTo(
        allEls,
        {
          opacity: 0,
          y: 15,
        },
        {
          opacity: 1,
          y: 0,
          delay: 0.5,
          duration: 1,
          ease: 'power4.out',
          stagger: {
            from: 'top',
            amount: 0.35,
          },
        },
        '0'
      )
    },
    animateHeader() {
      this.tl.fromTo(
        this.$refs.header.$el,
        {
          opacity: 0,
        },
        {
          opacity: 1,
          delay: 0.5,
          duration: 1,
          ease: 'power2.out',
        },
        '0'
      )
    },
    animateCanvas() {
      this.tl.fromTo(
        this.$refs.canvas.$el,
        {
          opacity: 0,
          scale: 0.9,
          rotation: Math.random() * 25 + 10,
          y: -15,
        },
        {
          opacity: 1,
          scale: 1,
          duration: 2,
          ease: 'power2.out',
          rotation: 0,
          y: 0,
        },
        '0'
      )
    },
  },
}
</script>

<style>
.app {
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: auto 1fr auto;
  min-height: 100vh;

  /* Color */

  /* Text */

  /* Other */
}

@media (min-width: 768px) {
  .app {
    grid-template-columns: 1fr auto;
    grid-template-rows: auto 1fr;
    max-height: 100vh;
  }

  .header {
    grid-column: 2 / 3;
  }

  .canvas-wrap {
    grid-column: 1 / 2;
    grid-row: 1 / 3;
    height: auto;
    max-height: 100vh;
  }

  .controls {
    grid-column: 2 / 3;
    grid-row: 2 / 3;
    height: auto;
  }
}
</style>
