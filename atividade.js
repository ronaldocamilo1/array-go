
const total = 15;
const inputsDiv = document.getElementById('inputs');


// Cria os campos
for (let i = 1; i <= total; i++) {
inputsDiv.innerHTML += `${i}. Altura: <input type='number' step='0.01' class='altura'>
Gênero: <select class='genero'><option value='M'>M</option><option value='F'>F</option></select><br>`;
}


function calcular() {
const alturas = Array.from(document.querySelectorAll('.altura')).map(i => parseFloat(i.value));
const generos = Array.from(document.querySelectorAll('.genero')).map(i => i.value);


const maior = Math.max(...alturas);
const menor = Math.min(...alturas);


let somaM = 0, qtdM = 0, qtdF = 0;
for (let i = 0; i < total; i++) {
if (generos[i] === 'M') { somaM += alturas[i]; qtdM++; }
else { qtdF++; }
}
const mediaM = qtdM > 0 ? (somaM / qtdM).toFixed(2) : 'N/A';


document.getElementById('resultado').innerHTML = `
<p>Maior altura: ${maior}</p>
<p>Menor altura: ${menor}</p>
<p>Média altura (Masculino): ${mediaM}</p>
<p>Nº de pessoas Feminino: ${qtdF}</p>`;
}