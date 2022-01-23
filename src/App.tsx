import React from "react"
import styles from './app.module.css'
import Login from './components/login/login';
import { Route, Routes } from 'react-router-dom';
import Maker from './components/maker/maker';
import AuthService from './services/auth';
import Database from './services/database';


type AppProps = {
  authService : AuthService
  databaseService: Database
}

const App = ({authService, databaseService}:AppProps) => {

  return <div className={styles.background}>

<Routes>
<Route index element={<Login authService={authService} />}/>
<Route path="/maker" element={<Maker authService={authService} databaseService={databaseService}/>}/>

</Routes>

</div>

}
export default App;