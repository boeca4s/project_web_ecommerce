const express = require("express");
const app = express();
const dotenv = require("dotenv");
const products = require("./data/Products");
dotenv.config();
const PORT = process.env.PORT;

const mongoose = require("mongoose");

//connect db
mongoose.connect(process.env.MONGOOSEDB_RUL).then(()=>console.log("db connected")).then((err)=>{
    err;
})


const databaseSeeder = require('./databaseSeeder');
const userRoute = require('./routes/User');
const productRoute = require("./routes/Product");

app.use(express.json());

//database seeder routes
app.use('/api/seed', databaseSeeder);

//routes for users
//api/users/login
app.use('/api/users', userRoute);

//routes for products
app.use('/api/products', productRoute);





app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});










//hieunhather
//LIfnjCc1dYim9oqt
//mongodb+srv://hieunhather:LIfnjCc1dYim9oqt@cluster0.ir6vb.mongodb.net/reactnnocde-app



// //api product test routes
// app.get("/api/products", (req, res) => {
//     res.json(products);
// });

// app.get("/api/products/:id", (req, res) => {
//     const product = products.find((product)=>product.id === req.params.id);
//     res.json(products);
// });