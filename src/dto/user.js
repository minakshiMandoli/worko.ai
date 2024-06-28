exports.createUpdate = async (data) => {
  const user = {
    id: data._id,
    email: data.email,
    name: data.name,
    age: data.age,
    city: data.city,
    zipCode: data.zipCode,
  };
  return user;
};
exports.list = async (data) => {
  const user = {
    id: data._id,
    email: data.email,
    name: data.name,
  };
  console.log("data", user);
  return user;
};
exports.view = async (data) => {
  const user = {
    id: data._id,
    email: data.email,
    name: data.name,
    age: data.age,
    city: data.city,
    zipCode: data.zipCode,
    status: data.status,
  };
  return user;
};
