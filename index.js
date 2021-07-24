const _hasOwnProperty = Object.prototype.hasOwnProperty

export default function hasOwnProperty (object, name) {
  return _hasOwnProperty.call(object, name)
}
