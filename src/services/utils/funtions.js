import api from "../api/carangasApi";









export default function getPosts(res, setPosts) { 
    
    res = api.get('/cars')
    .then(response => setPosts(response.data))
    .catch(error => console.log(error))
    return res
  }