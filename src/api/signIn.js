import api from "./api";

export default async function signIn(email, password) {
  console.log("Submit", {email, password});
  return api.post('/login', {
    email, password
  });
}