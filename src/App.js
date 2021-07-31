import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './components/Base/Base';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Seasonings from './components/Seasonings/Seasonings';
import Toppings from './components/Toppings/Toppings';

function App() {
  const [salad, setSalad] = useState({ base: "", toppings: [], seasonings: [] })

  const addBase = (base) => {
    setSalad({ ...salad, base })
  }

  const addTopping = (topping) => {
    let newToppings;
    if (!salad.toppings.includes(topping)) {
      newToppings = [...salad.toppings, topping]
    } else {
      newToppings = salad.toppings.filter(listing => listing !== topping)
    }
    setSalad({...salad, toppings: newToppings })
  }

  const addSeasoning = (seasoning) => {
    let newSeasonings;
    if (!salad.seasonings.includes(seasoning)) {
      newSeasonings = [...salad.seasonings, seasoning]
    } else {
      newSeasonings = salad.seasonings.filter(listing => listing !== seasoning)
    }
    setSalad({...salad, seasonings: newSeasonings })
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/base"><Base addBase={addBase} salad={salad}/></Route>
          <Route path="/toppings"><Toppings addTopping={addTopping} salad={salad}/></Route>
          <Route path="/seasonings"><Seasonings addSeasoning={addSeasoning} salad={salad}/></Route>
          <Route path="/order"><Order salad={salad}/></Route>
          <Route path="/" render={() => <h2>What are you doing?</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
