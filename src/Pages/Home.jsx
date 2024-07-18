import React, { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [items, setItems] = useState([]);
  const getItems = async () => {
    try {
      const res = await fetch("http://localhost:5000/items");
      const data = await res.json();
      setItems(data);
    } catch (error) {}
  };
  useEffect(() => {
    getItems();
  }, []);
  console.log(items);
  return (
    <div>
      Home
      <ul>
        {items.map((item) => (
          <li key={item.id}>{item.name}</li>
        ))}
      </ul>
    </div>
  );
}
