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
