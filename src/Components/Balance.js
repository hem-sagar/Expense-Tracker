import React from 'react';
import {Typography,Box,makeStyles} from '@material-ui/core';

const Balance = ({transactions}) =>{
    const useStyle = makeStyles({
        balance:{
            fontSize:25,
            color:'#2D0AFA',
            marginBottom: 20,
        }
    })
    const classes = useStyle();
    const amount = transactions.map(transaction => transaction.amount);
    const total = amount.reduce((amount,item) => (amount + item),0).toFixed(2);
    return(
            <Box>
                <Typography className={classes.balance}>Balance Rs.{total}</Typography>
            </Box>
        
    )
}

export default Balance;