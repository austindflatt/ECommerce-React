import React from "react";
import Grid from '@material-ui/core';

const products = [
    { id: 1, name: 'Yeezy 350 V2', description: 'Yeezy'},
    { id: 2, name: 'MacBook Pro', description: 'M1 MacBook Pro'},
    { id: 3, name: 'Shoes', description: 'Yeezys'},
];

const Products = () => {
    <main>
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} s={6} md={4} lg={3}>
                    <Product />
                </Grid>
            ))}
        </Grid>
    </main>

}

export default Products;