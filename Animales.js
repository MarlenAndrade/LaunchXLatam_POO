class Animales{

    #especie = "Felis Catus";
    //El hashTag es para hacer un atributo privado, sólo se puede usar dentro de la clase

    constructor(nombre, edad){ //constructor papá
        this.nombre = nombre;
        this.edad = edad;
    };

    canta(){
        return `${this.nombre} puede cantar`;
    };

    correr(){
        return `${this.nombre} puede correr`;
    };

    getEspecie(){
        return this.#especie;
    };
}

class Gatos extends Animales{

    constructor(nombre, edad, colorBigotes){
        super(nombre, edad); //llama al constructor papá
        this.colorBigotes = colorBigotes;
    };

    bigotes(){
        return `Tengo bigotes color ${this.colorBigotes}`; //Template string
    };

    años(){
        return `Tengo ${this.edad} años`;
    };
}

// let gato = new Animales ("Gato", "Felis Catus");
// console.log(gato.canta());
// console.log(gato.correr());

let animal = new Animales("gato", 5);
let gato = new Gatos("gato", 5, "blanco");
console.log(gato.bigotes());
console.log(gato.años());
console.log(gato.getEspecie());