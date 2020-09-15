import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

function Profile() {
  const { user, isAuthenticated, isLoading } = useAuth0();
  

  if (isLoading) {
    return <h3 style={{ color: "red" }}>Loading Data..</h3>;
  } else {
    const { name, picture, email } = user;
    return (
      <div>
        {isAuthenticated && (
          <>
            <img src={picture} alt={name} />
            <h3>
              <strong>Name: </strong>
              {name}
            </h3>
            <p>
              <strong>Email:</strong> {email}
            </p>
          </>
        )}
      </div>
    );
  }
}

export default Profile;
