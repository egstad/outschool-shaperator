<template>
  <button class="button">
    <slot name="icon">[Icon]</slot>
    <slot name="text">Text</slot>
  </button>
</template>

<style scoped>
.button {
  /* Positioning */
  position: relative;
  transform: translate3d(0, 0, 0);

  /* Display & Box Model */
  outline: none;
  appearance: none;
  display: flex;
  border: 2px solid var(--background);
  border-radius: 100vw;
  padding: 1em 2em;
  align-items: center;
  justify-content: center;

  /* Color */
  background-color: var(--color-black);
  color: var(--color-white);

  /* Text */
  font-family: 'abcd-ginto', sans-serif;
  font-size: inherit;
  text-align: center;

  /* Other */
  transition: background-color 150ms var(--trans-ease),
    color 150ms var(--trans-ease), border-color 50ms var(--trans-ease),
    transform 150ms var(--trans-ease);
  cursor: pointer;
}

.button:hover {
  background-color: var(--color-blue);
}

.button:active {
  transform: translate3d(0, 0, 0);
}

.button:focus-visible {
  border: 2px solid var(--background);
  box-shadow: 0 0 0 2px var(--color-blue);
}

svg {
  display: block;
  fill: currentColor;
  margin-right: 8px;
  transform: translate3d(0, 0, 0);
  transition: fill var(--trans-time) var(--trans-ease);
}
</style>
