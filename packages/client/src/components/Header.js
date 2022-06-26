import React from "react";
import {useCartContext} from "../contexts/CartContext";

function Header() {
  const cart = useCartContext()
  return (
    <header className="container mx-auto bg-white py-2 md:py-4 text-right">
      <span>
        &#163;{cart.total}
      </span>
      <span className="text-ms inline-block py-1 ml-4 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-600 text-white rounded-full">
        {cart.count}
      </span>
     </header>
  )
}

export default Header
