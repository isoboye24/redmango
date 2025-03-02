import React from 'react';
import { useState, useEffect } from 'react';
import { menuItemModel } from '../../../Interfaces';
import MenuItemCard from './MenuItemCard';
import { useGetMenuItemsQuery } from '../../../APIs/menuItemApi';
import { useDispatch } from 'react-redux';
import { setMenuItem } from '../../../Storage/Redux/menuItemSlice';

const MenuItemList = () => {
  // const [menuItems, setMenuItems] = useState<menuItemModel[]>([]);

  const dispatch = useDispatch();
  const { data, isLoading } = useGetMenuItemsQuery(null);

  useEffect(() => {
    if (!isLoading && data?.result) {
      dispatch(setMenuItem(data.result));
    }
  }, [isLoading]);

  if (isLoading) {
    return <div>Loading...</div>;
  } else {
    return (
      <div className="container row">
        {data?.result?.length > 0 &&
          data.result.map((menuItem: menuItemModel, index: number) => (
            <MenuItemCard menuItem={menuItem} key={index} />
          ))}
      </div>
    );
  }
};

export default MenuItemList;
