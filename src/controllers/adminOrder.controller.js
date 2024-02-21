const orderService = require("../services/order.service")

const getAllOrders = async (req, res) => {
    try {
        const orders = await orderService.getAllOrders();
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

const comfirmedOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.confirmedOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

const shipOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.shipOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

const deliverOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deliverOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

const cancelledOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.cancelOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

const deleteOrder = async (req, res) => {
    const orderId = req.params.orderId;
    try {
        const orders = await orderService.deleteOrder(orderId);
        return res.status(200).send(orders)
    } catch (error) {
        return res.status(500).send({ error: error.massage });
    }
}

module.exports = {
    getAllOrders,
    comfirmedOrder,
    shipOrder,
    deleteOrder,
    deliverOrder,
    cancelledOrder,

}