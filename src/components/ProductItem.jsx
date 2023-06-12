/* eslint-disable no-unused-vars */
import React, { useState, useContext, useEffect } from "react";
import { ShoppingCartContext } from "../Context";
import AddProduct from "./AddProduct";
import RemoveProduct from "./RemoveProduct";
import 'bootstrap/dist/css/bootstrap.css';

export const ProductItem = ({ product }) => {
    const [isAdded, setIsAdded] = useState(false)

    const context = useContext(ShoppingCartContext)

    useEffect(() => {
        let isItemOnCart = context.cartProducts.filter(p => p.id == product.id).length
        // console.log(isItemOnCart)
        setIsAdded(isItemOnCart > 0)
    }, [])

    useEffect(() => {
        let isItemOnCart = context.cartProducts.filter(p => p.id == product.id).length
        // console.log(isItemOnCart)
        setIsAdded(isItemOnCart > 0)
    }, [context.cartProducts.length])


    return (
        <div className="container text-center">
            <div className="row">
                <div className="col">
                    <div className={`border shadow-md py-2 px-2 rounded-md my-2 mx-2${isAdded ? 'border-2 border-blue-500' : ''}`} style={{ width: '18rem', height: '20rem' }}>
                        <p style={{ fontWeight: 'bolder', textAlign: 'center', textTransform: 'capitalize', fontSize: '22px' }}>{product.title}</p>
                        <img style={{ width: '18rem', height: '13rem' }} src={product.images[0]} />
                        {/* Botón: Agregar o quitar al carrito */}
                        {isAdded ? <RemoveProduct item={product} style={{ alignItems: 'center' }} /> : <AddProduct item={product} />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductItem
