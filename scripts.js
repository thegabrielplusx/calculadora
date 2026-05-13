// 1. Esta función sirve para LIMPIAR toda la pantalla de la calculadora.
function clearDisplay() {
    // Busca el cuadro de texto (el "display") y lo deja vacío ('').
    document.getElementById('display').value = '';
}

// 2. Esta función sirve para ESCRIBIR o agregar números y símbolos.
function appendCharacter(character) {
    // Toma lo que ya está escrito en la pantalla y le pega al final el nuevo número o signo.
    document.getElementById('display').value += character;
}

// 3. Esta función sirve para BORRAR solo el último número que escribiste.
function deleteLast() {
    // Primero, guardamos la pantalla en una variable para que sea más fácil trabajar.
    const display = document.getElementById('display');
    // Le decimos: "Toma el texto actual y córtalo, dejando fuera el último caracter".
    display.value = display.value.slice(0, -1);
}

// 4. Esta función sirve para RESOLVER la operación matemática (el botón de igual).
function calculateResult() {
    const display = document.getElementById('display');
    // Usamos "try" (intentar) por si el usuario escribe algo que no tiene sentido matemático.
    try {
        // "eval" analiza el texto (ej: "2+2") y hace la cuenta matemática automáticamente.
        display.value = eval(display.value);
    } catch (e) {
        // Si la cuenta está mal escrita (ej: "++5"), en vez de fallar, muestra la palabra 'Error'.
        display.value = 'Error';
    }
}
