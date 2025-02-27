import React from 'react';
import { menuItemModel } from '../../../Interfaces';

interface Props {
  menuItem: menuItemModel;
}

const MenuItemCard = (props: Props) => {
  return <div>{props.menuItem.name}</div>;
};

export default MenuItemCard;
