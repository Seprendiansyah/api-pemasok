const PesananKalkulasi = (data) => {
    try {
        let subtotal = 0;
        let total = 0;
        data.item = data.item.map((value) => {
            subtotal = value.harga * value.qty
            total += subtotal
            return {...value, subtotal}
        })
        
        data.total = total;

        return data;
    } catch (error) {
        throw { status: 403, message: "Terjadi masalah saat perhitungan kalkluasi."};
    }
}

module.exports = {PesananKalkulasi}