import React, {useState} from "react";
import "./styles.css";


var color="yellow";
const emojiDictionary={
  "😊":"smilling",
  "🤦‍♂️":"disbelief",
  "😔":"Sad",
 "❤️‍🔥":"love",
  "😑":"annoyance",
  "😀":"grinning",
  "😆":"laughting",
  "😊":"blush",
 "😇":"innocent",
  "😋":"yum"
};
var emojisWeKnow=Object.keys(emojiDictionary);  //here we convert object to array   Array ["😊", "🤦‍♂️", "😔"]


export default function App() {
{/*const [likeCounter,setLikeCounter]=useState(0);
  function likeclickhandler(){
    var newLikeCounterValue=likeCounter+1; //processing
  setLikeCounter(newLikeCounterValue); }//output
 

  const [userInput,setUserInput]=useState("");
  function inputChangeHandler(event){
    setUserInput(event.target.value);
  } */}

  const [meaning,setMeaning]=useState("");//initialse meaning with white space 

  function emojiInputHandler(event){
    var userInput=event.target.value;
    var meaning=emojiDictionary[userInput];  // accessing emoji variable to get the desired meaning of the key
    if(meaning===undefined){
      meaning="we  dont have this emoji";
    }
    setMeaning(meaning); //react  function 
  }

  function emojiClickHandler(emoji){
    var meaning=emojiDictionary[emoji];
    setMeaning(meaning);
  }
  {/*var shoplist=["apple","banana","pear","guava"];*/}
  return (
    <div className="App">
      <h1 style={{backgroundColor:color}}>Let's decode emoji's meaning !!!</h1>
     {/* <button onClick={likeclickhandler}>like me </button>{likeCounter} */}
     <input onChange={emojiInputHandler}  placeholder=" paste the emoji picture...."/>
    <h2>{meaning}</h2>   {/* actual output set by react using usestate */}
    <h3>emojis we know</h3>
    {emojisWeKnow.map(function(emoji){
      return (
      <span
      onClick={()=>emojiClickHandler(emoji)} 
      style={{fontSize:"2rem", padding:"0.5rem",cursor:"pointer"}} key={emoji}>
        {emoji}{" "}
        
        </span>
      );
    })}
    {/*}
    <div className="App">
      <h1>print shopping list</h1>
      <ui>
        {shoplist.map(items=>{
          return <li>{items}</li>
        })}
      </ui>
    </div>
      */}
     
    </div>  
  );
}
//viser - view - interact - >state in event handler -> render 