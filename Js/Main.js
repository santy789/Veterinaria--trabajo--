// js/main.js

// Cargar datos iniciales desde datos.json si no existen en localStorage
async function cargarDatosIniciales() {
  if (!localStorage.getItem('datosVet')) {
    try {
      const response = await fetch('./data/datos.json'); // Uso de fetch()
      if (!response.ok) throw new Error('Error al cargar datos.json');
      const datos = await response.json();
      
      // Guardar en localStorage
      localStorage.setItem('datosVet', JSON.stringify(datos));
      console.log('Datos cargados e inicializados en localStorage.');
    } catch (error) {
      console.error('Error:', error);
    }
  }
}

// Función de Inicio de Sesión
function iniciarSesion(email, password) {
  const datos = JSON.parse(localStorage.getItem('datosVet'));
  if (!datos) return { exito: false, mensaje: 'Base de datos no inicializada.' };

  // Buscar coincidencia de usuario
  const usuario = datos.usuarios.find(
    u => u.email.toLowerCase() === email.toLowerCase() && u.pass === password
  );

  if (usuario) {
    const { pass, ...sesionUsuario } = usuario;
    // Guardar el usuario conectado
    localStorage.setItem('usuarioLogueado', JSON.stringify(sesionUsuario));
    return { exito: true, usuario: sesionUsuario };
  }

  return { exito: false, mensaje: 'Usuario o contraseña incorrectos.' };
}

// Escuchar el formulario de Login en index.html
document.addEventListener('DOMContentLoaded', async () => {
  await cargarDatosIniciales();

  const formLogin = document.getElementById('form-login');
  if (formLogin) {
    formLogin.addEventListener('submit', (e) => {
      e.preventDefault();
      const email = document.getElementById('email').value.trim();
      const pass = document.getElementById('password').value.trim();

      const res = iniciarSesion(email, pass);
      if (res.exito) {
        // Adaptar redirección según rol
        if (res.usuario.rol === 'veterinario') {
          window.location.href = 'pages/turnos.html';
        } else {
          window.location.href = 'pages/mis-mascotas.html';
        }
      } else {
        alert(res.mensaje);
      }
    });
  }
});

// Función global para cerrar sesión (Logout)
function cerrarSesion() {
  localStorage.removeItem('usuarioLogueado');
  window.location.href = '../index.html';
  }
