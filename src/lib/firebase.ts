
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Configuração do Firebase
const firebaseConfig = {
  apiKey: "AIzaSyC0QPmAcpAM6CcVkA9fCCcE7ANtxgzuhkA",
  authDomain: "cp-aut5.firebaseapp.com",
  projectId: "cp-aut5",
  storageBucket: "cp-aut5.firebasestorage.app",
  messagingSenderId: "461174825823",
  appId: "1:461174825823:web:241344ebe14aa7fcf7ccea"
};
// Inicializar o Firebase
const app = initializeApp(firebaseConfig);

// Exportar o serviço de autenticação
export const auth = getAuth(app);

// Inicializar o Firestore
export const db = getFirestore(app);

// Inicializar Analytics somente no navegador para evitar erros em SSR
let analytics = null;
if (typeof window !== 'undefined') {
  analytics = getAnalytics(app);
}

export { analytics };
export default app;
