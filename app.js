const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/book-routes");
const app = express();

// Middlewares
app.use(express.json());

app.use("/books", router);




mongoose.connect("mongodb+srv://subhrodipdebadmin:kobebryant_248@cluster0.xdsi2.mongodb.net/?retryWrites=true&w=majority"
).then(()=> console.log("Connected to the Database")).then(()=>{
    app.listen(5000);
}).catch((err) =>{
    console.log(err);
})





console.log('Server is listening on port 5000...')