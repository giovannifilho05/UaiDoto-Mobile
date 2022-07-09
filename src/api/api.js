import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';

const baseURL = "https://uai-doto-backend.herokuapp.com";

const api = axios.create({
  baseURL: baseURL
});

api.interceptors.request.use(
  async config => {
    const token = await AsyncStorage.getItem('@UaiDoto_token')
    
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
    const refreshToken = await AsyncStorage.getItem('@UaiDoto_refreshToken')
    if (error.response.status === 401) {
      axios.post(`${baseURL}/users/refresh-token`, null, {
        headers: {
          "Authorization": `Bearer ${refreshToken}`
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
        });
    }
    console.log(error);
    return Promise.reject(error);
  }

)

export default api;