import ReactDOM from 'react-dom';
import React, {useState} from 'react';


const Statistics = (props) => {
  
  return(
   
   <div>
      
      <p>good: {props.good}</p>
      
      <p>neutral: {props.neutral}</p>
      
      <p>bad: {props.bad}</p>
      
      <p>all: {props.all}</p>
      
      
    <p>average: {props.avg/props.all}</p>
      
      <p>positive: {(props.good/props.all)*100}%</p>
    </div>
  )
}
const App = () => {

  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const [all, setAll] = useState(0)
  const [avg, setAvg] = useState(0)
  
  
  
  const GoodClick = () => {
    setGood(good+1)
    setAll(all+1)
    setAvg(avg+1)
  }
  
  
  const NeutralClick = () => {
    setNeutral(neutral+1)
    setAll(all+1)
    setAvg(avg+0)
  }
  
  
  
  const BadClick = () => {
    setBad(bad+1)
    setAll(all+1)
    setAvg(avg-1)
  }
  return(
     
     
     <div>
          <h1>Give Feedback</h1>
          
          <button onClick={GoodClick}>good</button>
          
          <button onClick={NeutralClick}>neutral</button>
          
          <button onClick={BadClick}>bad</button>
          
          <Statistics good={good} neutral={neutral} bad={bad} avg={avg} all={all}/>
      </div>
  )
}


export default App
ReactDOM.render(<App />, document.getElementById('root'))