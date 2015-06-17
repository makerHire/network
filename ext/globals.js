(function (global) {

  global.getProp = function (propName) {
    return function (obj) { return obj[propName] }
  }

  global.queryProp = function (query) {
    var segments = query.split('.')
    return function (obj) {
      var result = obj
      for (var i=0; i < segments.length; i++) {
        result = result[segments[i]]
        if (typeof result === 'function') result = result()
      }
      return result
    }
  }

  global.merge = function (target) {
    var sources = Array.prototype.slice.call(arguments, 1)
    for (var i=0; i < sources.length; i++) {
      var source = sources[i]
      for (var prop in source) {
        if (source.hasOwnProperty(prop)) target[prop] = source[prop]
      }
    }
    return target
  }

  global.echo = function (x) { return x }

})(typeof global === 'object' ? global : window)
