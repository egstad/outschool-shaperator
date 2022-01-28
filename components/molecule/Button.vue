<template>
  <button :class="['button', { '--secondary': type !== 'primary' }]">
    <slot name="icon">[Icon]</slot>
    <slot name="text">Text</slot>
  </button>
</template>

<script>
export default {
  props: {
    type: {
      type: String,
      default: 'primary',
    },
  },
}
</script>

<style scoped>
.button {
  /* Positioning */
  position: relative;

  /* Display & Box Model */
  outline: none;
  appearance: none;
  display: flex;
  border: 3px solid transparent;
  border-radius: 100vw;
  padding: 0.7em 2em;
  align-items: center;
  justify-content: center;

  /* Color */
  background-color: var(--color-blue);
  color: var(--color-white);

  /* Text */
  font-family: 'abcd-ginto', sans-serif;
  font-size: inherit;
  text-align: center;

  /* Other */
  transition: background-color 150ms var(--trans-ease),
    color 150ms var(--trans-ease), border 50ms var(--trans-ease);
  cursor: pointer;
}

.button:hover,
.button:focus-visible {
  background-color: var(--color-blue-700);
}

.button:active {
  transition: background-color 100ms var(--trans-ease);
  background-color: var(--color-blue-900);
}

svg {
  display: block;
  fill: currentColor;
  margin-right: 8px;
  transform: translate3d(0, 0, 0);
  transition: fill var(--trans-time) var(--trans-ease);
}

.button.--secondary {
  background-color: var(--background);
  color: var(--color-blue);
  border: 2px solid var(--color-blue);
  cursor: pointer;
}

.button.--secondary:hover,
.button.--secondary:focus-visible {
  background-color: var(--color-blue-700);
  color: var(--background);
  border-color: var(--color-blue-700);
}

.button.--secondary:active {
  background-color: var(--color-blue-900);
  color: var(--background);
  border-color: var(--color-blue-900);
}
</style>
