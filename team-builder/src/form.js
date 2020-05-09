import React, { useState } from "react";


function MembersForm(props) {

  const [member, setMember]=useState({
    username: '',
    email: '',
    role: '',
  })

  const handleChanges = event => {
    setMember({...member, [event.target.name] : event.target.value})
    console.log(member)
  }

  const submitForm = event => {
    event.preventDefault()
    props.addNewMember(member)
    setMember({username: '', email: '', role: ''})
  }

  return (
    <form onSubmit={submitForm}>
      <fieldset className="fieldBox">
        <legend>Members Form</legend>
        <br />
        <label htmlFor='username'>
          Username:
          <br />
          <input
            value={member.username}
            onChange={handleChanges}
            name="username"
            type="text"
          />
        </label>
        <br></br>
        <br />
        <label htmlFor='email'>
          Email:
          <br />
          <input
            value={member.email}
            onChange={handleChanges}
            name="email"
            type="text"
          />
        </label>
        <br></br>
        <br />
        <label htmlFor='role'>
          Role:
          <br />
          <input list="roles" name="role" onChange={handleChanges} value={member.role}/>
          <datalist id="roles">
            <option value="Front end developer" />
            <option value="Back end developer" />
            <option value="Data scientist" />
            <option value="UI designer" />
          </datalist>
        </label>
        <br />
        <br />
        <br />
        <button type='submit'>Submit</button>
      </fieldset>
    </form>
  );
}

export default MembersForm;
