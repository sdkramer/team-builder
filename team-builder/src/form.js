import React from 'react'

function MembersForm(props){
  const {
    onInputChange,
    onSubmit,
    values
  } = props

  return (
    <form>
      <h2>Members Form</h2>
      <label>Username:&nbsp;
        <input
        value={values.username}
        onChange={onInputChange}
        name='username'
        type='text'/>
      </label>
      <br></br>
      <label>Email:&nbsp;
        <input
        value={values.email}
        onChange={onInputChange}
        name='email'
        type='text'/>
      </label>
      <br></br>
      <label>Role:&nbsp;<input
      value={values.role}
      onChange={onInputChange}
      name='role'
      type='text'/></label>
    </form>
  )
}

export default MembersForm