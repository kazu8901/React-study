import logo from './logo.svg';
import './App.css';
import Article from "./components/Article";
import {Count, ToggleButton} from "./components/index";
import Page from "./components/Page";
import { useEffect, useState } from 'react';

function App() {
  const [id, setId] = useState('deatiger')
  const [name, setName] = useState('')
  const ids = ['deatiger', 'gaearon', 'aws', 'google', 'facebook']
  const getRandomId = () => {
    const _id = ids[Math.floor(Math.random() * ids.length)]
    setId(_id)
  }

  useEffect( () => {
    fetch(`https://api.github.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        console.log(data)
        setName(data.name)
      })
      .catch(error => {
        console.error(error)
      })
  },[id]) 

  return (
    <div>
      <p>{id}の、GitHub上の名前は{name}です。</p>
      <button onClick={getRandomId}>IDを変更</button>
    </div>
  );


  // return (
  //   <div className="App">
  //     <header className="App-header">
  //       <img src={logo} className="App-logo" alt="logo" />
  //       <p>
  //         Edit <code>src/App.js</code> and save to reload.
  //       </p>
  //       <p>おざ</p>
  //       <Article 
  //         title={'デュフフ'}
  //         content={'コポォ'}
  //       />
  //       <Count />
  //       <ToggleButton />
  //       <a
  //         className="App-link"
  //         href="https://reactjs.org"
  //         target="_blank"
  //         rel="noopener noreferrer"
  //       >
  //         Learn React
  //       </a>
  //       <Page  App/>
  //     </header>
  //   </div>
  // );
}

export default App;
