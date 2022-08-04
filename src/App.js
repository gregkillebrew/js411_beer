import React, {Component} from 'react';

  class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        arrayOfBeer:[],
      
      };
    }

    componentDidMount(){
      fetch('https://api.punkapi.com/v2/beers')
       .then(response => {
        return response.json()})
       .then(arrayOfBeer => this.setState({arrayOfBeer}))
       .then(arrayOfFood => this.setState({arrayOfFood}))
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

    render() {
      return (
          <div>
             <h2>BEERS!</h2>

             <ol>{this.state.arrayOfBeer.map((beer, index) => {
              return (
                <li key={index}><h3>{beer.name}</h3> <h4>" {beer.tagline} "</h4> <h4>Food Pairing Recommendations! {beer.food_pairing}</h4>

                </li>)
            })}
            </ol>

          </div>

          
      )
    }
  }
  

  export default App;




 