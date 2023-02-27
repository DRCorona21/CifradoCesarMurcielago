//Funcion que me permite cargar los metodos
window.addEventListener("load", Cargar, true);

//La funcion inicio es la que recoge todos los datos de los cuadros de texto
//y las acciones de los botones
function Cargar(){
    document.getElementById("cadena").addEventListener("keyup", function(){
        this.value = this.value.toLowerCase();
        //Vuelve todo a minusculas
    }, true);
    
    document.getElementById("cifrar").addEventListener("click",function(){  
        let texto = document.getElementById("cadena").value;
        let desplazamiento = document.getElementById("desplazamiento").value;               
        document.getElementById("result").value = cifrar(texto, desplazamiento);
        document.getElementById("result2").value = cifrarMurcielago(texto);
        //Esta ulltima le da el valor del resutado que retorna la funcion cifrar
    },true);

    document.getElementById("descifrar").addEventListener("click",function(){  
        let texto = document.getElementById("cadena").value;
        let desplazamiento = document.getElementById("desplazamiento").value;                             
        document.getElementById("result").value = descifrar(texto, desplazamiento);
        //Esta ulltima le da el valor del resutado que retorna la funcion descifrar
    },true);
}


//La funcion cifrar es la que se encarga de desplazar las letras +3
function cifrar(texto, desplazamiento) {
    let resultado='';
    let abc = 'abcdefghijklmnñopqrstuvwxyza';
    //Se crean las variables que me permiten conocer mi abecedario
    //La variable resultado es la que se va a retornar para sustituir
    //en el cuadro de texto result
    desplazamiento = (desplazamiento % 27 + 27) %27;
    //El desplazamiento ya esta definido en la funcion de inicio
    //El modulo sirve para poder regresar
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
            
            if (abc.indexOf(texto[i])!=-1)
            {   
                let posicion=((abc.indexOf(texto[i])+desplazamiento) % 27);
                resultado+=abc[posicion];
                //La variable posicion nos va a regresar la nueva posicion de la letra
                //La variable resultado nos va a regresar la nueva letra con la nueva posicion
            }
            //Este else se encarga de cualquier caracter que no sea alguna letra
            //de nuestro abecedario se regrese igual
            else
                resultado+=texto[i]; 
        }
    }
    return resultado;
}

function cifrarMurcielago(texto) {
    let resultadoM='';
    let abc2 = 'murcielago';
    //Se crean las variables que me permiten conocer mi abecedario
    //La variable resultado es la que se va a retornar para sustituir
    //en el cuadro de texto result
    //El desplazamiento ya esta definido en la funcion de inicio
    //El modulo sirve para poder regresar
    
    if (texto){
        for (let i=0; i<texto.length; ++i){
            
            if (abc2.indexOf(texto[i])!=-1)
            {   
                let posicionM=abc2.indexOf(texto[i]);
                resultadoM+=posicionM+1;
                //La variable posicion nos va a regresar la nueva posicion de la letra
                //La variable resultado nos va a regresar la nueva letra con la nueva posicion
            }
            //Este else se encarga de cualquier caracter que no sea alguna letra
            //de nuestro abecedario se regrese igual
            else
                resultadoM+=texto[i]; 
        }
    }
    return resultadoM;
}

//La funcion descifrar es la que se encarga de desplazar las letras -3
function descifrar(texto, desplazamiento) {
    let resultado='';
    let abc = 'abcdefghijklmnñopqrstuvwxyz';
    desplazamiento = (desplazamiento % 27 - 27) %27;
    if (texto){
        for (let i=0; i<texto.length; ++i){
            
            if (abc.indexOf(texto[i])!=-1)
            { 
                let posicion=((abc.indexOf(texto[i])-desplazamiento) % 27);
                resultado+=abc[posicion];
                //La variable posicion nos va a regresar la nueva posicion de la letra
                //La variable resultado nos va a regresar la nueva letra con la nueva posicion
            }
            //Este else se encarga de cualquier caracter que no sea alguna letra
            //de nuestro abecedario se regrese igual
            else
                resultado+=texto[i]; 
        }
    }
    return resultado;
}