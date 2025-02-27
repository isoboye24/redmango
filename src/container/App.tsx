import React from 'react';
import { useState, useEffect } from 'react';
import { Header, Footer } from '../components/layout';
import { menuItemModel } from '../Interfaces';

function App() {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch('https://localhost:7250/api/MenuItem')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);

  return (
    <div>
      <Header />

      <Footer />
    </div>
  );
}

export default App;
