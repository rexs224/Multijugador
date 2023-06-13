// Identifico la etiqueta main.
// Coloco el flexbox
let section = document.getElementsByTagName('section')[1];
section.classList.add('container');

// Coloco el numero de filas y columnas
let nFilas = 15;
let nColumnas = 15;

let div, objetivo, j1, j2;

let filasWASD, columnasWASD
let filasFlechas, columnasFlechas
let filasMeta, columnasMeta
let puntuacion1=0;
let puntuacion2=0;

// Creamos el inicio del tablero
document.addEventListener('load', inicio());

/**
 * Funcion que inicia el tablero (CON TODO LO NECESARIO)
 */
function inicio(){
    // Bucles para crear filas y columas
    for (let i = 0; i < nFilas; i++){
        for(let j = 0;  j < nColumnas; j++){
            div = document.createElement('div'); 
            div.classList.add('card');
            div.setAttribute('id', `f${i}c${j}`);

            section.appendChild(div);
        }
    }
    colocarFichas();
}

/**
 * Function que coloca las casillas inicialmente (ALEATORIO TODO)
 */
function colocarFichas(){
    let numero1;
    let numero2;

    filasMeta= Math.floor(Math.random()*15);
    columnasMeta= Math.floor(Math.random()*15);

    console.log(Math.floor(Math.random()*15));
    objetivo = document.getElementById(`f${filasMeta}c${columnasMeta}`);
    objetivo.classList.add('objetivo');

    filasWASD= Math.floor(Math.random()*15);
    columnasWASD= Math.floor(Math.random()*15);

    j1 = document.getElementById(`f${filasWASD}c${columnasWASD}`);
    j1.classList.add('j1');

    filasFlechas= Math.floor(Math.random()*15);
    columnasFlechas= Math.floor(Math.random()*15);

    j2 = document.getElementById(`f${filasFlechas}c${columnasFlechas}`);
    j2.classList.add('j2');
}

// Creamos el evento de escucha de teclado
document.addEventListener('keydown', mover);

/**
 * Funcion que detecta el movimiento y ejecuta el cambio de posicion
 * -    j1: mueve con flechas
 * -    j2: mueve con wasd
 * 
 * @param {Object} event - Informacion sobre el evento que se ha ejecutado  
 */
function mover(event){
    console.log(event);
    switch(event['key']){
        case 'w':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(filasWASD==0){
                filasWASD=14;
            }else{
                filasWASD=filasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==14){
                    filasWASD=0;
                }else{
                    filasWASD=filasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 's':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(filasWASD==14){
                filasWASD=0;
            }else{
                filasWASD=filasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasWASD==0){
                    filasWASD=14;
                }else{
                    filasWASD=filasWASD-1;
                } 
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'a':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(columnasWASD==0){
                columnasWASD=14;
            }else{
                columnasWASD=columnasWASD-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==14){
                    columnasWASD=0;
                }else{
                    columnasWASD=columnasWASD+1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'd':
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
            if(columnasWASD==14){
                columnasWASD=0;
            }else{
                columnasWASD=columnasWASD+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasWASD==0){
                    columnasWASD=14;
                }else{
                    columnasWASD=columnasWASD-1;
                }
            }
            document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.add('j1');
            ganar();
            break;
        case 'ArrowUp':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(filasFlechas==0){
                filasFlechas=14;
            }else{
                filasFlechas=filasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==14){
                    filasFlechas=0;
                }else{
                    filasFlechas=filasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowDown':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(filasFlechas==14){
                filasFlechas=0;
            }else{
                filasFlechas=filasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(filasFlechas==0){
                    filasFlechas=14;
                }else{
                    filasFlechas=filasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowLeft':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(columnasFlechas==0){
                columnasFlechas=14;
            }else{
                columnasFlechas=columnasFlechas-1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==14){
                    columnasFlechas=0;
                }else{
                    columnasFlechas=columnasFlechas+1;
                } 
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;
        case 'ArrowRight':
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
            if(columnasFlechas==14){
                columnasFlechas=0;
            }else{
                columnasFlechas=columnasFlechas+1;
            }
            if(`f${filasWASD}c${columnasWASD}`==`f${filasFlechas}c${columnasFlechas}`){
                if(columnasFlechas==0){
                    columnasFlechas=14;
                }else{
                    columnasFlechas=columnasFlechas-1;
                }
            }
            document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.add('j2');
            ganar();
            break;      
        }
}
function ganar(){
    if(`f${filasWASD}c${columnasWASD}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ha ganado el jugador 1");
        document.removeEventListener('keydown',mover);
        puntuacion1++;
    }
    if(`f${filasFlechas}c${columnasFlechas}`==`f${filasMeta}c${columnasMeta}`){
        alert("Ha ganado el jugador 2");
        document.removeEventListener('keydown',mover);
        puntuacion2++;
    }
}
document.getElementById('jugador1').textContent=`Jugador 1: ${puntuacion1}`;
document.getElementById('jugador2').textContent=`Jugador 2: ${puntuacion2}`;
function reinicio(){
    document.addEventListener('keydown',mover);
    document.getElementById(`f${filasWASD}c${columnasWASD}`).classList.remove('j1');
    document.getElementById(`f${filasFlechas}c${columnasFlechas}`).classList.remove('j2');
    document.getElementById(`f${filasMeta}c${columnasMeta}`).classList.remove('objetivo');
    colocarFichas();
    document.getElementById('jugador1').textContent=`Jugador 1: ${puntuacion1}`;
    document.getElementById('jugador2').textContent=`Jugador 2: ${puntuacion2}`;
}

/**
 * PENDIENTE:
 * 1. Mover casillas.--
 * 2. Que hago con los limites.--
 * 3. (colision entre dos jugadores. QUE HAGO).--
 * 4. Que hago cuando gano.--
 * 5. OBGLITAGORIO. Boton reinicio para ejecutar de nuevo la funcion inicio.--
 * 6. Contadores para puntuacion??--
 * 7. Eliminar evento de teclado cuando hay un ganador.--
 * 8. CSS BIEN.--
 * 9. OPCIONAL. Contador de tiempo antes de poder iniciar el juego(tablero pintado pero sin posibilidad de ejecutar eventos de teclado)
 */