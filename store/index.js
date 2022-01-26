export const state = () => ({
  shapeFill: 'var(--color-black)',
})

export const mutations = {
  updateShapeFill(state, color) {
    const hex = getComputedStyle(document.documentElement).getPropertyValue(
      color
    )

    state.shapeFill = hex
    console.log(state.shapeFill, color)
  },
}
