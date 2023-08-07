const { v4: uuidv4 } = require("uuid");
uuidv4(); // ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'

let db = [];

const saveData = (data) => {
  data.id = uuidv4();
  db.push(data);
  return db;
};

const getData = (data) => {
  return db;
};

const deleteData = (id) => {
  db = db.filter((ele) => ele.id != id);
  return db;
};

const editData = (data) => {
  db.map((ele, index) => {
    if (ele.id == data.id) {
      db[index] = data;
    }
  });
};
const editDataHandlebar = (data) => {
  let ind = db.findIndex((ele) => ele.id == data.id.split("/")[0]);
  db[ind] = data;
  return db;
};

const getDataById = (id) => {
  let data = db.find((ele, index) => ele.id === id);
  return data;
};

module.exports = {
  saveData,
  getData,
  deleteData,
  getDataById,
  editData,
  editDataHandlebar,
};
