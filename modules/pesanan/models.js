
const mongoose = require("mongoose");

const PesananSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nomor: { type: String, required: true},
    nomorMeja: { type: String, required: true },
    nama: { type: String, required: true, default: ""},
    total: { type: Number, default: 0},
    isPaid: { type: Boolean, default: false},
    item: [
      {
        nama: { type: String, required: true },
        qty: { type: Number, default: 0},
        harga: { type: Number, default: 0},
        subtotal: { type: Number, default: 0},
      }
    ],
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pesanan = mongoose.model("Pesanan", PesananSchema);

module.exports = {
  Pesanan,
};
    
