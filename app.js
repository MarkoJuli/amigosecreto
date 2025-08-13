// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

// Declarar variable de tipo array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar amigos
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const campoAmigo = document.getElementById('amigo');
    const nombreAmigo = campoAmigo.value.trim();
    
    // Validar que el campo no esté vacío
    if (nombreAmigo === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }
    
    // Actualizar el array de amigos usando push()
    amigos.push(nombreAmigo);
    
    // Limpiar el campo de entrada
    campoAmigo.value = '';
    
    // Mostrar la lista actualizada
    mostrarListaAmigos();
    
    // Opcional: Mostrar confirmación en consola
    console.log('Amigo agregado:', nombreAmigo);
    console.log('Lista actual de amigos:', amigos);
}

// Función para mostrar la lista de amigos en el HTML
function mostrarListaAmigos() {
    // Obtener el elemento de la lista
    const lista = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    lista.innerHTML = "";
    
    // Iterar sobre el arreglo de amigos
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista para cada amigo
        const elementoLista = document.createElement('li');
        elementoLista.textContent = amigos[i];
        
        // Agregar el elemento a la lista
        lista.appendChild(elementoLista);
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert('No hay amigos disponibles para sortear. Agrega algunos amigos primero.');
        return;
    }
    
    // Generar un índice aleatorio usando Math.random() y Math.floor()
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    
    // Obtener el nombre sorteado usando el índice aleatorio
    const amigoSorteado = amigos[indiceAleatorio];
    
    // Mostrar el resultado en el elemento de resultado
    const elementoResultado = document.getElementById('resultado');
    elementoResultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
    
    // Opcional: Mostrar confirmación en consola
    console.log('Amigo sorteado:', amigoSorteado);
    console.log('Índice aleatorio generado:', indiceAleatorio);
}
