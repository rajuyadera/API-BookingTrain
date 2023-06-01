import Order from "../../models/order/order.js"

export const getOrder = async (req,res) => {
    const response = await Order.findAll()

    console.log(response)
}