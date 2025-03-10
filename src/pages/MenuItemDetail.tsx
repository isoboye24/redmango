import React, { useTransition } from 'react';
import { useGetMenuItemByIdQuery } from '../APIs/menuItemApi';
import { useParams, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { useUpdateShoppingCartMutation } from '../APIs/shoppingCartApi';
import { MainLoader, MiniLoader } from '../components/page/common';
import { apiResponse } from '../Interfaces';
import { ToastNotify } from '../helper';

// userId = "c55c9162-4af5-4f15-8870-37fb5972f9e9"

const MenuItemDetail = () => {
  const { menuItemId } = useParams();
  const navigate = useNavigate();
  const { data, isLoading } = useGetMenuItemByIdQuery(menuItemId);
  const [quantity, setQuantity] = useState(1);
  const [IsAddingToCart, setIsAddingToCart] = useState<boolean>(false);
  const [updateShoppingCart] = useUpdateShoppingCartMutation();

  const handleQuantity = (counter: number) => {
    let newQuantity = quantity + counter;
    if (newQuantity == 0) {
      newQuantity = 1;
    }
    setQuantity(newQuantity);
    return;
  };

  const handleAddToCart = async (menuItemId: number) => {
    setIsAddingToCart(true);

    const response: apiResponse = await updateShoppingCart({
      menuItemId: menuItemId,
      updateQuantityBy: quantity,
      userId: 'c55c9162-4af5-4f15-8870-37fb5972f9e9',
    });
    if (response.data && response.data.success) {
      ToastNotify('Item added to cart successfully!');
    }
    setIsAddingToCart(false);
  };

  return (
    <div className="container pt-4 pt-md-5">
      {!isLoading ? (
        <div className="row">
          <div className="col-7">
            <h2 className="text-success">{data.result?.name}</h2>
            <span>
              <span
                className="badge text-bg-dark pt-2"
                style={{ height: '40px', fontSize: '20px' }}
              >
                {data.result?.category}
              </span>
            </span>
            <span>
              <span
                className="badge text-bg-light pt-2"
                style={{ height: '40px', fontSize: '20px' }}
              >
                {data.result?.specialTag}
              </span>
            </span>
            <p style={{ fontSize: '20px' }} className="pt-2">
              {data.result?.description}
            </p>
            <span className="h3">${data.result?.price}</span> &nbsp;&nbsp;&nbsp;
            <span
              className="pb-2  p-3"
              style={{ border: '1px solid #333', borderRadius: '30px' }}
            >
              <i
                onClick={() => handleQuantity(-1)}
                className="bi bi-dash p-1"
                style={{ fontSize: '25px', cursor: 'pointer' }}
              ></i>
              <span className="h3 mt-3 px-3">{quantity}</span>
              <i
                onClick={() => handleQuantity(1)}
                className="bi bi-plus p-1"
                style={{ fontSize: '25px', cursor: 'pointer' }}
              ></i>
            </span>
            <div className="row pt-4">
              <div className="col-5">
                {IsAddingToCart ? (
                  <button disabled className="btn btn-success form-control">
                    <MiniLoader />
                  </button>
                ) : (
                  <button
                    className="btn btn-success form-control"
                    onClick={() => handleAddToCart(data.result?.menuItemId)}
                  >
                    Add to Cart
                  </button>
                )}
              </div>

              <div className="col-5 ">
                <button
                  className="btn btn-secondary form-control"
                  onClick={() => navigate(-1)}
                >
                  Back to Product List
                </button>
              </div>
            </div>
          </div>
          <div className="col-5">
            <img
              src={`https://localhost:7250/${data.result?.image}`}
              width="100%"
              style={{ borderRadius: '50%' }}
              alt="No content"
            ></img>
          </div>
        </div>
      ) : (
        <MainLoader />
      )}
    </div>
  );
};

export default MenuItemDetail;
