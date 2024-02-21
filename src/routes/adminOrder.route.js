const express = require("express")
const router = express.Router()

const orderController = require("../controllers/adminOrder.controller")
const authenticate = require("../middleware/authenticate")

router.get("/", authenticate, orderController.getAllOrders)
router.put("/:orderId/comfirmed", authenticate, orderController.comfirmedOrder)
router.put("/:orderId/ship", authenticate, orderController.shipOrder)
router.put("/:orderId/deliver", authenticate, orderController.deliverOrder)
router.put("/:orderId/cancel", authenticate, orderController.cancelledOrder)
router.put("/:orderId/delete", authenticate, orderController.deleteOrder)

module.exports = router;