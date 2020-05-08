import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import MembersForm from './form';
import MemberCard from './MemberCard';

const initialMembersList = {
  id: '',
  username:'',
  email: '',
  role: '',
}

function App() {
  const [members, setMembers] = useState(initialMembersList)

  const [formValues, setFormValues] = useState('')

  const onInputChange = evt => {
    const name = evt.target.name
    const value = evt.target.value

setFormValues({
  ...formValues,
  [name]: value
})
  }

  const onSubmit = evt => {
console.log('name')
  }


  return (
    <div className="App">
     <header><h1>Team Members</h1></header>
     <MembersForm 
      values={formValues}
      onInputChange={onInputChange}
      onSubmit={onSubmit}
     />
     <MemberCard members={members}/>
    </div>
  );
}

export default App;
