import React,{useState} from 'react';
import { Box,Typography, TextField, makeStyles, Button} from '@material-ui/core';


const useStyles = makeStyles({
    container:{
        display:'flex',
        flexDirection:'column',
        '& > *' :{
            padding:10,            
            flex:2,
        }
    },
    header:{
        marginTop:50
    },
    button1:{
        background:'#02750F',
        color:'#fff',
        marginTop:10,
        
    },
    enter:{
        marginRight:30,
    }
});
const NewTransactions = ({ addTransaction }) =>{
    const classes = useStyles();
    const [text,setText] = useState('');
    const [amount,setAmount] = useState();
    const newTransaction = () =>{
        const transaction = {
            id: Math.floor(Math.random()*10000),
            text: text,
            amount: +amount
        }
        addTransaction(transaction);
    }
    return(
        <Box>
            <Typography variant='h5' className={classes.header}>New Transactions</Typography>
            <Box className={classes.container}>
                <form noValidate autoComplete="off">
                    <TextField className={classes.enter} required id="outlined-basic" label="Enter Expense" variant="outlined" onChange = {(e) => setText(e.target.value)} />
                    <TextField required id="outlined-basic" label="Total Amount" variant="outlined" onChange = {(e) => setAmount(e.target.value)}/>
                    <Button className={classes.button1} variant="contained" onClick={newTransaction}>Add Transaction</Button>
                </form>
                
            </Box>
        </Box>
    )
}

export default NewTransactions;