import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

const initialMembersList = {
  username:'',
  role: '',
}

function App() {
  const [members, setMembers] = useState(initialMembersList)


  return (
    <div className="App">
     <header><h1>Team Members</h1></header>
    </div>
  );
}

export default App;
