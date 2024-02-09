import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
function StartFirebase (){
const firebaseConfig = {
    apiKey: "AIzaSyBnvw5xGK7aA42TuXPPDklqGv85IxbKaws",
    authDomain: "service-e43c3.firebaseapp.com",
    databaseURL: "https://service-e43c3-default-rtdb.firebaseio.com",
    projectId: "service-e43c3",
    storageBucket: "service-e43c3.appspot.com",
    messagingSenderId: "972592778058",
    appId: "1:972592778058:web:0eb43f8b5233be7cddcfb3"
  };
const app = initializeApp(firebaseConfig);
return getDatabase(app);
}
export default StartFirebase;