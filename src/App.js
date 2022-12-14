import React, { Component } from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      arrayOfBeer: [],

    };
  }

  componentDidMount() {
    fetch('https://api.punkapi.com/v2/beers')
      .then(response => {
        return response.json()
      })
      .then(arrayOfBeer => this.setState({ arrayOfBeer }))
  }

  //    function beerFoods(){
  //     return(
  //       <div>
  //         {beer.food_pairing.map((item, index) => (
  //           <item key={index} item={item} />
  //         ))}
  //       </div>
  //     )
  //    }
  //    beerFoods(beer.food_pairing)
  //  console.log()

  handleClick = () => {
    alert("You Like This Beer!");
  };

  render() {
    return (
      <div>
        <h2>BEERS!</h2>

        <ol>{this.state.arrayOfBeer.map((beer, index) => {
          return (
            <li key={index}><h3>{beer.name}</h3> <h4>"{beer.tagline}"</h4> <h4>Food Pairing: {beer.food_pairing} </h4>

              <button onClick={this.handleClick}>
                Click to Like This Beer
              </button>

            </li>)
        })}
        </ol>

      </div>


    )
  }
}


export default App;




