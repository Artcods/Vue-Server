/* Membuat data yang sesuai kita inginkan (ROM) => relasi object manajement  */
module.exports = mongoose => {
    const schema = mongoose.Schema({
        user_id: Number,
        cart_items : [String]
    })

    /* mengubah obejct.id */

    schema.method("toJSON", function () {
        const {__v, _id, ...object} = this.toObject()
        object.id = _id
        return object
    })

    const Order = mongoose.model('orders', schema)
    return Order;
    /* jangan lupa daftarkan/registrasikan ke index/model */
}