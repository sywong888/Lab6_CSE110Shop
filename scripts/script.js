// Script.js

window.addEventListener('DOMContentLoaded', () => {
  fetch('http://fakestoreapi.com/products')
    .then(response => response.json())
    .then(data => console.log(data));
});

mystorage = window.localStorage;