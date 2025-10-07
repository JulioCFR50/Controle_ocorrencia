// scripts/firebase.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { 
  getFirestore, collection, getDocs, getDoc, setDoc, doc, deleteDoc 
} from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyDetNhQe-U_xoBD4o7oytKhj_lyH6PR25M",
  authDomain: "controle-de-ocorrencia-4ffc2.firebaseapp.com",
  projectId: "controle-de-ocorrencia-4ffc2",
  storageBucket: "controle-de-ocorrencia-4ffc2.firebasestorage.app",
  messagingSenderId: "230686446885",
  appId: "1:230686446885:web:3b992cebd2e9024c09f6cc"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, getDocs, getDoc, setDoc, doc, deleteDoc };
