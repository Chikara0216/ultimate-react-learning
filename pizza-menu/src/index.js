import React from 'react';
import ReactDOM from 'react-dom/client';
import { pizzaData } from './data';
import './index.css';

function App () {
  return (
    <div className='container'>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
};

const Header = () => {
  // const style = { color: "red", fontSize: "48px", textTransform: "uppercase" };
  const style = {};

  return (
    <header className='header'>
      <h1 style={style}>React Pizza Co.</h1>
    </header>
  );
};

const Menu = () => {
  const pizzas = pizzaData;
  const pizzasCount = pizzas.length;

  return (
    <main className='menu'>
      <h2>Our Menu</h2>

      {pizzasCount > 0 ? (
        <>
          <p>Authentic and delicious Italian pizzas and cuisines to choose from! All freshly baked in our traditional stone oven :)</p>

          <ul className='pizzas'>
            {pizzas.map((pizza) => (
              // <Pizza name={pizza.name} ingredients={pizza.ingredients} photoName={pizza.photoName} price={pizza.price} />
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu :( Please come back later.</p>
      )}

      {/* <Pizza name='Pizza Funghi' ingredients='Tomato, mozarella, mushrooms, and onion' photoName='pizzas/funghi.jpg' price={12} />
      <Pizza name='Pizza Spinachi' ingredients='Tomato, mozarella, spinach, and ricotta cheese' photoName='pizzas/spinaci.jpg' price={12} /> */}
    </main>
  );
};

const Pizza = (props) => {
  console.log(props);

  // if (props.pizzaObj.soldOut) return null;

  return (
    // <li className={`pizza ${props.pizzaObj.soldOut ? 'sold-out' : ''}`}>
    <li className={props.pizzaObj.soldOut ? 'pizza sold-out' : 'pizza'}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name}></img>
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        {/* {props.pizzaObj.soldOut ? (
          <span>SOLD OUT</span>
        ) : (
          <span>{props.pizzaObj.price}</span>
        )} */}
        <span>{props.pizzaObj.soldOut ? 'SOLD OUT' : '$ ' + props.pizzaObj.price}</span>
      </div>
    </li>
  );
};

const Footer = () => {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;

  /* if (hour >= openHour && hour <= closeHour) alert("We're currently OPEN!");
  else alert("Sorry, we're currently CLOSED."); */

  // Conditional rendering with multiple returns
  // if (!isOpen) return <p>CLOSED</p>;

  return (
    <footer className="footer">
      {/* {new Date().toLocaleTimeString()} We're currently OPEN! */}
      {isOpen ? (
        <Order openHour={openHour} closeHour={closeHour} />
      ) : (
        <p>We're currently closed. We're happy to welcome you between {openHour}:00 and {closeHour}:00.</p>
      )}
    </footer>
  );

  // return React.createElement("footer", null, "We're currently open!");
};

const Order = ({ openHour, closeHour }) => {
  return (
    <div className="order">
      <p>We're open from {openHour}:00 - {closeHour}:00. Come visit us or order online!</p>
      <button className="btn">Order</button>
    </div>
  );
};

// React v18
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

/* // Before React v18
ReactDOM.render(<App />, document.getElementById("root")); */
