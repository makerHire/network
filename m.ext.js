m.superProp = function (value) {
  var subs = []
    , prevValue
      //  Send notifications to subscribers
    , notify = function (value, prevValue) {
        console.log("Notifying", value)
        var i
        for (i = 0; i < subs.length; i += 1) {
          subs[i].func(value, prevValue)
        }
      }
    , prop = function () {
        if (arguments.length) {
          value = arguments[0]
          if (prevValue !== value) {
            var tmpPrev = prevValue
            prevValue = value
            notify(value, tmpPrev)
          }
        }
        return value
      }
  ;
 
  //  Convenience function to allow direct manipulation of arrays, objects, etc.
  prop.tap = function (mutator) {
    mutator(value)
    notify(value)
    return prop
  }
 
  //  Allow subscription for when the value changes
  //  func gets two parameters: value and prevValue
  prop.subscribe = function (func) {
    subs.push({ func: func })
    return prop
  }
 
  return prop
}