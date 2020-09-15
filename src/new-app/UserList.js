import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { ListGroup, ListGroupItem, Button } from "reactstrap";

import { GlobalContext } from "../new-app/context/GlobalState";

function UserList() {
  const { users, removeUser } = useContext(GlobalContext);
  return (
    <ListGroup className='mt-3'>
      {users.length > 0 ? (
        users.map(({ id, name }) => (
          <ListGroupItem className='d-flex' key={id}>
            <strong>{name}</strong>
            <div className='ml-auto'>
              <Button outline color='danger' onClick={() => removeUser(id)}>
                Delete
              </Button>
              <Link
                to={`/edit/${id}`}
                type='button'
                className='btn btn-outline-info ml-2'
              >
                Edit
              </Link>
            </div>
          </ListGroupItem>
        ))
      ) : (
        <h2 className='text-center'>No User</h2>
      )}
    </ListGroup>
  );
}

export default UserList;
