import { useState } from 'react';
import './index.css';

const initialItems = [
  { id: 1, description: 'Passports', quantity: 2, packed: false },
  { id: 2, description: 'Socks', quantity: 12, packed: true },
  { id: 3, description: 'Charger', quantity: 1, packed: false },
];

export default function App() {
  return (
    <div>
      <Header />
      <SubHeader />
      <Main />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <div className="container header">
      <h1>🌴FAR AWAY✈️</h1>
    </div>
  );
}

function SubHeader() {
  const [itemDescription, setItemDescription] = useState('');
  const [itemQuantity, setItemQuantity] = useState(1);

  function handleSubmit(e) {
    e.preventDefault();

    if (!itemDescription) return;

    const newItem = {
      itemDescription,
      itemQuantity,
      packed: false,
      id: Date.now(),
    };
    console.log(newItem);

    setItemDescription('');
    setItemQuantity(1);
  }

  return (
    <form className="container sub-header" onSubmit={handleSubmit}>
      <h4>What do you need for your trip?</h4>
      <select
        value={itemQuantity}
        onChange={(e) => setItemQuantity(Number(e.target.value))}
      >
        {Array.from({ length: 15 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item..."
        value={itemDescription}
        onChange={(e) => setItemDescription(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

function Main() {
  return (
    <div className="container main">
      <ul>
        {initialItems.map((item) => (
          <Item item={item} key={item.id} />
        ))}
      </ul>
    </div>
  );
}

function Item({ item }) {
  return (
    <li>
      <button className="button-x">&times;</button>
      <span
        style={
          item.packed
            ? { textDecoration: 'line-through' }
            : { textDecoration: 'none' }
        }
      >
        {item.quantity} {item.description}
      </span>
    </li>
  );
}

function Footer() {
  return (
    <footer className="container footer">
      <p>You have x items on your list, and you already packed x (x%)</p>
    </footer>
  );
}
