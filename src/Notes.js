// 1. How would you describe the concept of "state"?
// A way for React to remember saved values from within a component.
// This is similar to declaring variables from within a component,
// with a few added bonuses (which we'll get to later)


// 2. When would you want to use props instead of state?
// Anytime you want to pass data into a component so that
// component can determine what will get displayed on the
// screen.


// 3. When would you want to use state instead of props?
// Anytime you want a component to maintain some values from
// within the component. (And "remember" those values even
// when React re-renders the component).


// 4. What does "immutable" mean? Are props immutable? Is state immutable?
// Unchanging. Props should NOT be changed, they are immutable. State is mutable.

//React does not look for local variable changes


// 1. You have 2 options for what you can pass in to a
//    state setter function (e.g. `setCount`). What are they?
   
// a. New value of state (setCount(42))
// b. Callback function - whatever the callback function 
//    returns === new value of state


// 2. When would you want to pass the first option (from answer
//    above) to the state setter function?
// Whenever you don't need the previous value of state to determine
// what the new value of state should be.


// 3. When would you want to pass the second option (from answer
//    above) to the state setter function?
// Whenever you DO need the previous value to determine the new value




//useState -  Changing state with a callback function
// import React from "react"

// export default function App() {
//     const [count, setCount] = React.useState(0)
//     /**
//      * Note: if you ever need the old value of state
//      * to help you determine the new value of state,
//      * you should pass a callback function to your
//      * state setter function instead of using
//      * state directly. This callback function will
//      * receive the old value of state as its parameter,
//      * which you can then use to determine your new
//      * value of state.
//      */
//     function add() {
//         setCount(prevCount => prevCount + 1)
//     }
//     // Challenge: update `substract` to use a callback function
    
//     function subtract() {
//         setCount(prevCount => prevCount - 1)
//     }
    
//     return (
//         <div className="counter">
//             <button className="counter--minus" onClick={subtract}>–</button>
//             <div className="counter--count">
//                 <h1>{count}</h1>
//             </div>
//             <button className="counter--plus" onClick={add}>+</button>
//         </div>
//     )
// }
