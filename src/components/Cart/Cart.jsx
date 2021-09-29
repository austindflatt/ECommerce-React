import React from 'react'
import { Container, Typography, Button, Grid } from '@material-ui/core';

const Cart = () => {
    const isEmpty = true;
    const EmptyCart = () => (
        <Typography variant="subtitle1">There are no items in your shopping cart</Typography>

    );

    const FilledCart = () => (
        <>
        </>
    );
    return (
        <Container>
            <div className={classes.toolbar} />
            <Typography className={classes.title} variant="h3">Your Shopping Cart</Typography>
            { isEmpty ? <EmptyCart /> : <FilledCart />}
        </Container>
    )
}

export default Cart