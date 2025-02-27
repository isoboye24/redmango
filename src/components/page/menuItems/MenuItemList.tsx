import React from 'react';
import { useState, useEffect } from 'react';
import { menuItemModel } from '../../../Interfaces';

const MenuItemList = () => {
  const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  useEffect(() => {
    fetch('https://localhost:7250/api/MenuItem')
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setMenuItems(data.result);
      });
  }, []);
  return <div>MenuItemList</div>;
};

export default MenuItemList;
