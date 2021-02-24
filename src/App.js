import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const heros = ["Rafiq", "Barkat", "Salam", "Munir"]
  const products = [
    { name: "Shorishar Tel", price: '$89' },
    { name: "Goriber Pitha", price: '$5' }
  ]

  var person = {
    name: "Dr. Jashim",
    job: "Voboghure"
  }
  return (
    <div className="App">
      <header className="App-header">
        <p> Trying to be a react learner </p>
        <Users></Users>
        <Counter></Counter>
        <ul>{
          heros.map(hero => <li>{hero}</li>)
        }
          {
            products.map(product => <li>{product.price}</li>)
          }</ul>
          {
            products.map(pd => <Product name={pd}></Product>)
          }
        {/* <Product name={products[0]}></Product>
        <Product name={products[1]}></Product> */}
        <Person name="Ajij" mother="Jomila"></Person>
        <Person name="Ishtiyak" mother="Rabeya"></Person>
        <Person name="Mushtak" mother="Bibi Rohima"></Person>
      </header>
    </div>
  );
}

function Users (){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data))
  },[])
  return (
    <div>
      <h1>Dynamic users: {users.length}</h1>
      {
        users.map(user => <li>{user.name}</li>)
      }
    </div>
  )
}
function Counter (){
  const [count, setCount] = useState(12);
  return (
    <div>
      <h1>Count:{count}</h1>
      <button onMouseMove={() => setCount(count - 1)}>Decrease</button>
      <button onMouseOut ={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Product(props) {
  const productStyle = {
    border: '1px solid red',
    borderRadius: ' 10px',
    height: '300px',
    width: '200px',
    backgroundColor: 'lightsalmon',
    float: 'left',
    margin: '5pxx'
  }

  return (
    <div style={productStyle}>
      <h3>Name:{props.name.name}</h3>
      <h5>Price:{props.name.price}</h5>
      <button>Buy Now</button>
    </div>
  )
}
function Person(props) {
  const personStyle = {
    border: '1px solid goldenrod',
    margin: '10px',
    padding: '10px',
    width: '400px',
    padding: '20px'
  }
  return (
    <div style={personStyle}>
      <h1>Name: {props.name}</h1>
      <h3>Mother: {props.mother}</h3>
    </div>)
}

export default App;
