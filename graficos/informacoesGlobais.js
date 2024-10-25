const url = 'https://raw.githubusercontent.com/guilhermeonrails/api/main/dados-globais.json'

async function visualizarInformacoesGlobais() {

        const res = await fetch(url)

        const dados = await res.json()

        console.log(dados);

        const paragrafo = document.createElement('p')
        paragrafo.classList.add('graicos-container_texto')
        paragrafo.innerHTML = 'você sabia que o muno tem <span>${dados.total_pessoas_mundo}</span> de pessoas e aproximadamente <span>${dados.total_pessoas_conectadas}</span> estão conectadas em alguma rede social e passam em média <span>${dados.tempo_medio}</span> horas conectadas.'

        const container = document.getElementById('graicos-container')
        container.appendChild(paragrafo)

    }

    visualizarInformacoesGlobais()
