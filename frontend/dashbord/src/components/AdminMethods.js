import axios from "axios";

// adding admin func
export const addadmin = (newUser) => {
  return axios
    .post("http://192.168.1.115:5000/AddAdmin", {
      userName: newUser.username,
      password: newUser.password,
    })
    .then((res) => {
      console.log("New Admin has been added");
    })
    .catch((err) => {
      console.log(err);
    });
};

// login func
export const adminlogin = (admin) => {
  return axios
    .post("http://192.168.1.115:5000/AdminLogin", {
      userName: admin.username,
      password: admin.password,
    })
    .then((res) => {
      if (res.data.accessToken) {
        localStorage.setItem("usertoken", JSON.stringify(res.data));
        console.log("Admin loged in");
      }
      return res.data;
    })
    .catch((err) => {
      console.log(err);
    });
};

// logout func

export const logout = (props) => {
  localStorage.removeItem("usertoken");
  console.log('Admin loged out')
  props.history.push("/");
};

// TODO ?! admin profile
