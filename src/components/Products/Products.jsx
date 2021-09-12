import React from "react";
import { Grid } from '@material-ui/core';
import Product from "./Product/Product";
import useStyles from './styles';
import { CallMissedSharp } from "@material-ui/icons";

const products = [
    { id: 1, name: 'YEEZY BOOST 350 V2 BRED', description: 'Yeezy', image: 'https://cdn.flightclub.com/1250/TEMPLATE/800389/1.jpg', price: '$375'},
    { id: 2, name: 'YEEZY BOOST 350 V2 TAIL LIGHT', description: 'Yeezy', image: 'https://cdn.flightclub.com/3000/TEMPLATE/168022/1.jpg', price: '$330'},
];

const Products = () => {
    const classes = useStyles();

    return (
    <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container justify="center" spacing={4}>
            {products.map((product) => (
                <Grid item key={product.id} xs={12} s={6} md={4} lg={3}>
                    <Product product={product} />
                </Grid>
            ))}
        </Grid>
    </main>
    )
}

export default Products;