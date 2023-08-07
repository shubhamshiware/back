const userModel = require("../db/models/user");

const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let db = [];

const saveData = (data) => {
  const user = new userModel(data);
  return user.save();
};

const insertMany = (data) => {
  return userModel.insertMany(data);
};

const getData = (data) => {
  return userModel.find();
};

const deleteData = (id) => {
  return userModel.deleteOne({ _id: id });
};

const editData = (data) => {
  return userModel.updateOne({ _id: data.id }, { $set: data });
};

const getDataById = (id) => {
  return userModel.findOne({ _id: id });
};
const getDataByUserName = (username) => {
  return userModel.findOne({ username: username });
};

module.exports = {
  saveData,
  getData,
  deleteData,
  getDataById,
  editData,
  insertMany,
  getDataByUserName,
};
