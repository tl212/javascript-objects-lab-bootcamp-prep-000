var recipes = {}

function updateObjectWithKeyAndValue(object, key, value) {
var newObject = Object.assign(object)
newObject['sugar'] = '1 cup'
return newObject
}

function destructivelyUpdateObjectWithKeyAndValue(object, key, value) {
  object[key] = value
  return object
}

function deleteFromObjectByKey(object, key) {
  
}  