const key = "b715f55a1e5a3e3f35d25b1252e52252"

//Coloacando dados na telinha
function colocarDados(dados){
	document.querySelector("#cidade").innerHTML = "Tempo em " + dados.name
	document.querySelector(".texto-tempo").innerHTML = Math.floor(dados.main.temp) + "°C"
	document.querySelector(".texto-previsao").innerHTML = dados.weather[0].description
	document.querySelector(".texto-umidade").innerHTML = "Umidade: " + dados.main.humidity + "%"
	document.querySelector(".img-previsao").src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png` 
	console.log(dados)
}

//Buscando Cidade desejada
async function buscarCidade(cidade){
	const dados = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cidade}&appid=${key}&lang=pt_br&units=metric`).then( resposta => resposta.json())
	colocarDados(dados)
}

//Obtendo a cidade desejada
function cliqueiBotao(){
	const cidade = document.querySelector("#input-cidade").value
	buscarCidade(cidade)
}