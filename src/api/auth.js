import axios from 'axios';
const bapi = axios.create({
  baseURL: 'http://localhost:3000/api/',
  //headers: { 'X-API-TOKEN': store.state.token },
})
let token='ffff';
const config = {
  headers: { Authorization: `Bearer ${token}` }
};
bapi.interceptors.response.use(res => {
  //console.log('sssssssssssss');
 // config.headers.Authorization='Bearer '+localStorage.jwt;
 // console.log(config);
  //console.log(res);
  // Important: response interceptors **must** return the response.
  return res;
},function (error) {
  if (401 === error.res.status) {
    console.log(error);
  }
     
});

bapi.interceptors.request.use(function(config) {
  if(localStorage.jwt){
    const token = localStorage.jwt;
  }
  else{
    const token = "ddd";
  }
  

  if(token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
  
}, function(err) {
  return Promise.reject(err);
});



const bodyParameters = {
};

export async function myF () {
  return bapi.get('https://api.coloredstrategies.com/cakes/fordatatable?page=1&per_page=8&search=')
}









export default {
  getSomeData () {
    return bapi.get('/endpoint')
  },
  auth: (req,callBack) => {
    bodyParameters.username=req.username;
    bodyParameters.password=req.password;
    bapi.post('/users/login',bodyParameters,config
  ).then(
    user => {
      console.log("ds");
      console.log(user.data);
        if(user.data.success == 0){
          console.log(user.data);
          return callBack(user.data);
        }
        const udata=user.data;
        localStorage.jwt=udata.token;
        return callBack(null,udata.data);

    }
  ).catch(err => {
      console.log(err.response);

  });









  },
}