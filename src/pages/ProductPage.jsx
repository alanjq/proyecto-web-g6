import React, { useState } from 'react';

export const ProductPage = () => {

    const [item, setItem] = useState({
        name: 'Nombre del artículo',
        price: 9.99,
        description: 'Descripción del artículo',
    });

    const addToCart = () => {
        console.log('Artículo agregado al carrito');
    };

    return (<div>

        <h2>{item.name}</h2>
        <p>Precio: ${item.price}</p>
        <p>{item.description}</p>
        <button onClick={addToCart}>Agregar al carrito</button>
    </div>
        
    )
}

export default ProductPage
