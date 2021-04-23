 // import logo from './logo.svg';
import './App.css';

import './components/style.css';

import {useState} from "react"

import Header from "./components/Header";

import Main from "./components/Main";

import Basket from "./components/Basket";

import data from './data';
import Footer from './components/Footer';
import Search from './components/Search';

function App() {
 
  const [cartItems, setCartItems] = useState([]);
  const { products } = data;
  
   // The logic to add the item in the cart items
   const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };

  // the logic to remove the item from the cart items
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };





  return (

     
    <div className="App">  
      
      <Header></Header>

      <Search></Search>

         <div className="row">

            <Main products={products}  onAdd={onAdd} ></Main>

            <Basket  cartItems={cartItems} onAdd={onAdd}  onRemove={onRemove}  ></Basket>

         </div>

         <Footer></Footer>
      
       </div>
  )
}

export default App;
