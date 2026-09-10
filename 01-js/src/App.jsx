
import './App.css'

function App() {
  

function tester() {
  let nome = prompt("Qual é o seu nome?")
  let idade = prompt("qual e a sua idade?")
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
      <button onClick={tester}>Testar</button>
      <button onClick={calcularMedia}>media</button>

    </div>
  )
}

export default App
