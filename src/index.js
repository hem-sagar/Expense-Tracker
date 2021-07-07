import ReactDOM from 'react-dom';
import './index.css';
import React,{ useState } from 'react';
import { Typography, makeStyles,Box } from '@material-ui/core';
import Balance from './Components/Balance';
import ExpenseCard from './Components/ExpenseCard';
import NewTransactions from './Components/NewTranscations';
import Transactions from './Components/Transactions';

const useStyle = makeStyles({
  header:{
    color: '#B82BF5',
    fontsize:35,
    textTransform:'uppercase',
    margin:'10px 0',
    textDecorationLine: 'underline'
  },
  component:{
    backgroundColor: '#fff',
    width: 1100,
    padding:10,
    borderRadius:20,
    display:'flex',
    height:'80vh',
    '& > *': {
      flex:1,
      padding:10,
      height:'70vh',
    }
  },

})

function App() {
  const classes = useStyle();

  const [transactions,setTransaction] = useState([
    
  ]);
  const addTransaction = (transaction) => {
    setTransaction(transactions => [transaction, ...transactions]);
  }

  const deleteTransaction = (id) => {
    setTransaction(transactions.filter(transaction => transaction.id !== id))
  }
  return (
    <div className="App">
        <Typography className={classes.header} variant="h4" ><a href="/">Expense Tracker</a></Typography>
        <Box className={classes.component}>
          <Box>
            <Balance transactions={transactions}/>
            <ExpenseCard transactions={transactions}/>
            <NewTransactions addTransaction={addTransaction}/>
          </Box>
          <Box>
            <Transactions transactions={transactions} deleteTransaction={deleteTransaction}/>
          </Box>
          <div className="bottomright">**This isnot responsive </div>
        </Box>
        
    </div>
  );
}

export default App;



ReactDOM.render(
    <App />
  ,
  document.querySelector('#root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
