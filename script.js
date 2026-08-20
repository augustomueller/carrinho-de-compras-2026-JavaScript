
const produtos = [
    { id: 1, nome: "Playstation 1", preco: 2300.00, imagem: "./img/Playstation1.png" },
    { id: 2, nome: "Playstation 2", preco: 2459.00, imagem: "./img/Playstation 2.png" },
    { id: 3, nome: "Playstation 3", preco: 2189.90, imagem: "./img/Playstation 3.png" },
    { id: 4, nome: "Playstation 4", preco: 1500.00, imagem: "./img/Playstation 4.png" },
    { id: 5, nome: "Playstation 5", preco: 3700.00, imagem: "./img/Playstation 5.png" }
]

const root = document.getElementById("root");

let carrinho = [];

function mostrarProdutos() {
    root.innerHTML = `

    <header>
        <h1>Loja de Produtos</h1>
    </header>
    <main class="container">
    <div class="produtos">
        <img src="./img/Polystation.png" alt="Playstation 1">
        <p>Playstation 1</p>
        <p>R$ 1000,00</p>
        <button onclick="adicionarCarrinho(1)">Adicionar ao Carrinho</button>
    </div>
     <div class="produtos">
        <img src="./img/Playstation 2.png" alt="Playstation 2">
        <p>Playstation 2</p>
        <p>R$ 1500,00</p>
        <button onclick="adicionarCarrinho(2)">Adicionar ao Carrinho</button>
    </div>
    <div class="produtos">
        <img src="./img/Playstation 3.png" alt="Playstation 3">
        <p>Playstation 3</p>
        <p>R$ 1000,90</p>
        <button onclick="adicionarCarrinho(3)">Adicionar ao Carrinho</button>
    </div>
    <div class="produtos">
        <img src="./img/Playstation 4.png" alt="Playstation 4">
        <p>Playstation 4</p>
        <p>R$ 1700,00</p>
        <button onclick="adicionarCarrinho(4)">Adicionar ao Carrinho</button>
    </div>
    <div class="produtos">
        <img src="./img/Playstation 5.png" alt="Playstation 5">
        <p>Playstation 5</p>
        <p>R$ 3700,00</p>
        <button onclick="adicionarCarrinho(5    )">Adicionar ao Carrinho</button>
    </div>
    <div class="carrinho">
        <h2>Carrinho de Compras</h2>
        <ul id="lista-carrinho"></ul>
        <p id="total-carrinho">Total: R$ 0,00</p>
    </div>
    </main>
`;

carrinhoAtualizado();

}

window.adicionarCarrinho = function (id) {
    const produtoEscolhido = produtos.find(p => p.id === id);

    carrinho.push(produtoEscolhido);

    carrinhoAtualizado();
};

function carrinhoAtualizado() {
    const listaCarrinho = document.getElementById("lista-carrinho");
    const totalCarrinho = document.getElementById("total-carrinho");

    if (carrinho.length === 0) {
        listaCarrinho.innerHTML = "<p>O carrinho está vazio.</p>";
        totalCarrinho.textContent = "Total: R$ 0,00";
        return;
    }

    listaCarrinho.innerHTML = carrinho.map(item => `
        <li style="margin-bottom: 10px; border-bottom: 1px solid #ccc; padding-bottom: 5px;">
        ${item.nome} <br>
        <strong> R$ ${item.preco.toFixed(2)}</strong>
        </li>
    `).join("");

    const valorTotal = carrinho.reduce((acumulador, item) => acumulador + item.preco, 0);

    totalCarrinho.innerText = `Total: R$ ${valorTotal.toFixed(2)}`;
}

mostrarProdutos();


