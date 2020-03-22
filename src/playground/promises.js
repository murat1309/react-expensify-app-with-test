const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve({name: 'Murat', age: 23});
        //reject('Something went wrong!');
    }, 3000);
});

console.log('before');

promise.then((data) => {
    console.log('1',data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('other promise');
        }, 3000);
    });
}).then((text) => {
    console.log('does this run', text);
}).catch((error) => {
    console.log(error);
});
console.log('after');
//resolve() => sadece tek bir şey resolve edilebilir. birden fazla resolve kullanılamazçve resolve => .then() ile reject => .catch() ile yakalanır.

//reject aktifen çıktı => before,after, Something went wrong!
//promise aktifken => before, after, 3 saniye sonra 1 object, 3 saniye daha sonra does this run other promise
