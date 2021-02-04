import * as firebase1 from 'firebase';
import 'firebase/firestore';

const firebaseApp = firebase1.initializeApp({
        apiKey: "AIzaSyB1ZYnrrAKHh-y0shNWJHmJcuvJmY67CaQ",
        authDomain: "testeapp-a5d9c.firebaseapp.com",
        projectId: "testeapp-a5d9c",
        storageBucket: "testeapp-a5d9c.appspot.com",
        messagingSenderId: "676391049131",
        appId: "1:676391049131:web:414bd26e222f9d019524ee"
    });
  
  
  const db = firebase1.firestore();

  
  export {db};