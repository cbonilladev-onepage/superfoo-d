import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { Route, Switch, useLocation } from 'react-router-dom';
import './App.css';
import Base from './components/Base/Base';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import Order from './components/Order/Order';
import Seasonings from './components/Seasonings/Seasonings';
import Toppings from './components/Toppings/Toppings';


const App = () => {
  const location = useLocation();
  const [salad, setSalad] = useState({ base: "", toppings: [], seasonings: [] });

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
    setSalad({ ...salad, toppings: newToppings })
  }

  const addSeasoning = (seasoning) => {
    let newSeasonings;
    if (!salad.seasonings.includes(seasoning)) {
      newSeasonings = [...salad.seasonings, seasoning]
    } else {
      newSeasonings = salad.seasonings.filter(listing => listing !== seasoning)
    }
    setSalad({ ...salad, seasonings: newSeasonings })
  }

  return (
    <div className="App">
      <Header />
      <AnimatePresence initial={false}>
        <Switch location={location} key={location.pathname}>
          <Route path={process.env.PUBLIC_URL + "/"} exact><Home /></Route>
          <Route path={process.env.PUBLIC_URL + "/base"}><Base addBase={addBase} salad={salad} /></Route>
          <Route path={process.env.PUBLIC_URL + "/toppings"}><Toppings addTopping={addTopping} salad={salad} /></Route>
          <Route path={process.env.PUBLIC_URL + "/seasonings"}><Seasonings addSeasoning={addSeasoning} salad={salad} /></Route>
          <Route path={process.env.PUBLIC_URL + "/order"}><Order salad={salad} /></Route>
          <Route path={process.env.PUBLIC_URL + "/"} render={() => <h2>What are you doing?</h2>} />
        </Switch>
      </AnimatePresence>
    </div>
  );
}

export default App;
