// import React,{useState, useEffect, useRef} from 'react'
// import './App.css';

// function App() {
//   const [quotes, setQuotes] = useState('')
//   const textRef = useRef();
//   let colors = ["fff000","#874809","#5a5987","#9900e9","#ff3465","#a95367"]

//   const getQuote = () => {
//     fetch("https://type.fit/api/quotes")
//     .then(res => res.json())
//     .then(data => {
//       let randomNumber = Math.floor(Math.random() * data.length)
//       setQuotes(data[randomNumber])
//     })
//   }
//   useEffect(() => {
//     getQuote()
//   },[])

//   useEffect(() => {
//     textRef.current.style.color = colors[Math.floor(Math.random() *  colors.length)]
//   },[quotes])

//   return (
//     <div className="App">
//       <div className="quote">
//           <p ref={textRef}>{quotes.text}</p>
//           <p>Authur: {quotes.author}</p>
//           <div className="btnContainer">
//             <button onClick={getQuote} className="btn">Get Quote</button>
//             <a href={`https://twitter.com/intent/tweet?text=${quotes.text}`} 
//             target="_blank"
//             rel="noopener noreferrer"
//             className="btn">Tweet</a>
//           </div>
//       </div>

//     </div>
//   );
// }
// export default App;

import React,{useState,useEffect,useRef} from 'react'
import './App.css'

const App = () => {
  const [quotes, setQuote] = useState('')
  const textRef = useRef()

  let colors = ["#fff","#874809","#5a5987","#9900e9","#ff3465","#a95367"]

  const getQuote = () => {
    fetch("https://type.fit/api/quotes")
    .then(res => res.json())
    .then(data => {
      const randomNumber = Math.floor(Math.random() * data.length)
      setQuote(data[randomNumber])
    })
  }
  useEffect(() => {
    getQuote()
  },[])

  useEffect(() => {
    textRef.current.style.color = colors[Math.floor(Math.random() * colors.length)]
  },[quotes])
  return (
    <div className="App">
      <div className="quote">
        <p ref={textRef}>{quotes.text}</p>
        <p>Author: {quotes.author}</p>
        <div className="btnContainer">
            <button className="btn" onClick={getQuote}>Get quote</button>
            <a 
              href={`https://twitter.com/intent/tweet?text=${quotes.text}`}
              rel="noopener noreferrer"
              target="_blank"
              className="btn"
              >Tweet</a>
        </div>

      </div>

    </div>
  )
}

export default App





