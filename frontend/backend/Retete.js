const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const retetaShema = new Schema({
    nume:{
        type: String,
        required: true,
        trim: true,
        minlenght: 3
    },
    rating:{
        type: Number,
    },
    rating_count:{
        type: Number,
    },
    autor:{
        type: String,
    }
}, {
    timestamps: true,
});

const reteta = mongoose.model('Reteta', retetaShema);

module.exports = reteta;