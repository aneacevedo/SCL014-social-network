// Este es el punto de entrada de tu aplicacion
import {
  register,
  loginApp,
  goggleLogin,
} from './lib/index.js';
// import {
//     routing
// } from './lib/Router';


// routing()

const loginPage = document.getElementById('first-screen');
const registerPage = document.getElementById('register-screen');
const registerBtn = document.getElementById('register');
const newUserBtn = document.getElementById('newUserBtn');
const enterBtn = document.getElementById('enterBtn');
const screenTwo = document.getElementById('screen-two');
const googleBtn = document.getElementById('googleBtn');


const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

// Ir a la página de registro
registerBtn.addEventListener('click', () => {
  loginPage.style.display = 'none';
  registerPage.style.display = 'flex';
});


// Crear una cuenta nueva
newUserBtn.addEventListener('click', () => {
  const email = document.getElementById('new-email').value;
  const password = document.getElementById('new-password').value;
  register(email, password, registerPage, screenTwo);
});


// Ingresar con cuenta registrada
enterBtn.addEventListener('click', () => {
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;
  loginApp(email, password, loginPage, screenTwo);
});


// Ingresar con cuenta Google
googleBtn.addEventListener('click', () => {
  goggleLogin(provider, registerPage, screenTwo);
});


// MOSTRAR Y OCULTAR MENU DESPLEGABLE (SIDEBAR)
function showSidebar() {
  document.getElementById('sidebar').classList.toggle('active');
}

document.querySelector('.toggle-btn').addEventListener('click', showSidebar);


const showName = document.getElementById('showName');
auth.onAuthStateChanged(user => {
  if (user) {
    showName.innerHTML = `<h3>Hola ${user.displayName}</h3>`;
  } else {
    showName.innerHTML = '';
  }
});