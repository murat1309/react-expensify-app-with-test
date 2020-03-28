import uuid from 'uuid';
import database from '../firebase/firebase';

// ADD_EXPENSE
export const addExpense = (expense) => ({
    type: 'ADD_EXPENSE',
    expense
});

//Olay şu. İlk önce database'e eklememiz lazım objeyi sonra redux state'inde değişikliği yaparak dom'u gncelleriz.
//Bunun için araya bir middleware lazım. yani bir fonksiyon ilk önce db kayıt atıp işlem bittikten sonra dispatch ile redux'a erişicek bi fonksiyon.
//bu fonksiyonda aşağıda yazdığımız startAddExpense fonksiyonudur.


//Özetle thunk sayesinde asynchronous işlemler için (örneğin firebase call or fetch) asynchronous action'lar create edebiliyoruz. SOnrasında zaten redux store'u değiştirmek için dispatch çağırıyoruz.
// Normalde bu sayfada fonksiyn falan yok sadece obje döndürüyordu.
//artık belli bi işlemin bitmesini bekledikten sonra bu işlemleri yapabiliriz fonksiyon sayesinde yani thunk.
//Eğer sen configurestore.js'de thunk kullanmazsan. startAddExpense fonksiyonunu çağıramazsın sana derki hata olara "action'ların obje olmalı fonksiyn olamaz."
//bizde action'larımız fonksiyon da olabilsin diye thunk kullanıyoruz.
export const startAddExpense = (expenseData = {}) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        const {description = '', note = '', amount = 0, createdAt = 0} = expenseData;
        const expense = {description, note, amount, createdAt };
        return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
            dispatch(addExpense({
                id: ref.key,
                ...expense
            }));
        });
    };
};

// REMOVE_EXPENSE
export const removeExpense = ({ id } = {}) => ({
    type: 'REMOVE_EXPENSE',
    id
});

export const startRemoveExpense = ({ id } = {} ) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
       return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
            dispatch(removeExpense({ id }));
        });
    };
};

// EDIT_EXPENSE
export const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates
});

export const startEditExpense = (id, updates) => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
            dispatch(editExpense(id, updates))
        });
    };
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
   type: 'SET_EXPENSES',
    expenses
});

export const startSetExpenses = () => {
    return (dispatch, getState) => {
        const uid = getState().auth.uid;
        return database.ref(`users/${uid}/expenses`)
            .once('value')
            .then((snapshot) => {
                const expenses = [];
                snapshot.forEach((childSnapshot) => {
                    expenses.push({
                        id: childSnapshot.key,
                        ...childSnapshot.val()
                    });
                });
                dispatch(setExpenses(expenses));
            });
    }
};
