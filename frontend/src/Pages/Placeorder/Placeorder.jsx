import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { Storecontext } from '../../context/Storecontext'
import './Placeorder.css'

const Placeorder = () => {
    const { getTotalCartAmount } = useContext(Storecontext);
    const navigate = useNavigate();

    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="title">Delivery Information</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First name" />
                    <input type="text" placeholder="Last name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Street" />
                <div className="multi-fields">
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div>
                <div className="multi-fields">
                    <input type="text" placeholder="Zip Code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone" />
            </div>

            <div className="place-order-right">
                <div className="cart-total">
                    <h2>Cart Totals</h2>
                    <div>
                        <div className="cart-total-details">
                            <p>Subtotal</p>
                            <p>${getTotalCartAmount()}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Delivery Fee</p>
                            <p>${getTotalCartAmount() === 0 ? 0 : 2}</p>
                        </div>
                        <hr />
                        <div className="cart-total-details">
                            <p>Total</p>
                            <b>${getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</b>
                        </div>
                    </div>
                    <button type="button" onClick={() => navigate('/order')}>
                        PROCEED TO CHECKOUT
                    </button>
                </div>
            </div>
        </form>
    )
}

export default Placeorder
