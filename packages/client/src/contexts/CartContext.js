import React, {createContext, useCallback, useContext, useEffect, useMemo, useState} from "react"
import { v4 as uuidv4 } from 'uuid'

const CartContext = createContext()

export function useCartContext() {
  return useContext(CartContext)
}

export function CartContextProvider({ children }) {
  const [items, setItems] = useState([])
  const [count, setCount] = useState(0)
  const [total, setTotal] = useState(0)

  useEffect(() => {
    const jsonCart = localStorage.getItem('cart')
    if (!jsonCart) return
    try {
      const newItems = JSON.parse(jsonCart)
      setItems(newItems)
      setCount(newItems.length)
      setTotal(newItems.reduce((a, v) => a + v.price, 0))
    } catch (e) {
    }
  }, [])

  const add = useCallback((item) => {
    const newItems = [...items, {...item, id: uuidv4()}]
    setItems(newItems)
    localStorage.setItem('cart', JSON.stringify(newItems))
    setCount(count => count + 1)
    setTotal(total => total + item.price)
  }, [items])

  const remove = useCallback((id) => {
    const index = items.findIndex(item => item.id === id)
    if (index === -1) return
    setCount(count => count - 1)
    setTotal(total => total - items[index].price)
    const newItems = [...items]
    newItems.splice(index, 1)
    setItems(newItems)
    localStorage.setItem('cart', JSON.stringify(newItems))
    setItems(newItems)
  }, [items])

  const contextValue = useMemo(() => ({
    items, count, total, add, remove
  }), [items, count, total, add, remove])

  return (
    <CartContext.Provider value={contextValue}>
      {children}
    </CartContext.Provider>
  )
}
