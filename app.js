require("dotenv").config();
require("express-async-errors");
const express = require("express");
const app = express();
const connectDB = require("./db/connect")
const errorHandlerMiddleware = require("./middlewares/error-handler")
const authRouter = require("./routes/auth");
const viewsRouter = require("./routes/views");
const marketplaceDataRouter = require("./routes/marketplaceData");
const requestedDataRouter = require("./routes/requestedData");
const cors = require("cors");
const notFound = require('./middlewares/not-found')
const authMiddleware = require("./middlewares/authentication")
const cookieParser = require("cookie-parser")
app.use(cors());
app.use(express.static("./public"))
app.use(express.urlencoded({extended: true}))
app.use(express.json())
app.use(cookieParser())
// routes
app.use("/",viewsRouter);
app.use("/api/v1/auth",authRouter);
app.use("/api/v1/marketplace-data", authMiddleware,marketplaceDataRouter);
app.use("/api/v1/requested-data",authMiddleware,requestedDataRouter);

// errors
app.use(errorHandlerMiddleware)
app.use(notFound)

const PORT = process.env.PORT || 5000
const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI)
        app.listen(PORT,console.log(`server is listening on port ${PORT}`))
    } catch (error) {
        console.log(error)
    }
    
}
start();