// spread & rest

function say(name, ...words) {
    console.log(name + ': ' + words.join() + '!')
}

var expressions = [ 'omg', 'aka', 'wft']

say('Peter', ...expressions)
// VM5142:4 Peter: omg,aka,wft!

var data = ['Peter', 'omg', 'aka', 'wft']

say(...data)
// VM5425:4 Peter: omg,aka,wft!