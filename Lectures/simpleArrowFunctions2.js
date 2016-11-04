/* eslint-disable */

// let beerName = {
//     beer: 'Guiness',
//
//     handleMessage: function(message, handler){
//         handler(message);
//     },
//
//     receive: function () {
//         var that = this;
//
//         this.handleMessage('The best beer in the world is: ', function(message){
//             that.beer;
//
//             console.log(message + that.beer);
//         });
//     }
// };
//
// beerName.receive();

let beerName = {
    beer: 'Guiness',

    handleMessage: function(message, handler){
        handler(message);
    },

    receive: function () {
        this.handleMessage('The best beer in the world is: ', message => console.log(message + this.beer));
    }
};

beerName.receive();
