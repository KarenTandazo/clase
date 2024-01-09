let alumno = prompt("Ingresa tu nombre y apellido");
let materia = prompt("Ingresa el nombre de la materia");

let nota1 = Number(prompt("Ingresa tu nota 1 de " + materia + " (entre 0 y 10)"))
while (nota1<0 || nota1>10){
    nota1 = Number(prompt("Por favor, ingresa un número válido (entre 0 y 10) como nota 1"));
}

let nota2 = Number(prompt("Ingresa tu nota 2 de " + materia + " (entre 0 y 10)"))
while (nota2<0 || nota2>10){
    nota2 = Number(prompt("Por favor, ingresa un número válido (entre 0 y 10) como nota 2"));
}

let nota3 = Number(prompt("Ingresa tu nota 3 de " + materia + " (entre 0 y 10)"))
while (nota3<0 || nota3>10){
    nota3 = Number(prompt("Por favor, ingresa un número válido (entre 0 y 10) como nota 3"));
}

let prom=(nota1+nota2+nota3)/3;
if (prom>=7){
    alert(alumno + ", ¡Felicidades! Has aprobado " + materia + " con un promedio de " + prom + "/10")
} else{
    alert(alumno + ", gracias por tu esfuerzo. Nos vemos pronto en clase de " + materia + ". El promedio obtenido es " + prom + "/10")
}