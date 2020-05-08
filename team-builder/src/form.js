import React from "react";

function MembersForm(props) {
  const { onInputChange, onSubmit, values } = props;

  return (
    <form>
      <fieldset className="fieldBox">
        <legend>Members Form</legend>
        <br />
        <label>
          Username:
          <br />
          <input
            value={values.username}
            onChange={onInputChange}
            name="username"
            type="text"
          />
        </label>
        <br></br>
        <label>
          Email:
          <br />
          <input
            value={values.email}
            onChange={onInputChange}
            name="email"
            type="text"
          />
        </label>
        <br></br>
        <label>
          Role:
          <br />
          <input list="roles" name="role" />
          <datalist id="roles">
            <option value="Front end developer" />
            <option value="Back end developer" />
            <option value="Data scientist" />
            <option value="UI designer" />
          </datalist>
        </label>
        <br />
        <br />
        <button onSubmit={onSubmit}>Submit</button>
      </fieldset>
    </form>
  );
}

export default MembersForm;
