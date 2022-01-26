<template>
  <header class="header">
    <h1 class="logo sans">
      <Logomark />
      <span class="visually-hidden">Outschool</span>
      <span>Shaperator</span>
    </h1>
  </header>
</template>

<script>
import Logomark from '@/components/atom/Logomark'

export default {
  components: {
    Logomark,
  },
}
</script>

<style>
.header {
  padding: var(--space);
}

.logo {
  display: flex;
}

svg {
  display: block;
  margin-right: 11px;
}

.visually-hidden {
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  height: 1px;
  overflow: hidden;
  position: absolute;
  white-space: nowrap;
  width: 1px;
}
</style>
