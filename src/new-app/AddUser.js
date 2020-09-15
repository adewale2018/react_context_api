import React, { useContext, useState } from "react";
import { v4 as uuidv4 } from 'uuid';
import { Link, useHistory } from "react-router-dom";
import { Form, FormGroup, Button, Label, Input } from "reactstrap";

import { GlobalContext } from "./context/GlobalState";

function AddUser() {
  const [state, setState] = useState("");
  const { addUser } = useContext(GlobalContext);
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (state.length > 0 && state.trim() !== "") {
      const newUser = {
        id: uuidv4(),
        name: state,
      };
      addUser(newUser);
      history.push("/");
    }
  };
  return (
    <>
      <Form onSubmit={handleSubmit} autoFocus>
        <FormGroup>
          <Label>Name: </Label>
          <Input
            type='text'
            placeholder='Enter name here...'
            value={state}
            onChange={(e) => setState(e.target.value)}
            required
          />
        </FormGroup>
        <Button type='submit' color='primary'>
          Add Name
        </Button>
      </Form>
      <Link className='btn btn-danger' to='/'>
        Back home
      </Link>
    </>
  );
}

export default AddUser;
