import menuItemModel from './menuItemModel';

export default interface cartItemModel {
  cartItemId?: number;
  menuItemId?: number;
  menuItem?: menuItemModel;
  quantity?: number;
}
