import React from 'react';
import {Box, Typography,Divider, makeStyles,List} from '@material-ui/core';
import Transaction from './Transaction';

const Transactions = ({ transactions,deleteTransaction }) => {
    const useStyles = makeStyles({
        container:{
            '& > *': {
                marginButtom:10
            }

        },
        header: {
            color:'#D60F09',
        }
    })
    const classes = useStyles();
    return(
        <Box className={classes.container}>
            <Typography variant='h5' className={classes.header}>Transactions History</Typography>
            <Divider/>
            <List>
                {
                    transactions.map(transaction => {
                        return <Transaction key={transaction.id} transaction={transaction} deleteTransaction={deleteTransaction}/>
                    })
                }
            </List>
        </Box>
    )
}

export default Transactions