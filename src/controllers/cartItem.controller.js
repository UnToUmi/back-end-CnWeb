const cartItemService = require("../services/cartItem.service")

const updateCartItem = async (req, res) => {
    const user = await req.user;
    try {
        const updatedCartItem = await cartItemService.updateCartItem(user._id, req.params.id, req.body)
        return res.status(200).send(updatedCartItem)
    } catch (error) {
        return res.status(500).send({ error: error.massage })

    }
}

const removeCartItem = async (req, res) => {
    const user = await req.user;
    try {
        await cartItemService.removeCartItem(user._id, req.params.id)
        return res.status(200).send({ message: "Cart Item removed successfully!" })
    } catch (error) {
        return res.status(500).send({ error: error.massage })

    }

}
module.exports = {
    removeCartItem,
    updateCartItem
}