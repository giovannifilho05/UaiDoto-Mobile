import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios";

const baseURL = "http://localhost:8080";

const api = axios.create({
  baseURL: baseURL
});


api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('token')
    if (token) {
      config.headers.Authorization = `Bearer ${token}`
    }
    return config
  },
  error => {
    return Promise.reject(error)
  }
);

api.interceptors.response.use(
  (success) => success,
  async (error) => {
    const token = await AsyncStorage.getItem('token')
    if (error.response.status === 401) {
      axios.post(`${baseURL}/users/refresh-token`, null, {
        headers: {
          "Authorization": `Bearer ${token}`
        }
      })
        .then(response => {
          AsyncStorage.setItem("token", response.data.token);
          AsyncStorage.setItem("refreshToken", response.data.refreshToken);

          error.config.headers["Authorization"] = "Bearer " + response.data.token;

          return api.request(error.config);
        })
        .catch(err => {
          console.log(err);
          AsyncStorage.removeItem("token");
          AsyncStorage.removeItem("refreshToken");

          alert("Suas credenciais expiraram, faça login novamente.");
          window.location.href = "/";
        });
    }
    console.log(error);
    return Promise.reject(error);
  }

)

export default api;