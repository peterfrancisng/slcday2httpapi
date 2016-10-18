var xhr = new XMLHttpRequest();
xhr.open("GET", "https://www.google.com/", false);
xhr.send();

console.log(xhr.status);
console.log(xhr.statusText);