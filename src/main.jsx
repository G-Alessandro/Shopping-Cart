import React from 'react';
import ReactDOM from 'react-dom/client';
import Router from "./Router";

export const CartItemsContext = React.createContext(null);

const Main = () => {
  const [cartItems, setCartItems] = React.useState([]);

  return (
    <CartItemsContext.Provider value={{ cartItems, setCartItems }}>
      <React.StrictMode>
        <Router />
      </React.StrictMode>
    </CartItemsContext.Provider>
  );
};

ReactDOM.createRoot(document.getElementById('root')).render(
  <Main />,
);