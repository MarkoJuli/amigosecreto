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
    
    // Opcional: Mostrar confirmación en consola
    console.log('Amigo agregado:', nombreAmigo);
    console.log('Lista actual de amigos:', amigos);
}
