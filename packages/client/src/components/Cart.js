import React from "react";
import {useCartContext} from "../contexts/CartContext";

function Cart() {
  const cart = useCartContext()

  return (
    <div className="shadow-xl border border-t-4 border-t-purple-600 my-4">
      <h2 className="m-4 pb-4 border-b-[1px] border-b-gray-200">
        <span className="text-xl">
          CART
        </span>
        <span className="inline-block py-1 ml-4 px-2.5 leading-none text-center whitespace-nowrap align-baseline font-bold bg-purple-500 text-white rounded-full">
          {cart.count}
        </span>
      </h2>
      {cart.items.map(item =>
        <div key={item.id} className="m-4 pb-4 border-b-[1px] border-b-gray-200 flex space-x-4">
          <div className="flex-auto">
            <div>{item.title}</div>
            <div>{item.category}</div>
            <div className="text-purple-400">Heather Grey / Small</div>
          </div>
          <div className="flex flex-col">
            <div className="flex-auto">
              &#163;{item.price}
            </div>
            <button className="bg-gray-200 p-2 text-xs" onClick={() => cart.remove(item.id)}>REMOVE</button>
          </div>
        </div>
      )}
      <div className="m-4 p-4 flex bg-gray-100">
        <div className="flex-auto">
          <div>Total</div>
          <div className="text-sm text-gray-600">
            Inc. &#163;0 in taxes
          </div>
        </div>
        <div className="text-2xl ml-4">
           &#163;{cart.total}
        </div>
      </div>
    </div>
  )
}

export default Cart