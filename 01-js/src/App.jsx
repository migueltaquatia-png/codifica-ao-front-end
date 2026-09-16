
import './App.css'

function App() {

function calcularPeso() {
    let pesoDoCaminhao = parseFloat(prompt("Digite o peso da balança:"));
    let pesoDaCarga = parseFloat(prompt("Digite o peso do caminhão vazio:"));

    let pesoTotal = pesoDoCaminhao - pesoDaCarga;
    
    alert("O peso total é: " + pesoTotal.toFixed(2) + " kg");
  }
  function calculaSalario() {
    let salario = parseFloat(prompt("Digite o salário:"));
    let diasTrabalhados = parseInt(prompt("Digite o número de dias trabalhados:"));

    let salarioTotal = salario * diasTrabalhados;
    
    alert("O salário total é: R$: " + salarioTotal.toFixed(2));
  }

function calcularFinancas() {
    let custoMensais = parseFloat(prompt("coloque o custo mensal:"));
    let doaçoes = parseFloat(prompt("Digite as doações od dia:"));

    let saldo = custoMensais - doaçoes;
    
    alert("o falor que falta e:" + saldo.toFixed(2));
  }

  function calcularFrutas() {
    let quantidadeDeFrutas = parseInt(prompt("Digite a quantidade de laranjas no começo do dia:"));
    let quantidadeFinal = parseInt(prompt("digite  a quantidade de laranjas no final do dia"));

    let precoTotal = quantidadeDeFrutas - quantidadeFinal;
    
    alert("a quantidade de laranjas vendiada foram: " + precoTotal);
  }

  function calcularFrete() {
    let frete = parseFloat(prompt("Digite o valor do frete:"));
    let peso = parseFloat(prompt("Digite o peso: "));
    let distancia = parseFloat(prompt("Digite a distância: "));

    let precoTotal = frete * peso * distancia;
    
    alert("O preço total do frete é: R$: " + precoTotal.toFixed(2));
  }

  function quatosDevs() {
    let clt = parseInt(prompt("Digite a quantidade de devs CLT:"));
    let pj = parseInt(prompt("Digite a quantidade de devs PJ:"));
    let estagio = parseInt(prompt("Digite a quantidade de devs em estágio:"));

    let totalDevs = clt + pj + estagio;
    
    alert("O total de devs é: " + totalDevs);
  }

function calcularSapatos() {
    let quantidadeDeSapatos = parseInt(prompt("Digite a quantidade de sapatos:"));
    let precoUnitario = parseFloat(prompt("Digite o preço unitário do sapato:"));

    let precoTotal = quantidadeDeSapatos * precoUnitario;
    
    alert("O preço total dos sapatos é: R$: " + precoTotal.toFixed(2));
  }

  
  function calcularPontos() {
    let gols = parseInt(prompt("Digite de vitórias:"));
    let empates = parseInt(prompt("Digite o numero de empates:"));

    let pontos = gols * 3 + empates * 1;
    
    alert("o time fez "  + pontos +  " pontos.");
  }

function bocaDoSapo() {
  let nome = prompt("Qual é o seu nome?")
  let bocaDoSapo = nome
  alert(nome + ", seu nome ta na boca do sapo")
  
}
function calcularMedia() {
  let nota1 = parseFloat(prompt("Digite a primeira nota:"));
  let nota2 = parseFloat(prompt("Digite a segunda nota:"));
  let media = (nota1 + nota2) / 2;
  alert("A média das notas é: " + media);
}
  return (
    <div className="cont-App">
      <h1>javascript no React</h1>

      <h2>atividades muito boas</h2>

    <button onClick={calcularPontos}>campeonato de futebol
    </button>
<button onClick={calcularSapatos}>trocas pe pequeno</button>
<button onClick={quatosDevs}>numero de devs</button>
<button onClick={calcularFrete}>calcular o preço do frete</button>
<button onClick={calcularFrutas}>estoque de frutas</button>
<button onClick={calcularFinancas}>finança da sua igreja</button>
<button onClick={calculaSalario}>recebe por dia no trabalho</button>
<button onClick={calcularPeso}>peso da carga</button>
<button onClick={calcularChance}>chance dos candidatos</button>


      <hr />


      <button onClick={bocaDoSapo}>boca do sapo</button>
      <button onClick={calcularMedia}>media</button>

    </div>
  )
  
}

export default App
