var regression = require('regression')
var dataset    = require('./dataset.js')

var county = dataset.filter((element) => {
  return element[0] == 42
})

var regression_data = county.map((element) => {
  return [element[1], element[3]]
})

regression_data.push([2016, null])
regression_data.push([2017, null])
regression_data.push([2018, null])

var result = regression('linear', regression_data)
var points = result.points

process.stdout.write(JSON.stringify(points) + '\n')
// output = []
// for (var index = 0; index < county.length; index += 1) {
//   var year       = county[index][1]
//   var population = county[index][2]
//   var budget     = points[index][1]
//
//   output.push([year, population, budget])
// }
//
// process.stdout.write(JSON.stringify(output) + '\n')
