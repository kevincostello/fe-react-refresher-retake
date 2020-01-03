import React from "react";
import "./App.css";

class App extends React.Component {
  state = {
    loggedInUser: { name: "Izzi", id: 12345 }
  };

  render() {
    const { loggedInUser } = this.state;
    return (
      <div>
        <Header currentUser={loggedInUser} />
        <p>Lorem ipsum...</p>
      </div>
    );
  }
}

const Header = ({ loggedInUser }) => {
  return <h1>Welcome {loggedInUser.name}</h1>;
};

export default App;
