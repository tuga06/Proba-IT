const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const utilizatorShema = new Schema({
    nume:{ type: String, required: true, trim: true, minlenght: 3 },
    email:{ type: String, required: true },
    telefon:{ type: Number, required: true },
    grupa:{ type: String, required: true }
}, {
    timestamps: true,
});

const utilizator = mongoose.model('Reteta', utilizatorShema);

module.exports = utilizator;