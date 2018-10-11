//const herokuAPI = "https://allende-frontend.herokuapp.com";
//const localAPI = "http://localhost:3000";
const herokuMIO = "https://stark-fortress-68174.herokuapp.com";

export function logIn(user){
  return fetch(herokuMIO + '/login', {
    method: 'POST',
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(user)
  })
    .then(r => r.json())
    .then(user => user);
};