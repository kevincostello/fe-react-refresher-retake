# React Refresher Quiz

## Scenario 1

```js
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
```

#### Question 1

1a) The code above gives us a TypeError: `Cannot read property 'name' of undefined`. **Why are we getting this TypeError?** Consider _what_ is undefined in this case then you can follow it through to find out why.

1b) How could you fix this error?

---

## Scenario 2

```js
class Homepage extends React.Component {
  state = {
    drinks: ["tea", "americano"]
  };

  render() {
    const { drinks } = this.state;
    console.log(drinks);
    return (
      <div>
        <h1>NC Coffee Shop</h1>
        <ul>
          {drinks.map(drink => {
            return (
              <li key={drink}>
                <h3>{drink}</h3>
                <button onClick={this.removeDrink(drink)}>press me</button>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }

  removePuppy = drinkToDelete => {
    const filteredDrinks = this.state.drinks.filter(
      drink => drink === drinkToDelete
    );
    this.setState({ drinks: filteredDrinks });
  };
}
```

#### Question 1

Ideally, I want it so that when the user clicks on each drink's button, the removeDrink method is invoked.

1a) In reality, when is the removeDrink method being invoked and causing the 'maximum depth exceeded' error?

1b) What can I change ensure it will be invoked at the correct time?

#### Question 2

I still need access to the intended drink inside the removeDrink method.

2a) How could I still get access to the intended drink inside the removeDrink method?

2b) There are _two_ ways to do this so try to consider both.

#### Question 3

3a) What should be improved in the removeDrink method?

3b)What should be used in this method instead (and why)?

`
