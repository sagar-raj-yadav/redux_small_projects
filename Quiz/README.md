
### How slice works?
i.const { selectedAnswer } = action.payload;
Action se data lete hain, jo data bheja gaya.
Example: User ne "Paris" choose kiya, toh action.payload me selectedAnswer: "Paris" hoga.

ii.const currentQuestion = state.questions[state.currentQuestionIndex];
Yahan se state.questions ke andar current question find hota hai using currentQuestionIndex.


i.state ka use Redux store ke andar jo current data hai usko read ya update karne ke liye hota hai.
Example:
Current score kya hai → state.score.
Kaunsa question chal raha hai → state.currentQuestionIndex.

ii.action ka use Redux ko batane ke liye hota hai ki kya kaam karna hai.
Agar user ne answer select kiya, toh ek action bheja jayega:
Example:
Agar user ne answer select kiya, toh ek action bheja jayega.
dispatch(answerQuestion({ selectedAnswer: "Paris" }));


conclusion: 
action->user hume batayega ki kya kaam karna h.
state -> current situation hai jo action ke baad update hoti hai.

## ye hai action->
{
  type: "quiz/answerQuestion",
  payload: {
    selectedAnswer: "Paris", // User ne jo answer diya
  },
}
##


### Imagine a real life example of a restaurant
i.state
Tumhari notebook hai jisme tum current orders aur tables ka status likhte ho:
Table 1 pe coffee order hui.
Table 2 pe khaana complete ho gaya.

->Ye sab data state mein hota hai.
# data
const state = {
  tables: [
    { id: 1, order: "Coffee", isServed: false },
    { id: 2, order: "Dinner", isServed: true },
  ],
};
#

ii.Action
Ek customer aaya aur bola: "1 tea chahiye."
Ye request ek action hai jo Redux store ko batata hai ki kya kaam karna hai.
# data
const action = {
  type: "ADD_ORDER",
  payload: { tableId: 3, order: "Tea" },
};
#
iii.Reducer
Tum waiter ho, tum state (notebook) update karte ho based on action
->Table 3 pe tea add ho gaya.
# data
const reducer = (state, action) => {
  if (action.type === "ADD_ORDER") {
    return {
      ...state,
      tables: [...state.tables, { id: action.payload.tableId, order: action.payload.order, isServed: false }],
    };
  }
  return state;
};
#

