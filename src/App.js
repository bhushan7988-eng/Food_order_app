import React, {useState} from "react";

import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

function App() {
  const [cartOpenStatus, setCartStatus] = useState(false);
  
  const cartCloseHandler = () => {
    setCartStatus(false);
  };

  const cartOpenHandler = () => {
    setCartStatus(true);
  };

  return (
    <CartProvider>
      <Header openCart={cartOpenHandler}/>
      <main>
        <Meals />
      </main>
      {cartOpenStatus && <Cart closeCart={cartCloseHandler}/>}
    </CartProvider>
  );
}

export default App;
