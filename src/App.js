import React from 'react';
import { Context } from './assets/Components/Context';
import Login from './assets/Components/Login';
import './assets/main.css';
import Main from './assets/pages/Main';



function App() {
  const {token} = React.useContext(Context);
    
    {
      if(token){
      return <Main/>
    }else{
      return <Login />
    }
  }
}

export default App;
