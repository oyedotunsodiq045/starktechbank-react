import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Route files
import authRoute from './routes/authRoute.js'
// import usersRoute from './routes/usersRoute.js'
// import transactionsRoute from './routes/transactionsRoute.js'
import recipientsRoute from './routes/recipientsRoute.js'
import usersRoute from './routes/usersRoute.js'

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
app.use('/api/recipients', recipientsRoute)
app.use('/api/users', usersRoute)

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