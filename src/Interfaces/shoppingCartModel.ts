import { cartItemModel } from '.';

export default interface shoppingCartModel {
  shoppingCartId?: number;
  userId?: string;
  cartItems?: cartItemModel[];
  cartTotal?: number;
  stripePaymentIntentId?: any;
  clientSecret?: any;
}
