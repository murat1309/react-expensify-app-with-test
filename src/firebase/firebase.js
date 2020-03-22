import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export {firebase, database as default };
//---------------------------------------------------<FİREBASE ARRAY>--------------
//array oluşturup obje ekleme
/*database.ref('notes').push({ //push => automatically generates id for us
    title: 'TO DO',
    body: 'Go for a run'
});

//arraydeki obje güncelleme
database.ref('notes/-M2weuFP78B5mjEm3hwu').update({
   body:'Buy food'
});
//arraydeki obje silme
database.ref('notes/-M2weuFP78B5mjEm3hwu').remove();*/

//DB'deki expenses objesi içindekileri array yaapma.
/*database.ref('expenses')
    .once('value')
    .then((snapshot) => {
        const expenses = [];
        snapshot.forEach((childSnapshot) => {
            expenses.push({
                id: childSnapshot.key,
                ...childSnapshot.val()
            });
        });
        console.log(expenses);
    });*/

//db'deki expenses objelerinde herhangi bir değişiklik olduğu an bu fonksiyon çalışır.
/*database.ref('expenses').on('value', (snapshot) => {
    const expenses = [];
    snapshot.forEach((childSnapshot) => {
        expenses.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
        });
    });
    console.log(expenses);
});*/

//child_removed => db'deki expenses objelerinden herhangi biri silindiği an bufonksiyon çalışır.
/*database.ref('expenses').on('child_removed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
});*/

//child_changed => db'deki expenses objelerinden herhangi biri güncellendiğinde an bufonksiyon çalışır.
/*database.ref('expenses').on('child_changed', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
});*/

//child_added => her eklendiğinde ve aynı zamanda zaten olan her bir obje için de çalışacaktır..
/*database.ref('expenses').on('child_added', (snapshot) => {
    console.log(snapshot.key,snapshot.val());
});*/


//---------------------------------------------------<FİREBASE ARRAY/>--------------

//set => return a promise so we can use then or catch.
/*
database.ref().set({
   name: 'Muratcan',
   age: 24,
   isSingle: false,
    stressLevel: 6,
    job: {
      title:'Software developer',
      company: 'Google'
    },
   location: {
       city: 'Istanbul',
       country: 'New York'
   }
}).then(() => {
    console.log('Data is saved');
}).catch((e) => {
    console.log('This failed.',e);
});
*/


//database.ref().set('This is my data');
/*Güncellemicektir override edicektir.
database.ref().set({
    age: 24
});*/
/*
database.ref('age').set(23); //Age updated.
database.ref('location/city').set('İstanbul');  //city updated.
database.ref('attributes').set({            //added new field.
    height: 73,
    weight:150
}).then(() => {
    console.log('Second call worked');
}).catch((e) => {
    console.log('Things didnt for the second error',e);
});
*/

//*************************Remove**********************

/*database.ref('isSingle') //ref() içine hiçbir paramtre vermeden remove yaparsan tüm database null'a eşit olur.
    .remove()                   //database.ref('isSingle').set(null); => buda remove ile aynı işlemi yapar isSingle'ı sadece siler ama remove daha iyi.
    .then(() => {
        console.log('Data was removed');
    }).catch((e) => {
        console.log('Did not remove data', e)
});*/

//***************************UPDATE***********************
/*database.ref().update({ //var olanları günceller, olmayanları ekler, null yaptıklarını ise siler.
    name: 'Mike',
    age: '25',
    date: 'today',
    isSingle: null,
    'location/city':'Boston',  //objenin belirli bir alanın güncelleme.
    'job/title': 'Full Stack Developer'
});*/

//******************************SELECT************************
/*database.ref('location/city') //ref() hiçbişi vermezsen select all database.
    .once('value')
    .then((snapshot) => {
        const val = snapshot.val();
        console.log(val);
    }).catch((e) => {
        console.log('Error fetching data',e);
});*/



//********************************ON - OFF***************************
/*
database.ref().on('value', (snapshot) => { //rerun the functions for all the data changes.
    console.log(snapshot.val()); //database'de herhangi bir değer değiştiği an bu fonksiyon çalışır.
});

setTimeout(() => {
    database.ref('age').set(20);
}, 3000);

setTimeout(() => {
    database.ref().off(); //bağlantıyı kapatıyorsun
}, 7000);

setTimeout(() => {
    database.ref('age').set(30); //bağlantı kapandığından on methodu çalışmicak ama database age:30 olmuş olcak taabi.
}, 7000);
*/

//example on
/*database.ref().on('value', (snapshot) => {
    const val = snapshot.val();
    console.log(`${val.name} is a ${val.job.title} at ${val.job.company}`);
});*/
