import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Route files
import authRoute from './routes/authRoute.js'
// import usersRoute from './routes/usersRoute.js'

// merge primaryTransactions, savingsTransactions & transfers into one transaction file

// import transactionsRoute from './routes/transactionsRoute.js'

// start comment out 
// import primaryTransactions from './routes/primaryTransactionsRoute.js'
// import savingsTransactions from './routes/savingsTransactionsRoute.js'
// import transfers from './routes/transfersRoute.js'
// end comment out 
import recipientsRoute from './routes/recipientsRoute.js'
import usersRoute from './routes/usersRoute.js'
import primaryAccountsRoute from './routes/primaryAccountsRoute.js'
import savingsAccountsRoute from './routes/savingsAccountsRoute.js'

dotenv.config()

connectDB()

const app = express()

// Body parser
app.use(express.json());

app.get('/', (req, res) => {
  res.send('API running on port 9009')
})

// Mount routers
app.use('/api/auth', authRoute);
// app.use('/api/v1/users', usersRoute);
// app.use('/api/v1/transactions', transactionsRoute);

// start comment out 
// app.use('/api/v1/primaryTransactions', primaryTransactions);
// app.use('/api/v1/savingsTransactions', savingsTransactions);
// app.use('/api/v1/transfers', transfers);
// end comment out 
app.use('/api/recipients', recipientsRoute)
app.use('/api/users', usersRoute)
app.use('/api/primary-accounts', primaryAccountsRoute)
app.use('/api/savings-accounts', savingsAccountsRoute)

app.use(notFound)
app.use(errorHandler)

const PORT = process.env.PORT || 9009

app.listen(
	PORT,
	console.log(
		`Server running in ${process.env.NODE_ENV} mode on port ${PORT}!`.yellow
		.bold
	)
);