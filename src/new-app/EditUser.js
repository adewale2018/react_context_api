import React, { useContext, useState, useEffect } from "react";
import { Link, useRouteMatch, useHistory } from "react-router-dom";
import { Form, FormGroup, Input, Button, Label } from "reactstrap";

import { GlobalContext } from "./context/GlobalState";

function EditUser(props) {
  const [selectedUser, setSelectedUser] = useState({
    id: "",
    name: "",
  });
  let match = useRouteMatch();
  let currentUserId = match.params.id;
  // let currentUserId = props.match.params.id;
  let history = useHistory();
  const { users, editUser } = useContext(GlobalContext);

  useEffect(() => {
    const userId = currentUserId;
    const selectedUser = users.find((user) => user.id === userId);
    setSelectedUser(selectedUser);
  }, [currentUserId, users]);

  const handleChange = (e) => {
    setSelectedUser({ ...selectedUser, [e.target.name]: e.target.value });
  };

  const handleEdit = (e) => {
    e.preventDefault();
    editUser(selectedUser);
    history.push("/");
  };

  return (
    <>
      <Form onSubmit={handleEdit}>
        <FormGroup>
          <Label>Edit User's data </Label>
          <Input
            type='text'
            name='name'
            value={selectedUser.name}
            onChange={handleChange}
          />
        </FormGroup>
        <Button type='submit' color='primary'>
          Update Name
        </Button>
      </Form>
      <Link className='btn btn-danger' to='/'>
        Back home
      </Link>
    </>
  );
}

export default EditUser;
