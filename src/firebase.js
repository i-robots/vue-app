import { initializeApp } from 'firebase/app';
import { getDatabase, ref, set,remove } from "firebase/database";
import {sections} from './sections';

let config = {
    apiKey: "AIzaSyAxCQRRKkfU_s_jAkPdwDlnxYrNrd-zNdc",
    authDomain: "directory-63ccb.firebaseapp.com",
    databaseURL: "https://directory-63ccb-default-rtdb.firebaseio.com/",
    projectId: "directory-63ccb",
    storageBucket: "directory-63ccb.appspot.com",
    messagingSenderId: "178905291210",
    appId: "1:178905291210:web:3b4bc2c2e2a0ffca62d733",
    measurementId: "G-ZSZSD1BQ15"
}

initializeApp(config);


sections.forEach((item,index) => {
    addToStore(item,index)
})

export function addToStore(item,index) {
    const db = getDatabase();
    set(ref(db, 'shop/' + index), item);
}

export function getRef(){
    const db = getDatabase();
    return ref(db, 'shop/');
}

export function removeItem(id){
    const db = getDatabase();
    return remove(ref(db, 'shop/'+id)); 
}