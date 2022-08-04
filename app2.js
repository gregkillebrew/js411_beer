




<ol>{this.state.arrayOfFood.map((beer, index) => {
              return (
                <li key={index}> <h4>Food Pairing Recommendations! {beer.food_pairing}</h4>
                </li>)
            })}
            </ol>