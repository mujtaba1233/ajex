const mongoose = require('mongoose')

const connectDB = async () => {
  try {

    console.log('ENV VARIABLE', process.env.MONGODB_URI);
    const conn = await mongoose.connect(process.env.MONGODB_URI , {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      dbName: process.env.DB_NAME, 
      maxPoolSize: process.env.DB_POOL_SIZE, // Adjust this based on your desired maximum pool size
    })

    // console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline)
  } catch (error) {
    console.log(error)
    process.exit(1)
  }
}

module.exports = connectDB