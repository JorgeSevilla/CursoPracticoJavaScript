/* Explicación de como escribir elementos HTML desde JS
//console.log('Hola', 'Jorge');

const h1 = document.querySelector('h1');
const p = document.querySelector('p');
const parrafo = document.getElementsByClassName('.parrafo');
const idP = document.getElementById('idP');
const input = document.querySelector('input');

console.log({
    h1,
    p,
    parrafo,
    idP,
    input,
});

h1.innerHTML = 'Modificación por medio de JS';

h1.innerText = 'A texto';
h1.getAttribute('clase'); //Ayuda a leer los atributos del elemento
h1.setAttribute('clase');//Ayuda a modificar los atributos

//Para modificar con las clases específicamente

h1.classList.add('color');//Se agrega el elemento
h1.classList.remove('color');//Remueve
h1.classList.toggle('color');//Se adiciona o se la quita caso tenga ya la clase
h1.classList.contains('color');//Condifional devuelve true o false

//Modifica el input desde JS
input.value = "123";

//Crear elementos desde 0
document.createElement('img');//Crea el elementos HML que se necesite

const img = document.createElement('img'); //Se crea el elemento desde el JS
img.setAttribute('src', 'path de la imágen');
idP.innerHTML = ''//Se borra el contenido de antes
idP.appendChild(img);//se envia como argumento en este caso la imágen

*/
//*****Escuchando Eventos desde JS */

const h1 = document.querySelector('h1');
const input1 = document.getElementById('calculo1');
const input2 = document.getElementById('calculo2');
const btn = document.getElementById('btnCalcular');
pResult = document.getElementById('resultado');

btn.addEventListener('click', btnOnclick);

function btnOnclick(){
    const suma = (Number(input1.value)) + (Number(input2.value));
    pResult.innerText = 'Resultado: ' + suma;
    //console.log("Evento de onclik");
}
