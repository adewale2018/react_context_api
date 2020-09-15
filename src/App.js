import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import { CountProvider } from "./contexts/count-context";
import { ColorProvider } from "./contexts/color-context";
import Header from "./components/Header";
import "./App.css";
import Anonymous from "./components/Anonymous";
import LoginButton from "./components/LoginButton";
import LogoutButton from "./components/LogoutButton";
import Profile from "./components/Profile";
import Home from "./new-app/Home";
import AddUser from "./new-app/AddUser";
import EditUser from "./new-app/EditUser";
import { GlobalProvider } from "./new-app/context/GlobalState";

function App() {
  const { isLoading } = useAuth0();
  if (isLoading) return <h1>Loading..., pls wait!</h1>;

  return (
    <div className='container-md'>
      <ColorProvider>
        <CountProvider>
          {/* <Header />
          <Anonymous />
          <LoginButton />
          <LogoutButton />
          <Profile /> */}
          <br />
          <br />
          {/* {"*******************************"}
          <hr />
          {"*******************************"} */}
          <br />
          <br />
          <div className='container-md'>
            <GlobalProvider>
              <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/add' component={AddUser} />
                <Route exact path='/edit/:id' component={EditUser} />
              </Switch>
            </GlobalProvider>
          </div>
        </CountProvider>
      </ColorProvider>
    </div>
  );
}

export default App;
