function lowerCaseDrivers(drivers){
  return drivers.map(function(element) {return element.toLowerCase()})
}

function nameToAttributes(drivers){
  return drivers.map(function(element){
    return Object.assign({}, {firstName: element.split(" ")[0], lastName: element.split(" ")[1]})
  })
}

function attributesToPhrase(drivers){
  return drivers.map(function(element){
    return `${element.name} is from ${element.hometown}`
  })
}
