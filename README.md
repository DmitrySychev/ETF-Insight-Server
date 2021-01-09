# ETF-Tracking - Backend

App for tracking ETF's and assosiated holdings.


# Installation

```

yarn install

```

# Database

This project uses MongoDB. To install click the [link](https://docs.mongodb.com/manual/installation/) and follow the installation instructions.

Open mongod and create an ETF database.

Open terminal and execute the following commands in the current directory:

```
- Instructions comings soon

```
# Run application 

To run application execute the following command:

```
nodemon server.js

```

# TODO

```
top 20 holding per ETF
    - if 2k in qqq and 3k in spy, then quimilitive holdings
    - if Holding Ticker :AAPL, Holding Name: Apple Inc, Holding Percentage: 13.30%. and 2k is investment, what is the monetary value of 13%

    - what sector does the holding belong to?
    - how much investment money is in the sector?
```

# Bugs

```
- Signup does not display an error message on failed sign up
- User profile page textfield needs validation for numbers only
- Border around the account icon reacts like a button, but only the icon is active
- rightNavBar default color theme causes a delay on render

```