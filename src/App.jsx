import { CartProvider } from './context/CartContext.jsx'
import ProductList from './components/ProductList.jsx'
import Cart from './components/Cart.jsx'
import './index.css'

function App() {
  return (
    <CartProvider>
      <div className="app">
        <header className="app-header">
          <h1>🛒 Online Shopping Cart</h1>
        </header>

        <main className="app-main">
          <ProductList />
          <Cart />
        </main>
      </div>
    </CartProvider>
  )
}

export default App
