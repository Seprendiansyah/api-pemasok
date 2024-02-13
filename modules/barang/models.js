
const mongoose = require("mongoose");

const BarangSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    nama: { type: String, required: true},
    hargaJual: { type: Number, required: true, default: 0},
    hargaBeli: { type: Number, required: true, default: 0},
    stok: { type: Number, required: true, default: 1},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Barang = mongoose.model("Barang", BarangSchema);

module.exports = {
  Barang,
};
    
