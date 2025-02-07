1.npm install @reduxjs/toolkit
</br>
2.npm install react-redux
</br>
3.setup the store in App.js
</br>
4.make a file "store.js" (store ke andar reducer function hota hai and it contains slice )
</br>
5.create a slice
slice has -> 
slice name ,
initialState:-Yeh wo default data hai jo Redux store me load hota hai jab app start hoti hai,
reducers:-reducers function handle  action and state .

 </br>
6.In slice->Their is a reducer function:-
->reducers wo functions hote hain jo state ko modify karte hain.
=>reducers contains 2 things:-
a.state:-
yeh state wo data hai jo hum store me rahta hai.
Har slice ka state apna state hota hai. Jaise agar hum "cart slice" banate hain to cart ka data (like items, total price) us state me store hoga.


b.Action:-
->Action ek event hota hai(onClick) jo reducer ko batata hai ki kya karna hai.
->Har action ke paas type hoti hai (jo batata hai ki kis type ka kaam karna hai) and ek optional payload hota hai (jo data carry karta hai).


# dispatch 
Jab user koi action kare (like button click), toh dispatch ke through action reducer ko bheja jata hai.

# selector
Selectors Redux store se state ko retrieve karne ke liye use hote hain.

# work flow
user click on button ->action dispatch hoga(with type and payload) -> slice ke andar jata h->reducers iss action and payload ke sath kuch operation perform karta h ->action jo hai wo state ko modify karta h-> redux store me state update hoga -> store se updated state ko fetch karenge(using useselector)



### EXAMPLES:-

# ADD TO CART:-
i.frontend se disaptcFunction
dispatch(reducerName(data));
or
dispatch(reducerName({ id: "1", name: "shoe", price: 24 }));

->dispatch se 2 chij jata h type(issi ko hum reducerName bolte h) and payload(data)

->store me humara data yesa dikhega?
{
  cart: [              //cart->slice name
    {
      id: "1",
      name: "shoe",
      price: 24
    }
  ]
}

=>cart ek slice ka naam hai jo store ka ek part manage kar raha hai.