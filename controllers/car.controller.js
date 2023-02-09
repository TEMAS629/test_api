const { getCarDB, getCarOneDB, postCarDB, updateCarDB } = require("../service/car.service");

const getCar = (req, res) => {
  const data = getCarDB();
  res.status(200).json(data);
};

const getCarOne = (req, res) => {
  const id = req.params.id;
  const data = getCarOneDB(id);
  res.status(200).json(data);
};

const postCar = (req, res) => {
  const { name, model, years, price } = req.body;

  let dataCar = {
    name,
    model,
    years,
    price,
  };

  try {
    const res = postCarDB(dataCar);
    if (!ress) res.status(200).json("создали новую машину");
    else res.status(200).json(res);
  } catch (error) {
    res.status(400).json(error);
  }
};

const updateCar = (req, res) => {
  const id = req.params.id;
  const { name, model, years, price } = req.body;
  let result = updateCarDB(id, name, model, years, price);

  res.status(200).json(result);
};

// const postCarOne = (req, res) => {
//   const id = req.params.id;
// const data = postCarOneDB(id);
// res.status(200).json(data);
// };

// const deleteCarOne = (req, res) => {
//   const id = req.params.id;
// const data = deleteCarOneDB(id);
// res.status(200).json(data);
// };

const deleteCar = (req, res) => {
  res.status(200).json("Удалили машину");
};

module.exports = {
  getCar,
  postCar,
  updateCar,
  deleteCar,
  getCarOne
};
