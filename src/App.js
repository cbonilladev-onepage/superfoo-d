import { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Base from './components/Base/Base';
import Header from './components/Header/Header';
import Home from './components/Home/Home';

function App() {
  const [salad, setSalad] = useState({ base: "", toppings: [], seasoning: [] })

  const addBase = (base) => {
    setSalad({ ...salad, base })
  }

  const addTopping = (topping) => {
    let newTopping;
    if (!salad.toppings.includes(topping)) {
      newTopping = [...salad.toppings, topping]
    } else {
      newTopping = salad.toppings.filter(listing => listing !== topping)
    }
  }

  const addSeasoning = (seasoning) => {
    let newSeasoning;
    if (!salad.toppings.includes(seasoning)) {
      newSeasoning = [...salad.seasonings, seasoning]
    } else {
      newSeasoning = salad.seasonings.filter(listing => listing !== seasoning)
    }
  }

  return (
    <div className="App">
      <BrowserRouter>
      <Header />
        <Switch>
          <Route path="/" exact><Home /></Route>
          <Route path="/base"><Base addBase={addBase} salad={salad}/></Route>
          <Route path="/" render={() => <h2>What are you doing?</h2>} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
