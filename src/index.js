const express = require("express");
const cors = require("cors");
const authRouters = require("./routes/auth.route");
const userRouters = require("./routes/user.route");
const productRouters = require("./routes/product.route")
const adminProductRouters = require("./routes/adminProduct.route")
const cartRouters = require("./routes/cart.route")
const cartItemRouters = require("./routes/cartItem.route")
const orderRouters = require("./routes/order.route")
const reviewRouters = require("./routes/review.route")
const ratingRouters = require("./routes/rating.route")
const adminOrderRouters = require("./routes/adminOrder.route")


const app = express();

app.use(express.json())
app.use(cors())

app.get("/", (req, res) => {
    return res.status(200).send({ message: "Welcome to back-end server", status: true })
})
//auth
app.use("/auth", authRouters);
//user
app.use("/api/users", userRouters);
//product
app.use("/api/products", productRouters)
//adminProduct
app.use("/api/admin/products", adminProductRouters)
//cart
app.use("/api/cart", cartRouters)
//cartItem
app.use("/api/cart_items", cartItemRouters)
//order
app.use("/api/orders", orderRouters)
//review
app.use("/api/reviews", reviewRouters)
//rating
app.use("/api/ratings", ratingRouters)
//adminOrder
app.use("/api/admin/orders", adminOrderRouters)



module.exports = app;