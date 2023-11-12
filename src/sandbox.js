// Promise then/catch syntax
fetch('https://randomuser.me/api/?results=2')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(err => console.log(err));

// Promise async/await syntax
async function load () {
  try {
    const response = await fetch('https://randomuser.me/api/?results=2');
    const data = await response.json();
    console.log(data);
  } catch (err) {
    console.log(err);
  }
}

console.log(load());
