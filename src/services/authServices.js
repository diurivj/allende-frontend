//const herokuAPI = "https://allende-frontend.herokuapp.com";
//const localAPI = "http://localhost:3000";
//const url = "https://stark-fortress-68174.herokuapp.com/";
const url = "https://backendallende.herokuapp.com/auth/"

export function logIn(user){
  return fetch(url + 'login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(obj =>{
      saveToken(obj)
      return obj.user
    });
};

function saveToken(obj){
  localStorage.setItem('token', obj.token)
  localStorage.setItem('user', JSON.stringify(obj.user))
}