import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MembersForm from './form'

const initialMembersList = {
  username:'',
  role: '',
  email: '',
}

function App() {
  const [members, setMembers] = useState(initialMembersList)


  return (
    <div className="App">
     <header><h1>Team Members</h1></header>
     <MembersForm 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
     />
    </div>
  );
}

export default App;
