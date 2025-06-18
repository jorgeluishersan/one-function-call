// Función original: registrar al usuario
function registrar() {
    document.getElementById("resultado").textContent = "✅ Usuario registrado exitosamente.";
  }
  
  // Lógica para que solo se pueda ejecutar una vez
  function once(fn) {
    let called = false;
    return function(...args) {
      if (!called) {
        called = true;
        return fn(...args);
      }
      return undefined;
    };
  }
  
  // Crear la función envuelta con protección
  const registrarUnaVez = once(registrar);
  
  // Conectar al botón
  document.getElementById("registrarBtn").addEventListener("click", registrarUnaVez);