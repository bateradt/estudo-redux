import { all } from 'redux-saga/effects';


import cart from './cart/sagas';


//function generator é declarada desta forma funciont* . Ela se assemelha com o async e wait, 

export default function* rootSaga() {
    return yield all([cart]);
};
