<template>
  <section class="controls">
    <div class="controls--top">
      <div class="controls__complexity sp-bottom">
        <p class="sans label">Complexity</p>

        <Range />
      </div>

      <div class="controls__color sp-bottom">
        <p class="sans label">Color</p>

        <form class="radios">
          <Radio
            name="color"
            :color="'--color-black'"
            value="1"
            checked
            @change.native="$store.commit('updateShapeFill', '--color-black')"
          />
          <Radio
            name="color"
            :color="'--color-blue'"
            value="2"
            @change.native="$store.commit('updateShapeFill', '--color-blue')"
          />
          <Radio
            name="color"
            :color="'--color-light-blue'"
            value="3"
            @change.native="
              $store.commit('updateShapeFill', '--color-light-blue')
            "
          />
          <Radio
            name="color"
            :color="'--color-pink'"
            value="4"
            @change.native="$store.commit('updateShapeFill', '--color-pink')"
          />
          <Radio
            name="color"
            :color="'--color-red'"
            value="5"
            @change.native="$store.commit('updateShapeFill', '--color-red')"
          />
          <Radio
            name="color"
            :color="'--color-yellow'"
            value="6"
            @change.native="$store.commit('updateShapeFill', '--color-yellow')"
          />
        </form>
      </div>
    </div>

    <div class="color--bottom">
      <Button class="light" @click.native="$nuxt.$emit('shape/update')">
        <template #icon><IconRefresh /></template>
        <template #text>New Shape</template>
      </Button>

      <Button class="light" @click.native="$nuxt.$emit('shape/copy')">
        <template #icon><IconCopy /></template>
        <template #text>Copy</template>
      </Button>

      <Button class="light" @click.native="$nuxt.$emit('shape/download')">
        <template #icon><IconDownload /></template>
        <template #text>SVG</template>
      </Button>
    </div>
  </section>
</template>

<script>
import Range from '@/components/molecule/Range'
import Button from '@/components/molecule/Button'
import Radio from '@/components/molecule/Radio'
import IconDownload from '@/components/atom/IconDownload.vue'
import IconCopy from '@/components/atom/IconCopy.vue'
import IconRefresh from '@/components/atom/IconRefresh.vue'

export default {
  components: {
    Range,
    Button,
    Radio,
    IconDownload,
    IconCopy,
    IconRefresh,
  },
  methods: {
    onRadioChange(color) {
      this.$store.commit('updateShapeFill', color)
    },
  },
}
</script>

<style scoped>
.controls {
  padding: var(--space);
}

.radios {
  display: flex;
  width: 100%;
  justify-content: space-between;
}

.label {
  margin-bottom: var(--space);
}

.sp-bottom {
  margin-bottom: calc(var(--space) * 2);
}

.controls__complexity button {
  width: 100%;
}

@media (min-width: 768px) {
  .controls {
    width: 375px;
    height: 100%;
    display: flex;
    flex-direction: column;
  }

  .controls--top {
    padding-top: 12.5vh;
    margin-top: auto;
    margin-bottom: auto;
  }

  .color--bottom {
    margin-top: auto;
  }
}

.color--bottom {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 1fr 1fr;
  grid-gap: calc(var(--space) - 8px);
}

.button:first-child {
  grid-column: 1 / 3;
}
</style>
