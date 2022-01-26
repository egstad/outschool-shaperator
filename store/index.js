export const state = () => ({
  shapeFill: 'var(--color-black)',
  shapePoints: 5,
})

export const mutations = {
  updateShapeFill(state, color) {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(
      color
    )

    state.shapeFill = hex
  },
  updateShapePoints(state, num) {
    state.shapePoints = num

    window.$nuxt.$emit('shape/update')
  },
}
