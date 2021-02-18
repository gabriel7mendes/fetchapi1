const fetch = require('node-fetch');
/*
fetch('http://twitelum-api.herokuapp.com/tweets')
.then(function(respostaDoServidor) {
	respostaDoServidor.json().then(function(dadosConvertidosEmObjeto) {
		console.log(dadosConvertidosEmObjeto)
	})
})
*/

fetch('http://twitelum-api.herokuapp.com/tweets')
.then(function(respostaDoServidor) {
	return respostaDoServidor.json()
})
.then(function(dadosConvertidosEmObjeto) {
	console.log(dadosConvertidosEmObjeto)
})

fetch(`https://twitelum-api.herokuapp.com/tweets`, {
    method: 'POST',
    body: JSON.stringify({ conteudo: 'aaa', login: 'omariosouto' }),
    headers: {
        'content-type': 'application/json'
    }
})
.then(function (data) { 
	return data.json()	
	//throw new Error('Oops, aconteceu algum erro :(')
})
.then(function (novoTweet) { 
	console.log(novoTweet)
})
.catch(function(erro) {
	console.log(erro.message)
})
