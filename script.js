//creamos la clase padre
class Animal{
    constructor(nombre, peso, edad){
        this.nombre = nombre;
        this.peso = peso;
        this.edad = edad;
    }
    informacion(){//el metodo que sera reescrito en las subclases..
        return "Nombre: "+ this.nombre + ", Peso: " + this.peso +"kg, Edad: " + this.edad;
    };
}

//creamos las clases que reciben la herencia de la clase Padre
class Perro extends Animal{
    constructor(nombre, peso, edad, raza){
        super(nombre, peso, edad);
        this.raza = raza;
    }
    //reescribimos el metodo y recordar que los metodos siempre van afuera del constructor
    informacion(){
        return "Perro: "+ this.nombre + ", Peso: " + this.peso +"kg, Edad: " + this.edad + ", Raza: " + this.raza;
    };
}

class Gato extends Animal{
    constructor(nombre, peso, edad, sexo){
        super(nombre, peso, edad);
        this.sexo = sexo;
    }
    informacion(){
        return "Gato: "+ this.nombre + ", Peso: " + this.peso +"kg, Edad: " + this.edad + ", Sexo: " + this.sexo;
    };
}


class Conejo extends Animal{
    constructor(nombre, peso, edad, color){
        super(nombre, peso, edad);
        this.color= color;
    }
    informacion(){
        return "Conejo: "+ this.nombre + ", Peso: " + this.peso +"kg, Edad: " + this.edad + ", Color: " + this.color;
    };
}

//creamos las tres instancias/ una por cada subclase
let perro1 = new Perro("Oso", 50, 9, "Golden");

let gato1 = new Gato("Leni", 20, 4, "Hembra");

let conejo1 = new Conejo("Pedro", 30, 3, "Gris");

//guardamos en el array que se empleara para mostrarlo en el hrml
let arrayAnimales = [perro1, gato1, conejo1]; //y guardamos los objetos

//creamos la funcion para mostrar los animales en el html
function verAnimales(){
    let lista = document.getElementById('containerList');
    for(item of arrayAnimales){
        let itemLista = document.createElement("li");
        itemLista.innerText = item.informacion();
        lista.appendChild(itemLista);
    }
}


