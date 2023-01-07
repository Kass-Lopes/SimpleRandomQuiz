
/* main é a função principal*/
function main(){


//criando as varáveis necessárias,,
	let CampoPergunta = document.querySelector('#perguntas')
	let Btns = document.querySelectorAll('.Btns')
	let TimeOut = 1000
	let index = null
	let ValorDoTempoInicial = 30
	let Pontos = document.getElementById('pontos')
	let BarraDeTempo = document.querySelector('.Tempo')

//Criando o array de objectos lieterais para as questões.
	let Perguntas = [
		{
			texto: 'QUANTAS PROVÍNCIAS TEM ANGOLA',
			opcaoA: '9 PROVÍNCIAS',
			opcaoB: '19 PROVÍNCIAS',
			opcaoC: '18 PROVÍNCIAS',
			opcaoD: '21 PROVÍNCIAS',
			opcaoCerta: '18 PROVÍNCIAS',
		},
		{
			texto:'QUAL A FÓRMULA DO ÁCIDO SULFÚRICO',
			opcaoA: 'H2O4',
			opcaoB: 'H2SO4',
			opcaoC:'H2SO3',
			opcaoD:'S03',
			opcaoCerta:'H2SO4',
		},
		{
			texto:'SAITAMA SITUA-SE EM:',
			opcaoA:'KOREIA DO SUL',
			opcaoB:'CHINA',
			opcaoC:'MÉXICO',
			opcaoD:'JAPÃO',
			opcaoCerta:'JAPÃO',
		},
		{
			texto:'UZUMAKI NARUTO NASCEU EM:',
			opcaoA:'15 DE NOVEMVBRO',
			opcaoB:'10 DE OUTUBRO',
			opcaoC:'02 DE JUNHO',
			opcaoD:'22 DE DEZEMBRO',
			opcaoCerta:'10 DE OUTUBRO',
		},
		{
			texto:'QUEM TUDO QUER, TUDO...',
			opcaoA:'TEM',
			opcaoB:'GANHA',
			opcaoC:'VALORIZA',
			opcaoD:'PERDE',
			opcaoCerta:'PERDE',
		},
		{
			texto:'QUANTOS PAÍSES TEM A ÁFRICA',
			opcaoA:'52',
			opcaoB:'45',
			opcaoC:'54',
			opcaoD:'44',
			opcaoCerta:'54',
		},
		{
			texto:'QUAL DESSES É UM FRAMEWORK JAVASCRIPT',
			opcaoA:'REACT NATIVE',
			opcaoB:'MATERIALIZE',
			opcaoC:'LARAVEL',
			opcaoD:'KIVY',
			opcaoCerta:'REACT NATIVE',
		},
		{
			texto:'QUAL É O VALOR DA CONSTANTE PI',
			opcaoA:'3,12159...',
			opcaoB:'2,5823...',
			opcaoC:'3,14159...',
			opcaoD:'2,14159...',
			opcaoCerta:'3,14159...',
		},
		{
			texto:'ISAAC NEWTON É CONSIDERADO O PAI DA:',
			opcaoA:'HISTÓRIA',
			opcaoB:'INFORMÁTICA',
			opcaoC:'QUÍMICA',
			opcaoD:'FÍSICA',
			opcaoCerta:'FÍSICA',
		},
		{
			texto:'O QUE SIGNIFICA LED',
			opcaoA:'LIMITED EMITTING DIODE',
			opcaoB:'LIGHT EMITTING DIODE',
			opcaoC:'LIQUID EMITTING DIODE',
			opcaoD:'LIGHT EXTENSIBLE DIODE',
			opcaoCerta:'LIGHT EMITTING DIODE',
		}
	]

//Criando uma função para contar o tempo
	contaTempo = ()=>{

		if(ValorDoTempoInicial > 0){
			ValorDoTempoInicial--
		}
		if(ValorDoTempoInicial == 0){


			setTimeout(function(){
			ValorDoTempoInicial = 30
			BarraDeTempo.classList.remove('Refresh')

			},700)
						
			setTimeout(function(){
				inicio()
			},TimeOut)
		}

	}

	let PararTempo = setInterval(contaTempo, TimeOut)
	
	Pontos.setAttribute('data-content', '')

/*função inicio que será responsável por apresentar
as questões e as opções*/
	function inicio(){

		BarraDeTempo.classList.add('Refresh')

		index = Math.floor(Math.random()*Perguntas.length)

		perguntas.innerHTML = Perguntas[index].texto

		Btns[0].innerHTML = Perguntas[index].opcaoA
		Btns[1].innerHTML = Perguntas[index].opcaoB
		Btns[2].innerHTML = Perguntas[index].opcaoC
		Btns[3].innerHTML = Perguntas[index].opcaoD

		//console.log()

		for(let i = 0; i < Btns.length; i++){
			Btns[i].style.setProperty('background', '#333c3d')
			
		}

	}

	inicio()

	for(let i = 0; i < Btns.length; i++){
//atribuindo evento de click aos botões
		Btns[i].addEventListener('click', (element)=>{
			
			let PararTimeout = setTimeout(inicio,TimeOut)

			if(element.target.innerHTML !== Perguntas[index].opcaoCerta){

				setTimeout(inicio,1000)
				element.target.style.setProperty('background','rgba(255,0,0,.4)')
				BarraDeTempo.classList.remove('Refresh')

			}


			if (element.target.innerHTML == Perguntas[index].opcaoCerta) {
				BarraDeTempo.classList.remove('Refresh')
				element.target.style.setProperty('background','rgba(0,255,255,.4)')
				Perguntas.splice(index, 1)

				if (Perguntas.length == 0){
					element.target.style.setProperty('background','initial')
					BarraDeTempo.classList.remove('Refresh')
					console.log('certouu')
					clearInterval(PararTempo)
					clearTimeout(PararTimeout)

					alert(`PARABENS, VOCÊ ACERTOU TODAS AS QUESTÕES E VENCEU!!!`)

				}
				
			}
				
		})
	}
}
main()
