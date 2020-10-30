import mongoose from 'mongoose'
import colors from 'colors'

const connectDB = async () => {
  try {
    // const conn = await mongoose.connect(process.env.MONGO_URI, {
    const conn = await mongoose.connect(process.env.LOCAL_MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
      useUnifiedTopology: true
    });
  
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline.bold);
    
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold)
    process.exit(1)
  }
}

export default connectDB