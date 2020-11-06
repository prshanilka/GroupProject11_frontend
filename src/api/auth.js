import axios from "axios";
const bapi = axios.create({
  baseURL: "http://localhost:3000/api/"
  //headers: { 'X-API-TOKEN': store.state.token },
<<<<<<< HEAD
})
let token='ffff';
=======
});
const token = "ddd";
>>>>>>> 8e9db6f63e0166db5012d705f36c9b0a6c32f865
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





const bodyParameters = {};
export default {
  getSomeData() {
    return bapi.get("/endpoint");
  },
  auth: (req, callBack) => {
    bodyParameters.username = req.username;
    bodyParameters.password = req.password;
    bapi
      .post("/users/login", bodyParameters, config)
      .then(user => {
        console.log("ds");
        console.log(user.data);
        if (user.data.success == 0) {
          console.log(user.data);
          return callBack(user.data);
        }
<<<<<<< HEAD
        const udata=user.data;
        localStorage.jwt=udata.token;
        return callBack(null,udata.data);

    }
  ).catch(err => {
      console.log(err.response);

  });









  },
}
=======
        const udata = user.data;
        localStorage.jwt = udata.token;
        return callBack(null, udata.data);
      })
      .catch(err => {
        console.log("Hello");

        console.log(err.response);
      });
  }
};
>>>>>>> 8e9db6f63e0166db5012d705f36c9b0a6c32f865
