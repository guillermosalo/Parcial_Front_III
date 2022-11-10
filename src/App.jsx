import React from 'react'
import './App.css'
import Estatus from './components/Estatus';
import Posteos from './components/Posteos';
import {useState} from 'react'
import Post from './components/Post';

// El componente App es el padre de:
// - Estatus
// - Posteos
// ESTADO: App debe manejar en su estado un número para contabilizar el total de likes.
// MÉTODOS: App debe tener un método para aumentar este número y que pueda ser ejecutado por su nieto Post.
// PROPS: App deberá pasar por props lo necesario a sus componenetes internos para que manipulen o lean su estado.

function App() {

  const [totlikes, setTotlikes] = useState(0)

const likes = ()=>{

  setTotlikes(totlikes + 1)
}

  return (
    <div className="App">
      <Estatus totlikes = {totlikes}/>
      <Posteos />
      {data.map((item) => <Post key={item.id} data={item}/>)}
    </div>
  );
}

export default App;