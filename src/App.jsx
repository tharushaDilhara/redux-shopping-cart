import React from 'react'
import AllPRoducts from './features/All/AllPRoducts'
import Header from './features/header/Header'
import Cart from './features/cart/Cart'

const App = () => {
  return (
    <div>
      <Header />
      <AllPRoducts/>
      <Cart />
    </div>
  )
}

export default App