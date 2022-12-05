let nombres = {
    nombre: "Marlen",
    apellido: "Andrade"
};

console.log(nombres.nombre);
console.log(nombres.hasOwnProperty("telefono"));

console.log(nombres);

function perro(nombre, edad){
    
    perro.nombre = nombre;
    perro.edad = edad;
}

perro.prototype.habla = function(){
        return "Wof Wof soy un perro";
}

let firulais = new perro("Firulais", 9);
console.log(firulais.habla());
