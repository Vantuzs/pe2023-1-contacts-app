import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://jsonplaceholder.typicode.com',
});

export const getPosts = () => axiosInstance.get('/posts');

// ------------------------------------------
// const axiosInstance = axios.create({
//   baseURL: 'https://randomuser.me/api',
// });

// axiosInstance
//   .get('/?results=2')
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err));

// axiosInstance
//   .get('/?gender=female')
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err));

// axios
//   .get('https://randomuser.me/api/?results=2')
//   .then(({ data }) => console.log(data))
//   .catch(err => console.log(err));

// async function loadUsers () {
//   try {
//     const { data } = await axios.get('https://randomuser.me/api/?results=2');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// }

// loadUsers();
