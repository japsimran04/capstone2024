import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import {
  Container,
  Typography,
  TextField,
  Button,
  Grid,
  Divider,
  MenuItem,
} from '@material-ui/core';
import MaskedInput from 'react-input-mask'; // Import input masking library


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(4),
  },
  title: {
    marginBottom: theme.spacing(2),
  },
  form: {
    marginBottom: theme.spacing(2),
  },
  button: {
    marginTop: theme.spacing(2),
  },
  divider: {
    margin: theme.spacing(2, 0),
  },
}));

const Payment = () => {
  const classes = useStyles();
  const [cardNumber, setCardNumber] = useState('');
  const [cvv, setCvv] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [street, setStreet] = useState('');
  const [province, setProvince] = useState('AB');
  const [country, setCountry] = useState('Canada');
  const [transactions, setTransactions] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');

  const location = useLocation();
  const totalAmount = location.state ? location.state.totalAmount : 0;

  const provinceTaxes = {
    AB: 0.05,
    BC: 0.12,
    MB: 0.12,
    NB: 0.15,
    NL: 0.15,
    NT: 0.05,
    NS: 0.15,
    NU: 0.05,
    ON: 0.13,
    PE: 0.15,
    QC: 0.14975,
    SK: 0.11,
    YT: 0.05,

  };
  
  const totalWithTaxes = totalAmount * (1 + provinceTaxes[province]);

  const processPayment = (event) => {
    event.preventDefault();
    
    const transaction = {
      cardNumber,
      cvv,
      expiryDate,
      amount: totalAmount,
      status: 'Successful',
      transactionDate: new Date(),
    };

    setTransactions([...transactions, transaction]);

    setCardNumber('');
    setCvv('');
    setExpiryDate('');
  };

  return (
    <Container className={classes.root}>
      <form className={classes.form} onSubmit={processPayment}>
      <Typography variant="h4" style={{fontFamily:'Playfair Display, serif'}}>Order Summary</Typography>
      <Typography style={{fontFamily:'Playfair Display, serif'}}>Subtotal: ${totalAmount}</Typography>
      <Typography style={{fontFamily:'Playfair Display, serif'}}>Taxes: ${(totalWithTaxes - totalAmount).toFixed(2)}</Typography>
      <Typography style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif' }}>Total Amount (including taxes): ${totalWithTaxes.toFixed(2)}</Typography>
        <Typography variant="h4" style={{fontFamily:'Playfair Display, serif'}} className={classes.title}>
          Checkout
        </Typography>
        <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
        <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}

            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Street Address"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
              required
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}
            />
          </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              select
              variant="outlined"
              fullWidth
              label="Province"
              value={province}
              onChange={(e) => setProvince(e.target.value)}
              required
              style={{ marginBottom: '10px' }}>
              {Object.keys(provinceTaxes).map((province) => (
                <MenuItem key={province} value={province}>
                  {province}
                </MenuItem>
              ))}
            </TextField>
          </Grid>
          <Grid item xs={12}>
            <TextField
              variant="outlined"
              fullWidth
              label="Country"
              value={country}
              disabled
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}

            />
          </Grid>
        </Grid>
        <Typography variant="h4" style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif' }}>
              Payment Method
          </Typography>
          <Grid container spacing={2}>
          <Grid item xs={12}>
            <MaskedInput
              mask="9999 9999 9999 9999" // Set card number mask
              value={cardNumber}
              onChange={(e) => setCardNumber(e.target.value)}
            >
              {(inputProps) => (
                <TextField
                  variant="outlined"
                  fullWidth
                  label="Card Number"
                  {...inputProps}
                  required
                />
              )}
            </MaskedInput>
          </Grid>
          <Grid item xs={12} sm={6}>
            <MaskedInput
              mask="99/99"
              value={expiryDate}
              onChange={(e) => setExpiryDate(e.target.value)}
            >
              {() => <TextField
                variant="outlined"
                fullWidth
                label="Expiration Date"
                required
              />}
            </MaskedInput>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              variant="outlined"
              fullWidth
              label="CVV"
              value={cvv}
              onChange={(e) => setCvv(e.target.value)}
              inputProps={{ maxLength: 3 }} // Set max length to 3 for CVV
              required
              style={{ marginBottom: '10px', fontFamily:'Playfair Display, serif'}}
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          style={{ backgroundColor: '#34713A', color: 'white', fontFamily:'Playfair Display, serif'}}
          fullWidth
          className={classes.button}
          type="submit"
        >
          Place Order
        </Button>
      </form>
      <Divider className={classes.divider} />
      {transactions.map((transaction, index) => (
        <div key={index}>
          <p>Amount: {transaction.amount}</p>
          <p>Status: {transaction.status}</p>
          <p>Transaction Date: {transaction.transactionDate.toString()}</p>
        </div>
      ))}
    </Container>
  );
};

export default Payment;
