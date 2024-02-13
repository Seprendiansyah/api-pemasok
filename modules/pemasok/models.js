
const mongoose = require("mongoose");

const PemasokSchema = new mongoose.Schema(
  { 
    /** Your schema here */ 
    namaPemasok: { type: String, required: true},
    emailPemasok: { type: String, required: true},
    teleponPemasok: { type: String, required: true},
    alamat: { type: String, required: true},
    created: { type: Date, default: Date.now },
  },
  { versionKey: false }
);

const Pemasok = mongoose.model("Pemasok", PemasokSchema);

module.exports = {
  Pemasok,
};
    
