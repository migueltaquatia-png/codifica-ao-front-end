
import './App.css'

function App() {


   function gerarRelatorioKowalski(relatorios) {
    if (relatorios.length === 0) {
        console.log("Por favor, adicione os dados crus na lista.");
        return;
    }

    const totalRelatorios = relatorios.length;
    let tempoTotal = 0;
    let valorTotal = 0;

    let qtdPF = 0;
    let valorPF = 0;
    let tempoPF = 0;

    let qtdPJ = 0;
    let valorPJ = 0;
    let tempoPJ = 0;

    
    relatorios.forEach(r => {
        tempoTotal += r.tempoHoras;
        valorTotal += r.valor;

        if (r.tipo.toUpperCase() === 'PF') {
            qtdPF++;
            valorPF += r.valor;
            tempoPF += r.tempoHoras;
        } else if (r.tipo.toUpperCase() === 'PJ') {
            qtdPJ++;
            valorPJ += r.valor;
            tempoPJ += r.tempoHoras;
        }
    });

   
    const mediaValorPF = qtdPF > 0 ? valorPF / qtdPF : 0;
    const mediaValorPJ = qtdPJ > 0 ? valorPJ / qtdPJ : 0;
    const mediaTempoPF = qtdPF > 0 ? tempoPF / qtdPF : 0;
    const mediaTempoPJ = qtdPJ > 0 ? tempoPJ / qtdPJ : 0;

    
    const fmtMoeda = (valor) => valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });

    
    console.log("=== RELATÓRIO DE DESEMPENHO - KOWALSKI ===");
    console.log(`Quantidade total de relatórios: ${totalRelatorios}`);
    console.log(`Tempo total trabalhado: ${tempoTotal} horas`);
    console.log(`Valor total recebido: ${fmtMoeda(valorTotal)}`);
    console.log("------------------------------------------");
    console.log(`Média de valor por relatório PF: ${fmtMoeda(mediaValorPF)}`);
    console.log(`Média de valor por relatório PJ: ${fmtMoeda(mediaValorPJ)}`);
    console.log("------------------------------------------");
    console.log(`Média de tempo por relatório PF: ${mediaTempoPF.toFixed(2)} horas`);
    console.log(`Média de tempo por relatório PJ: ${mediaTempoPJ.toFixed(2)} horas`);

    gerarRelatorioKowalski(dadosCrus);
  }  

   function calcularTokens(promptTexto) {
    
    let numCaracteres = promptTexto.length;
    
    
    let custoTotal = 5 + numCaracteres;
    
    return custoTotal;
    let meuPrompt = "Qual a capital do Brasil?";
let total = calcularTokens(meuPrompt);

console.log(`Texto: "${meuPrompt}"`);
console.log(`Caracteres: ${meuPrompt.length}`);
console.log(`Tokens gastos: ${total}`); 
  }

  function vendasDeJares() {
    let quantidadeDeJares = parseInt(prompt("Digite a quantidade de caminhao:"));
    let precoUnitario = parseFloat(prompt("Digite o preço unitário por caminhao:"));
    let faturamento = quantidadeDeJares * precoUnitario;
    alert("O faturamento com a venda dos jarés é: R$: " + faturamento.toFixed(2));
  }

  function calculadoraDeChurrasco() {
    let quantidadeDePessoas = parseInt(prompt("Digite a quantidade de pessoas:"));
    let quantidadeDeCarne = parseFloat(prompt("Digite a quantidade de carne por pessoa (em kg):"));
    let quantidadeDeBebidas = parseFloat(prompt("Digite a quantidade de bebidas por pessoa (em litros):"));
    let agua = parseFloat(prompt("Digite a quantidade de água por pessoa (em litros):"));
    let refri = parseFloat(prompt("Digite a quantidade de refrigerante por pessoa (em litros):"));

    let totalDeCarne = quantidadeDePessoas * quantidadeDeCarne;
    let totalDeBebidas = quantidadeDePessoas * (quantidadeDeBebidas + agua + refri); 

    alert("A quantidade total de carne necessária é: " + totalDeCarne.toFixed(2) + " kg e a quantidade total de bebidas necessária é: " + totalDeBebidas.toFixed(2) + " litros.");

  }
function preçoDaRaçao() {
      let pesoDaRaçao = parseInt(prompt("Digite o peso da ração:"));
    let preço = 10

    let precoUnitario = preço * 1;

    let precoTotal = pesoDaRaçao * precoUnitario;
    alert("O preço total da ração é: R$: " + precoTotal.toFixed(2));
  }

  function calcularPoliticaDePrecos() {
    let precoCusto = parseFloat(prompt("Digite o preço de custo:"));
    let precoVenda = parseFloat(prompt("Digite o preço de venda:"));  

    let lucro = precoVenda - precoCusto;
    let margemLucro = (lucro / precoCusto) * 100;
    alert("O lucro é: R$: " + lucro.toFixed(2) + " e a margem de lucro é: " + margemLucro.toFixed(2) + "%");
  }

  function calcularPoupanca() {
    let salario = parseFloat(prompt("Digite o salário:"));
    let moradia = parseFloat(prompt("Digite o valor da moradia:"));
    let agua = parseFloat(prompt("Digite o valor da água:"));
    let luz = parseFloat(prompt("Digite o valor da luz:"));
    let internet = parseFloat(prompt("Digite o valor da internet:"));
    let gasolina = parseFloat(prompt("Digite o valor da gasolina:"));
    let streaming = parseFloat(prompt("Digite o valor do streaming:"));
    let teleone = parseFloat(prompt("Digite o valor do telefone:"));
    let outros = parseFloat(prompt("Digite o valor de outros gastos:"));

    let totalGastos = moradia + agua + luz + internet + gasolina + streaming + teleone + outros;
    let poupanca = salario - totalGastos;
    alert("A poupança do mês é: R$: " + poupanca.toFixed(2));
  }
  function calcularLucro() {
    let gasto = parseFloat(prompt("Digite o gasto:"));
    let ingressos = parseFloat(prompt("Digite os ingressos:"));
    let itensVendidos = parseFloat(prompt("Digite os itens vendidos:"));
    let lucro = ingressos + itensVendidos - gasto;
    let lucroPorcentagem = (lucro / gasto) * 100;
    alert("O lucro do mês é: R$: " + lucro.toFixed(2) + " e a porcentagem de lucro é: " + lucroPorcentagem.toFixed(2) + "%");
  }

function calcularPlanejamento() {
    let quantidadeDeShows = parseInt(prompt("Digite a quantidade de shows:"));
    let bombas =parseInt(prompt("Digite a quantidade de bombas:")); 

    let quantidadePorDia = quantidadeDeShows * bombas;
    
    alert("A quantidade de bombas nesse shows é: " + quantidadePorDia.toFixed(2));
  }
  
  let calcularFaturamento = () => {
    let faturamento = parseFloat(prompt("Digite o faturamento:"));
    let despesas = parseFloat(prompt("Digite as despesas:"));

    let lucro = faturamento - despesas;
    
    alert("O lucro da da dona bete de hoje foi de: R$: " + lucro.toFixed(2));
  }
    
function calcularOpreçoDoFrete() {
    let frete = parseFloat(prompt("Digite o valor do frete:"));
    let peso = parseFloat(prompt("Digite o peso: "));
    let distancia = parseFloat(prompt("Digite a distância: "));
    let volume = parseFloat(prompt("Digite o volume: "));

    frete=15+(2*peso)+(0.05*distancia)+(10*volume)

    alert("O preço total do frete é: R$: " + frete.toFixed(2));
  }

function calcularChance() {
    let candidato = parseInt(prompt("Digite o nome do candidato:"));
    let numerodeuso = parseInt(prompt("quantas fezes o aluno usou o celular:"));

    if (numerodeuso === 0) {
      alert(`O ${candidato} tem 10% de chances de sucesso!!`);
      } else if (numerodeuso === 1) {
      alert(`O ${candidato} tem 5% de chances de sucesso!!`);
    } else if (numerodeuso === 2) {
      alert(`O ${candidato} tem 2% de chances de sucesso!!`);
    }
  }

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
<button onClick={calcularSapatos}>1-trocas pe pequeno</button>
<button onClick={quatosDevs}>2-numero de devs</button>
<button onClick={calcularFrete}>3-calcular o preço do frete</button>
<button onClick={calcularFrutas}>4-estoque de frutas</button>
<button onClick={calcularFinancas}>5-finança da sua igreja</button>
<button onClick={calculaSalario}>6-recebe por dia no trabalho</button>
<button onClick={calcularPeso}>7-peso da carga</button>
<button onClick={calcularChance}>8-chance dos candidatos</button>
<button onClick={calcularOpreçoDoFrete}>9-telles transporte</button>
<button onClick={calcularFaturamento}>10-faturamento da dona bete</button>
<button onClick={calcularPlanejamento}>11-planejamento dos suprimentos</button>
<button onClick={calcularLucro}>12-lucro mensal do ganso</button>
<button onClick={calcularPoupanca}>13-poupança do mano juca</button>
<button onClick={calcularPoliticaDePrecos}>14-política de preços</button>
<button onClick={preçoDaRaçao}>15-pet shop ron bernardo</button>
<button onClick={calculadoraDeChurrasco}>16-calculadora de churrasco</button>
<button onClick={vendasDeJares}>17-jarés na fazenda de Gael</button>
<button onClick={calcularTokens}>18-preço dos prompts</button>
<button onClick={gerarRelatorioKowalski}>19-relatório dos relatórios</button>


      <hr />


      <button onClick={bocaDoSapo}>boca do sapo</button>
      <button onClick={calcularMedia}>media</button>

    </div>
  )
  
}

export default App
