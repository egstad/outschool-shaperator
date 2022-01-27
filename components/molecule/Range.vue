<template>
  <input type="range" class="slider" />
</template>

<style scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 2px;
  border-radius: 5px;
  background: var(--color-gray);
  outline: none;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--foreground);
  cursor: pointer;
  box-shadow: 0 0 0 4px transparent;
  transition: 200ms box-shadow ease-in-out;
}

.slider:focus-visible::-webkit-slider-thumb {
  box-shadow: 0 0 0 3px var(--background), 0 0 0 5px var(--foreground);
}

.slider::-moz-range-thumb {
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background: var(--foreground);
  cursor: pointer;
}
</style>
