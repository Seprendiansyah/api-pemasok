const { Pemasok } = require("./models");
const { PemasokFilter } = require("./filters");
const { LibPaginationResponse } = require("../../libs/paginations");
const { LibHTTPResponseException } = require("../../libs/https");

const PemasokControllerList =  async (req, res) => {
  try {
    // Your code here
    const results = Pemasok.find(PemasokFilter(req));
    return LibPaginationResponse(req, res, results);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerCreate = async (req, res) => {
  try {
    // Your code here
    await Pemasok.create(req.cleanedData);
    res.status(201).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDetail = async (req, res) => {
  try {
    // Your code here
    let pemasok = await Pemasok.findOne({_id: req.params.id});
    if (!pemasok) throw { status: 404, message: "Not found"};
    res.status(200).json(pemasok);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerUpdate = async (req, res) => {
  try {
    // Your code here
    let pemasok = await Pemasok.findOne({_id: req.params.id});
    if (!pemasok) throw { status: 404, message: "Not found"};
    await Pemasok.findByIdAndUpdate(req.params.id, req.cleanedData);
    res.status(200).json(req.cleanedData);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

const PemasokControllerDelete = async (req, res) => {
  try {
    // Your code here
    let pemasok = await Pemasok.findOne({_id: req.params.id});
    if (!pemasok) throw { status: 404, message: "Not found"};
    await Pemasok.findByIdAndDelete(req.params.id);
    res.status(204).json(null);
  } catch (error) {
    return LibHTTPResponseException(res, error);
  }
}

module.exports = {
  PemasokControllerList,
  PemasokControllerCreate,
  PemasokControllerDetail,
  PemasokControllerUpdate,
  PemasokControllerDelete,
};
