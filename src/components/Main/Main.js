import React from 'react';
import Product from './Product';

const Main = (props) => {
    const { products, onAdd } = props;
    // console.log(products)
    return (
        <div>
            <main className="block col-2">
                <h2>Product</h2>
                <div className="row">
                    {
                        products.map((product) => (
                            <Product key={product.id} product={product} onAdd={onAdd} />
                        ))
                    }
                </div>
            </main>
        </div>
    );
};

export default Main;