<template>
  <input :style="`--background:var(${color})`" class="radio" type="radio" />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      required: true,
    },
  },
  // mounted() {
  //   this.$el.style.setProperty('--background', this.color)
  // },
}
</script>

<style scoped>
.radio {
  appearance: none;
  background-color: var(--color-white);
  color: var(--color-white);
  margin: 0;
  font: inherit;
  width: 34px;
  height: 34px;
  display: grid;
  place-content: center;
  cursor: pointer;
  outline: none;
}

.radio::before {
  content: '';
  width: 24px;
  height: 24px;
  border-radius: 50%;
  background-color: var(--background);
  box-shadow: 0 0 0 3px var(--color-white);
  transition: 200ms box-shadow ease-in-out;
}

.radio:focus::before,
.radio:checked::before {
  border-radius: 50%;
  box-shadow: 0 0 0 3px var(--color-white), 0 0 0 5px var(--background);
}
</style>
