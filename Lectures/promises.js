/* eslint-disable */

// const goodBeer = new Promise();
//
// goodBeer.then();
//
// goodBeer.catch();


// const goodBeer = new Promise(function (resolve, reject) {
//     setTimeout(function () {
//         if(true){
//             resolve('Yay!');
//         }else{
//             reject('Ups!');
//         }
//     }, 2000);
// });
//
// goodBeer.then(function (data) {
//     console.log('Success: ', data);
// });
//
// goodBeer.catch(function (error) {
//     console.log('Error: ', error);
// });


const goodBeer = new Promise((resolve, reject) => {
    setTimeout(() => {
        if(true){
            resolve('Yay!');
        }else{
            reject('Ups!');
        }
    }, 2000);
});

goodBeer.then((data) => {
    console.log(`Success: ${data}`);
});

goodBeer.catch((error) => {
    console.log(`Error: ${error}`);
});