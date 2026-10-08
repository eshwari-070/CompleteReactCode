//Older version of redux store.js file
// import { createStore } from "redux";

// //Initial State
// const initialState = {
//   user: {
//     username: "Arun",
//     balance:50000
//   },
// };

// //Action State
// export const addMoney = (amt) => ({
//     type: "addMoney",
//     payload: amt,
// });

// export const removeMoney = (amt) => ({
//     type: "removeMoney",
//     payload: amt,
// });

// //Reducer
// function reducer(state = initialState, action) {
//     switch(action.type) {
//         case "addMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance + action.payload,
//                 },
//             };
//         case "removeMoney":
//             return {
//                 user: {
//                     username: state.user.username,
//                     balance: state.user.balance - action.payload,
//                 },
//             };
//         default:
//             return state;
//     }
// }

// const store = createStore(reducer);
// export default store;


//New version of redux store.js file
import { configureStore, createSlice } from "@reduxjs/toolkit";

//Initial State
const userslice = createSlice({
    name: "user",
    initialState: {
        username: "Arun",
        balance: 25000,
    },
    reducers: {
        addMoney: (state, action) => {
            state.balance += action.payload;
        },
        removeMoney: (state, action) => {
            state.balance -= action.payload;
        }
    },
});

export const { addMoney, removeMoney } = userslice.actions;
const store = configureStore({
    reducer: { user: userslice.reducer  },
});
export default store;   