const feminino = jogadores.filter((jogador) => jogador.elenco === 'feminino')
const masculino = jogadores.filter((jogador) => jogador.elenco === 'masculino')

const femininoConteudo = document.querySelector('#feminino .conteudo')
const masculinoConteudo = document.querySelector('#masculino .conteudo')

function aoClicarNoJogador (jogador) {
    localStorage.setItem('jogador', JSON.stringify(jogador))

    window.location.href = 'detalhes.html'
}

function elementoJogador (jogador) {
    const elemento = document.createElement('article')
    const img = document.createElement('img')
    const nome = document.createElement('h5')

    elemento.setAttribute('class', 'jogador')
    img.setAttribute('src', jogador.imagem)
    nome.setAttribute('class', 'nome')

    nome.textContent = jogador.nome

    elemento.appendChild(img)
    elemento.appendChild(nome)

    elemento.addEventListener('click', function () {
        aoClicarNoJogador(jogador)
    })
    
    return elemento
}

function inserirEmConteudo (conteudo, jogadores) {
    jogadores.forEach(function (jogador) {
        const elemento = elementoJogador(jogador)

        conteudo.appendChild(elemento)
    })
}

function inserirConteudos () {
    inserirEmConteudo(femininoConteudo, feminino)
    inserirEmConteudo(masculinoConteudo, masculino)
}

function iniciar() {
    if (sessionStorage.getItem('logged') === 'true') {
        authUser()
        inserirConteudos()
        return
    }
}

function authUser() {
    const login = document.querySelector('#login')
    const app = document.querySelector('#app')

    login.classList.add('esconder')
    app.classList.remove('esconder')
    sessionStorage.setItem('logged', 'true')
}

function login () {
    const input = document.querySelector('#login input')

    if (input.value === 'SENHA') {
        authUser()
        inserirConteudos()
    } else {
        alert('Senha incorreta!')
    }
}

iniciar()