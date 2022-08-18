/*Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una variable y para qué sirve?
    Un espacio en memória para almacenar un valor
¿Cuál es la diferencia entre declarar e inicializar una variable?
    Inicializar es asignar un valor a la variable
    Declarar es dar un nombre a la variable
¿Cuál es la diferencia entre sumar números y concatenar strings?
    Sumar se ejecuta la función de suma
    Concatenar es la unión de strings
¿Cuál operador me permite sumar o concatenar?
        El operador +
*/

//Determina el nombre y tipo de dato para almacenar en variables la siguiente información:
//Traduce a código JavaScript las variables del ejemplo anterior y deja tu código en los comentarios.
let nombre = "Nombre"; //Una string
let apellido = "Apellido"; //Una string
let usuario = "usuario"; // Nombre de usuario en Platzi string
let edad = 30; // Número Edad
let email = "test@test.com"; //Correo electrónico string
let mayorEdad = 18; //Mayor de edad booelan
let dineroAhorrado =  22.0; //Dinero ahorrado numero
let deudas = 50 //Deudas e un número

/*Calcula e imprime las siguientes variables a partir de las variables del ejemplo anterior:
Nombre completo (nombre y apellido)
Dinero real (dinero ahorrado menos deudas)*/

let nombreCompleto = nombre + ' ' + apellido;
let dineroReal = dineroAhorrado -  deudas;

//************----------********* */
//Funciones
/*Responde las siguientes preguntas en la sección de comentarios:
¿Qué es una función?
        Son pasos a realizar de un procedimiento específico
¿Cuándo me sirve usar una función en mi código?
        Cuansdo se tiene que ejecutar un conjunto de sentencias que realizan una tarea en específico
¿Cuál es la diferencia entre parámetros y argumentos de una función?
        Los parámetros son declarados dentro de la función
        Los argumentos son pasados como parámetros al llamar una función
*/
        

/*Convierte el siguiente código en una función, pero, 
cambiando cuando sea necesario las variables constantes por parámetros y argumentos en una función:

*/

const name = "Juan David";
const lastname = "Castro Gallego";
const completeName = name + lastname;
const nickname = "juandc";

console.log("Mi nombre es " + completeName + ", pero prefiero que me digas " + nickname + ".");
function nombres(name, lastname, nickname){
    return console.log(`Mi nombre es ${completeName}, pero prefiero que me digas${nickname}`)
}

nombres("Jorge", "Sevilla", "Jorgito");

//*****Condicionales**** */
/*
Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un condicional?
    Es una condición para ejecutar una decisión
¿Qué tipos de condicionales existen en JavaScript y cuáles son sus diferencias?
    if, else, switch
    switch.- Toma una condición a evaluar
    if.- Es para ejecutar un flujo a evaluar
¿Puedo combinar funciones y condicionales?
    Si podemos interactuar 
*/

/*Replica el comportamiento del siguiente código que usa la sentencia switch utilizando if, else y else if:
const tipoDeSuscripcion = "Basic";

switch (tipoDeSuscripcion) {
   case "Free":
       console.log("Solo puedes tomar los cursos gratis");
       break;
   case "Basic":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
       break;
   case "Expert":
       console.log("Puedes tomar casi todos los cursos de Platzi durante un año");
       break;
   case "ExpertPlus":
       console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
       break;
}*/
const tipoDeSuscripcion = "Basic";

if(tipoDeSuscripcion == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
}else if(tipoDeSuscripcion == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
}else if(tipoDeSuscripcion == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año"); 
}else if(tipoDeSuscripcion == 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
} else{
    console.log("Sin subscripción");
}

/*Replica el comportamiento de tu condicional anterior con if, else y else if, pero ahora solo con if (sin else ni else if).💡 
*/

const tipoDeSuscripcionSinIf = "Basic";

if(tipoDeSuscripcionSinIf == 'Free'){
    console.log("Solo puedes tomar los cursos gratis");
    return;
} if(tipoDeSuscripcionSinIf == 'Basic'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un mes");
    return;
} if(tipoDeSuscripcionSinIf == 'Expert'){
    console.log("Puedes tomar casi todos los cursos de Platzi durante un año"); 
    return;
}if(tipoDeSuscripcionSinIf == 'ExpertPlus'){
    console.log("Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año");
    return;
} 
    console.log("Sin subscripción");

/**Bonus: si ya eres una experta o experto en el lenguaje, 
te desafío a comentar cómo replicar este comportamiento con arrays u objetos y un solo condicional.  */    


/*
//Con listas
var typeSuscription =["Free", "Basic", "expert", "ExpertPlus"] ;
var infoSuscription = ["Solo puedes tomar los cursos gratis", "Puedes tomar casi todos los cursos de Platzi durante un mes",
                        "Puedes tomar casi todos los cursos de Platzi durante un año", "Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año"];
var userSuscription = "Expert";

for(let i = 0; i < typeSuscription.length; i++)  {
    if (userSuscription == infoSuscription[i]){
        console.log(`Si estas suscrito al plan ${typeSuscription[i]} en el cual ${infoSuscription[i]}`)
    }
}*/

//Con objetos

const typesSuscriptionsObjects = {
    free: 'Solo puedes tomar los cursos gratis',
    basic: 'Puedes tomar casi todos los cursos de Platzi durante un mes',
    expert: 'uedes tomar casi todos los cursos de Platzi durante un año',
    expertplus: 'Tú y alguien más pueden tomar TODOS los cursos de Platzi durante un año',
};

function getTypesubscription(subscription){
    if(typesSuscriptionsObjects[subscription]){
        console.log(typesSuscriptionsObjects[subscription])
        return;
    }
    console.warn('No existe');
}

const typesSuscriptionsArrays = []

//***Ciclos */

/*Responde las siguientes preguntas en la sección de comentarios:
¿Qué es un ciclo?
Es una forma de ejecutar repedidamente un pedazo de código hasta llegar a una condición específica

¿Qué tipos de ciclos existen en JavaScript?
While, do while y for.

¿Qué es un ciclo infinito y por qué es un problema?
Es una repetición infinita y puede causar problemas de falta de memória.

¿Puedo mezclar ciclos y condicionales?
Sí, se puede interactuar de forma mixta
*/

/*Replica el comportamiento de los siguientes ciclos for utilizando ciclos while:
for (let i = 0; i < 5; i++) {
    console.log("El valor de i es: " + i);
}

while (i < 5) {
    console.log("El valor de i es: " + i);
    i++;
}

for (let i = 10; i >= 2; i--) {
    console.log("El valor de i es: " + i);
}

while (i >= 2) {
    console.log("El valor de i es: " + i);
    i--;
}*/ 

/*3️⃣ Escribe un código en JavaScript que le pregunte a los usuarios cuánto es `2 + 2`. Si responden bien, mostramos un mensaje de felicitaciones, 
pero si responden mal, volvemos a empezar.
    while (respuesta != '4') {
    let pregunta = prompt('¿Cuánto es 2 + 2?')
    respuesta = pregunta;
}
*/

//****Listas*** */

/**
 * 1️⃣ Responde las siguientes preguntas en la sección de comentarios:
    ¿Qué es un array?
        Es una lista de elementos
    ¿Qué es un objeto?
        Son elementos con clave y valor 
        const obj = {
            nombre: 'Jorge', 
            edad: 37
        }
    ¿Cuándo es mejor usar objetos o arrays?
        Objetos se usa cuando valores específicos
        Cuando se tenemos que recorrer una lista
    ¿Puedo mezclar arrays con objetos o incluso objetos con arrays?
        Si, porque los dos se pueden guardar mutuamente
2️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima su primer elemento.

        function imprimirElemento(array){
            console.log(array[0]);
        }

        imprimirElemento('Elemento1', 'Elemento2');
        Va a imprimir Elemento1

3️⃣ Crea una función que pueda recibir cualquier array como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el array completo).

        function imprimirTodosElementosArray(array){
            for(let i = 0; i < array.length; i++){
                console.log(array[i]);
            }
        }

4️⃣ Crea una función que pueda recibir cualquier objeto como parámetro e imprima todos sus elementos uno por uno (no se vale imprimir el objeto completo).


   //Inicialización del objeto const obj = {
            nombre: 'Jorge', 
            edad: 37
        }

    // Función para imprimir los elementos del objeto
    function imprimirTodosElementosObjeto(obj){
        const retorno = Object.values(obj) 
        for(let = 0; i < retorno.length; i++){
            console.log(retorno[i])
        }
    }
*/

