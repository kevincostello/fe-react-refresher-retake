import React from "react";
import Header from "./components/Header";
import "./App.css";

class App extends React.Component {
  state = {
    loggedInUser: { name: "Izzi", id: 12345 },
    drinks: ["tea", "americano"]
  };

  render() {
    const { loggedInUser, drinks } = this.state;
    return (
      <div>
        <Header currentUser={loggedInUser} />
        <ul>
          {drinks.map(drink => {
            return (
              <li>
                <h3>{drink}</h3>
                <button onClick={this.removeDrink(drink)}>
                  delete this drink
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  removeDrink = drinkToDelete => {
    const filteredDrinks = this.state.drinks.filter(
      drink => drink !== drinkToDelete
    );
    this.setState({ drinks: filteredDrinks });
  };
}

export default App;
