export const typeOf = someVariable => Object.prototype.toString.call(someVariable).slice(8, -1).toLowerCase()