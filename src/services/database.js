
import { myApp } from './firebase';
import { getDatabase, ref, set } from "firebase/database";


class Database {

  myDatabase = getDatabase(myApp) 

  writeUserData(uid, userName, inputData){
    // console.log(`${uid}/users/${userName}`)
    set(ref(this.myDatabase, `${uid}/users/${userName}`), 
      inputData
    )
  }






}export default Database









