document.querySelector("form.formulario-contacto").addEventListener("submit", function (event) {
    event.preventDefault(); //Paramos el envio

//Todos los elementos
    console.log(event.target.elements);
//Elementos de texto y numero (edad)
    console.log(event.target.fname.value);
    console.log(event.target.lname.value);
    console.log(event.target.age.value);
//Radio de luna
    console.log(event.target.luna.value);
//Range (Barra)
    console.log(event.target.exp.value);
//Textarea,mail y telefono
    console.log(event.target.message.value);
    console.log(event.target.email.value);
    console.log(event.target.phone.value);


const name = event.target.fname.value;
const lastName = event.target.lname.value;
const age = event.target.age.value;
const cuanticMoon = event.target.luna.value;
const flyExp = event.target.exp.value;
const Textarea = event.target.message.value;
const mail = event.target.email.value;
const phone = event.target.phone.value;
let validated = true;

if (name.length < 2) {
    alert("No se de que planeta vienes, pero aquí tenemos un nombre de al menos dos caracteres.")
    validated = false;
} else if (name.length > 14) {
    alert("Si no lo abrevias, no nos acordaremos de tu nombre")
    validated = false;
}

if (lastName.length === 0) {
    alert("¿No tienes apellido?")
    validated = false;
} else if (lastName.length > 14) {
    alert("Necesitamos un apellido más corto")
    validated = false;
}

if (age == 0) {
    alert("Alguna vuelta al sol has tenido que ver para estar escribiendo este formulario")
    validated = false;
} else if (age < 0) {
    alert("Tú al sol lo conoces poco, ¿verdad?")
    validated = false;
}


if (!cuanticMoon) {
    alert("Cuando dejas de mirarla cambia su posición. Pero, ¿la has visto o no?")
    validated = false;
}


if (!Textarea) {
    alert("Queremos conocerte. No te pedimos una web sobre ti pero al menos pon 10 caracteres en la caja de texto")
    validated = false;
} else if (Textarea.length == 10) {
    alert("¿10 caracteres justos? Venga, un caracter más y te dejo enviarlo")
    validated = false;
} 

if (!mail){
    alert("Te falta un mail en el mail")
    validated = false;
} else if (!mail.includes("@")) {
    alert("Te falta una @ en el mail")
    validated = false;
}

if (!phone){
    alert("Danos un número al que poder llamarte, no querrás ser el último en enterarte de que estás dentro de la próxima misión espacial")
    validated = false;
}

if (validated) {
    alert("3...2...1... ¡Tu formulario ha despegado!")
    // swal("3...2...1...", "¡Tú formulario ha despegado!", "success")
    event.target.submit();
}
})
