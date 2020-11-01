import path from 'path'
import express from 'express'
import dotenv from 'dotenv'
import { notFound, errorHandler } from './middleware/errorMiddleware.js'
import connectDB from './config/db.js'

// Route files
import authRoute from './routes/authRoute.js'
import transactionsRoute from './routes/transactionsRoute.js'
import recipientsRoute from './routes/recipientsRoute.js'
import usersRoute from './routes/usersRoute.js'

dotenv.config()

connectDB()

const app = express()

if(process.env.NODE_ENV === 'development') {
	app.use(morgan('dev'))
}

// Body parser
app.use(express.json());

// Mount routers
app.use('/api/auth', authRoute);
app.use('/api/transactions', transactionsRoute);
app.use('/api/recipients', recipientsRoute)
app.use('/api/users', usersRoute)

const __dirname = path.resolve()

if(process.env.NODE_ENV === 'production') {
	app.use(express.static(path.join(__dirname, '/frontend/build')))

	app.get('*', (req, res) => res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html')))
} else {
	app.get('/', (req, res) => {
		res.send('API running on port 9009')
	})
}

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