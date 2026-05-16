const botaoMensagem = document.getElementById("botaoMensagem");
const mensagem = document.getElementById("mensagem");
const aprendizados = [
    {
        tema: 'HTML',
        pergunta: 'Qual é a diferença entre id e class?',
        reposta: 'O id identifica um único elemento. A class pode ser usada em vários elementos',
        entendimento: 'Entendi que uso id para algo específico e class para repetir estilos'
    },
    {
        tema: "CSS",
        pergunta: "Quando usar flexbox e grid?",
        resposta: "Flexbox organiza elementos em uma direção. Grid organiza elementos em linhas e colunas.",
        entendimento: "Entendi que grid é melhor para montar áreas com vários cards."
    },
    {
        tema: "JavaScript",
        pergunta: "Para que serve uma função?",
        resposta: "Uma função guarda um conjunto de comandos que podem ser executados quando forem chamados.",
        entendimento: "Entendi que funções ajudam a organizar e reaproveitar código."
    }
]

function alterarTexto() {
    alert("Bem-vindo ao meu portfólio! Este projeto foi criado com HTML, CSS e JavaScript.");
}

function mostrarTecnologia(tecnologia) {
    const texto = document.getElementById("tecnologiaSelecionada");

    texto.textContent = "Você selecionou: " + tecnologia;
}

function alterarTema() {
    document.body.classList.toggle("tema-escuro");

    const temaEscuroAtivo = document.body.classList.contains("tema-escuro");

    if (temaEscuroAtivo) {
        localStorage.setItem("tema", "escuro");
    } else {
        localStorage.setItem("tema", "claro");
    }
}

window.onload = function () {

    const temaSalvo = localStorage.getItem("tema");

    if (temaSalvo === "escuro") {
        document.body.classList.add("tema-escuro");
    }

}

function renderizarAprendizados(lista){
    const listaAprendizados = document.getElementById("listaAprendizados")
    const contadorAprendizados = document.getElementById("contadorAprendizados")

    if(!listaAprendizados || !contadorAprendizados){
        return;
    }

    listaAprendizados.innerHTML = "";

    for(let cont = 0; cont < lista.length; cont++){
        listaAprendizados.innerHTML += `
        <article class="aprendizado">
            <span>${lista[cont].tema}</span>
            <h3>${lista[cont].pergunta}</h3>
            <p><strong>Reposta:</strong> ${lista[cont].resposta}</p>
            <p><strong>O que entendi:</strong> ${lista[cont].entendimento}</p>
        </article>
        ` 
    }

    contadorAprendizados.textContent = "Total de Aprendizados: " + lista.length
}

renderizarAprendizados(aprendizados)