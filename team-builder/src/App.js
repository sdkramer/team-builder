import React, { useState } from 'react';

// import './App.css';
import MembersForm from './form';
import MemberCard from './MemberCard';



function App() {
  const [members, setMembers] = useState([
    // {
    //   id: '',
    //   username:'',
    //   email: '',
    //   role: '',
    // },
  ]);

  const addNewMember = member => {
    const newMember = {
      id: Date.now(),
      username: member.username,
      email: member.email,
      role: member.role
    };
    setMembers([...members, newMember])
  }

//   const [formValues, setFormValues] = useState('')

//   const onInputChange = evt => {
//     const name = evt.target.name
//     const value = evt.target.value

// setFormValues({
//   ...formValues,
//   [name]: value
// })
//   }

//   const onSubmit = evt => {
// console.log('name')
//   }


  return (
    <div className="App">
     <header><h1>Team Members</h1></header>
     <MembersForm addNewMember={addNewMember}/>
     <MemberCard members={members}/>
    </div>
  );
}

export default App;
