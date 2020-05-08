import React from "react";

function MembersForm(props) {
  const { onInputChange, onSubmit, values } = props;

  return (
    <form>
      <fieldset>
        <legend>Members Form</legend>
        <label>
          Username:&nbsp;
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <br></br>
        <label>
          Email:&nbsp;
          <input
            value={values.email}
            onChange={onInputChange}
            name="email"
            type="text"
          />
        </label>
        <br></br>
        <label>
          Role:&nbsp;
          <input
            value={values.role}
            onChange={onInputChange}
            name="role"
            type="text"
          />
        </label>
        <br></br>
        <button onSubmit={onSubmit}>Submit</button>
      </fieldset>
    </form>
  );
}

export default MembersForm;
