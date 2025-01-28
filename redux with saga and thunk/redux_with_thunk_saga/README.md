### Thunk in Redux
->Thunk ek middleware hai jo redux me asynchronous operation ko handle karne ke liye use hota h.(like API calls)

->
Example:-
Normal Action:
Normally, jab hum action send karte hain, wo ek object hota hai.
{
  type: 'ACTION_TYPE',
  payload: data
}

Thunk Action:
Thunk me action ek function hota hai, jo pehle asynchronous kaam karega (jaise data fetch karna), aur jab wo kaam ho jayega, tab action dispatch karega.

const asyncAction = () => {
  return (dispatch) => {
    // Asynchronous code
    fetchDataFromAPI()
      .then(data => {
        dispatch({ type: 'ACTION_TYPE', payload: data });
      });
  };
};