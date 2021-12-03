

// const request = new Request(' https://api.thecatapi.com/v1/breeds/search?q=sib');
// const request = require('https://doc.siberiancms.com/siberiancms-admins-guide/').request();
const request = require('request');

let breed = process.argv[2];

request(`https://api.theasdfasdfcatapi.com/v1/breeds/search?q=${breed}`, (error, response, body)=>{
  if (!error) {
    const array = JSON.parse(body);
    if (array.length === 0) {
      console.log('No breed found');
    } else {
      const breed = array[0];
      let description = breed.description;
      console.log(description);
    }
  } else {
    console.log('We found and Error!', error);
  }
});

// const url = request.url;
// const method = request.method;
// const credentials = request.credentials;

// fetch(request)
//   .then(response => response.blob())
//   .then(blob => {
//     image.src = URL.createObjectURL(blob);
//   });

//   fetch(request)
//   .then(response => {
//     if (response.status === 200) {
//       return response.json();
//     } else {
//       throw new Error('Something went wrong on api server!');
//     }
//   })
//   .then(response => {
//     console.debug(response);
//     // ...
//   }).catch(error => {
//     console.error(error);
//   });

