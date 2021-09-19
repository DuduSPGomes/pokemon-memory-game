export const duplicate = (arr) => {
  return arr?.reduce((a, i) => a.concat(i, i), [])
}