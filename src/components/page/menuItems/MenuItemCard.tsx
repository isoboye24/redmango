import { useState } from 'react';
import { menuItemModel } from '../../../Interfaces';
import { Link } from 'react-router-dom';
import { useUpdateShoppingCartMutation } from '../../../APIs/shoppingCartApi';
import { MiniLoader } from '../common';
import { ToastNotify } from '../../../helper';

interface Props {
  menuItem: menuItemModel;
}

const MenuItemCard = (props: Props) => {
  const [isAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);

    const response = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: 1,
      userId: 'c55c9162-4af5-4f15-8870-37fb5972f9e9',
    });
    if (response.data && response.data.isSuccess) {
      ToastNotify('Item added to cart successfully!');
    }
    setIsAddingToCart(false);
  };

  return (
    <div className="col-md-4 col-12 p-4">
      <div
        className="card"
        style={{ boxShadow: '0 1px 7px 0 rgb(0 0 0 / 50%)' }}
      >
        <div className="card-body pt-2">
          <div className="row col-10 offset-1 p-4">
            <Link to={`/menuItemDetails/${props.menuItem.menuItemId}`}>
              <img
                src={`https://localhost:7250/${props.menuItem.image}`}
                style={{ borderRadius: '50%' }}
                alt=""
                className="w-100 mt-5 image-box"
              />
            </Link>
          </div>
          {props.menuItem.specialTag &&
            props.menuItem.specialTag.length > 0 && (
              <i
                className="bi bi-star btn btn-success"
                style={{
                  position: 'absolute',
                  top: '15px',
                  left: '15px',
                  padding: '5px 10px',
                  borderRadius: '3px',
                  outline: 'none !important',
                  cursor: 'pointer',
                }}
              >
                &nbsp; {props.menuItem.specialTag}
              </i>
            )}

          {isAddingToCart ? (
            <div style={{ position: 'absolute', top: '15px', right: '15px' }}>
              <MiniLoader />
            </div>
          ) : (
            <i
              className="bi bi-cart-plus btn btn-outline-danger"
              style={{
                position: 'absolute',
                top: '15px',
                right: '15px',
                padding: '5px 10px',
                borderRadius: '3px',
                outline: 'none !important',
                cursor: 'pointer',
              }}
              onClick={() => handleAddToCart(props.menuItem.menuItemId)}
            ></i>
          )}

          <div className="text-center">
            <p className="card-title m-0 text-success fs-3">
              <Link
                to={`/menuItemDetails/${props.menuItem.menuItemId}`}
                style={{ textDecoration: 'none', color: 'green' }}
              >
                {props.menuItem.name}
              </Link>
            </p>
            <p className="badge bg-secondary" style={{ fontSize: '12px' }}>
              {props.menuItem.category}
            </p>
          </div>
          <p className="card-text" style={{ textAlign: 'center' }}>
            {props.menuItem.description}
          </p>
          <div className="row text-center">
            <h4>€{props.menuItem.price}</h4>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MenuItemCard;
