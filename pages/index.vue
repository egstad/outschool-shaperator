<template>
  <main class="app">
    <Header />
    <Canvas />
    <Controls />
  </main>
</template>

<script>
import Header from '@/components/organism/Header'
import Canvas from '@/components/organism/Canvas'
import Controls from '@/components/organism/Controls'

export default {
  components: {
    Header,
    Canvas,
    Controls,
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
