// const request = new Request(' https://api.thecatapi.com/v1/breeds/search?q=sib');
// const request = require('https://doc.siberiancms.com/siberiancms-admins-guide/').request();
const request = require("request");

const fetchBreedDescription = function(breedName, callback) {
  request(`https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (!error) {
        const array = JSON.parse(body);
        if (array.length === 0) {
          return callback(true, null);
        } else {
          const breed = array[0];
          let description = breed.description;
          return callback(error, description);
        }
      } else {
        return `("We found and Error!", error)`;
        
      }
    }
  );
};

module.exports = { fetchBreedDescription };

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
