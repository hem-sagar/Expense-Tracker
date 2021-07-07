import React from 'react';
import { ListItem, ListItemText, makeStyles, ListItemIcon } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';


const useStyles = makeStyles({
    list:{
        marginTop:10,
        border: '1px solid #f6f6f6',
    }
})
const Transaction = ({transaction,deleteTransaction}) => {
    const classes = useStyles();

    const sign = transaction.amount >= 0 ? 'Rs.' : '-Rs.';
    const amount = sign + Math.abs(transaction.amount);

    const color = transaction.amount < 0 ? 'Red' : 'Green';
    return(
        <ListItem className={classes.list} style={{background: `${color}`,color:'#fff'}}>
            <ListItemText>{transaction.text}</ListItemText>
            <ListItemText>{amount}</ListItemText>
            <ListItemIcon>
                <DeleteIcon onClick={() => deleteTransaction(transaction.id)}/>
            </ListItemIcon>
        </ListItem>
    )
}

export default Transaction;