import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addItem, deleteItem } from "../actionTypes/actionTypes";

const Cart = () => {
  const state = useSelector((state) => state);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>No of Item : {state.noOfItems}</h2>
      <button
        onClick={() => {
          dispatch(addItem());
        }}
      >
        Add Item
      </button>
      <button
        onClick={() => {
          dispatch(deleteItem());
        }}
      >
        Delete Item
      </button>
    </div>
  );
};

export default Cart;
