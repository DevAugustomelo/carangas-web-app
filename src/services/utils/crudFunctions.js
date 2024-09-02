import api from "../api/carangasApi";





function getPosts(res, setPosts) {

  res = api.get('/cars')
    .then(response => setPosts(response.data))
    .catch(error => console.log(error))
  return res
};

function postCar(res, setCars) {
  return res
};



export {
  getPosts,
  postCar
};



