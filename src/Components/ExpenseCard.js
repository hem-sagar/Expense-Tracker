import React from 'react';
import {Card,CardContent, Typography, Box, makeStyles} from '@material-ui/core';


const useStyles = makeStyles(
        {
            container:{
                display:'flex',
                '& > *':{
                    padding:10,
                    flex:1,
                }
            },
            income:{
                color:'green'
            },
            expense:{
                color:'red'
            },
            leftcard:{
                marginRight:30,
            }
        }
    )
const ExpenseCard = ({ transactions }) => {
    const amount = transactions.map(transaction => transaction.amount);
    const income = amount.filter(item => item>0).reduce((acc,item)=>(acc+item),0);
    const expense = amount.filter(item => item<0).reduce((acc,item)=>(acc+item),0);
    const classes = useStyles();
    return( 
        <Box className={classes.container}>
            <Card className={classes.leftcard}>
                <CardContent>
                    <Typography>Income</Typography>
                    <Typography className={classes.income}>Rs.{income}</Typography>
                </CardContent>
            </Card>    
            <Card>
                <CardContent>
                    <Typography>Expense</Typography>
                    <Typography className={classes.expense}>Rs.{Math.abs(expense)}</Typography>
                </CardContent>
            </Card>

        </Box>
    )
}

export default ExpenseCard;