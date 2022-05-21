import React from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
import {delItem} from '../redux/action/index'

const Cart = () => {
    const state = useSelector((state)=>state.addItem)
    const dispatch = useDispatch()

    const handleClose = (item) => {
        dispatch(delItem(item))
    }

    const cartItems = (cartItem) => {
        return(
            <div className="px-4 my-5 bg-light rounded-3" key={cartItem.id}>
                <div className="container py-4">
                    <div onClick={()=>handleClose(cartItem)} className="btn-close float-end" aria-label='close'></div>
                    <div className="row justify-content-center">
                        <div className="col-md-4">
                            <img src={cartItem.img} alt={cartItem.title} height='200px' width='180px' />
                        </div>
                        <div className="col-md-4">
                            <h3>{cartItem.title}</h3>
                            <p className='lead fw-bold'>${cartItem.price}</p>
                        </div>
                    </div>
                </div>
            </div>
        );
    }

    const emptyCart = () => {
        return (
            <div className='px-4 my-5 bg-light rounded-3 py-5'>
                <div className="container py-4">
                    <div className="row">
                        <h3>Your Cart is Empty</h3>
                    </div>
                </div>
            </div>
        )
    }

    const button = () => {
        return (
            <div className = "container">
                <div className="row">
                    <NavLink to='/checkout' className='btn btn-outline-primary mb-5'>Proceed to checkout</NavLink>
                </div>
            </div>
        )
    }

  return (
    <>
        {state.length === 0 && emptyCart()}
        {state.length !== 0 && state.map(cartItems)}
        {state.length !== 0 && button()}
    </>

    /*<div>

        <div className="row">
            <div className="col-md-4">
                <img src={Product.image} alt={Product.title}
                height="200px" width="180px" />
            </div>
            <div className="col-md-4">
                <h3>{product.title}</h3>
                <p className='lead fw-bold'>
                    {product.qty} X ${product.price} = $
                    {product.qty * product.price}   
                </p>
                <button className='btn btn-outline-dark me-4'
                    onClick={()=>handleButton(product)} >
                        <i className='fa fa-minus'></i>
                </button>
                <button className='btn btn-ouline-dark'
                onClick={() => handleButton(product)}>
                    <i className='fa fa-plus'></i>
                </button>
            </div>
        </div>


    </div>*/
  )
}

export default Cart
