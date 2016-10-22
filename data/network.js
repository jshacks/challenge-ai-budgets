function shuffleArray(array) {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

function addCommas(nStr)
{
  nStr += '';
  x = nStr.split('.');
  x1 = x[0];
  x2 = x.length > 1 ? '.' + x[1] : '';
  var rgx = /(\d+)(\d{3})/;
  while (rgx.test(x1)) {
    x1 = x1.replace(rgx, '$1' + ',' + '$2');
  }
  return x1 + x2;
}

var inputLayer   = new synaptic.Layer( 2)
var hiddenLayer1 = new synaptic.Layer(15)
var outputLayer  = new synaptic.Layer( 1)

outputLayer.set({squash: synaptic.Neuron.squash.IDENTITY})

inputLayer.project(hiddenLayer1)
hiddenLayer1.project(outputLayer)

var myNetwork = new synaptic.Network({
  input:   inputLayer,
  hidden: [hiddenLayer1],
  output:  outputLayer
})

var learningRate = 0.009
var epochs       = 2000

// Dataset length is 714, using first 100 for testing accurac
var test_data     = dataset.slice(  0, 100)
var training_data = dataset.slice(100, 714)

for (var epoch = 0; epoch < epochs; epoch += 1) {
  shuffleArray(training_data);

  for (var index = 0; index < training_data.length; index += 1) {
    var input  = [training_data[index][0], training_data[index][1]]
    var output = [training_data[index][2]]

    myNetwork.activate(input)
    myNetwork.propagate(learningRate, output)
  }

  // Accuracy
  var correct = 0
  for (var index = 0; index < test_data.length; index += 1) {
    var input  = [test_data[index][0], test_data[index][1]]
    var output = [test_data[index][2]]

    result = myNetwork.activate(input)[0]

    var error = Math.abs(result - output[0]) / output[0] * 100

    if (error < 10) correct += 1
  }

  console.log('Accuracy: ' + correct + '/' + test_data.length)
}

console.log(
  addCommas(Math.round(myNetwork.activate([2015, 373248])[0]))
  +
  '/1,102,402,336'
)
