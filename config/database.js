const mongoose = require('mongoose')

const conexao = async() => {
    //conexao local
    //var bdlocal = await mongoose.connect('mongodb://localhost/ac1tri')
    //conexao atlas
    var atlas = await mongoose.connect('mongodb+srv://UserAdmin:101105@ac1-2tri.xb0bm.mongodb.net/test')
}

module.exports = conexao
