import { useEffect, useState } from "react";

function App() {
  const [advice, setAdvice] = useState('');
  const [adviceCount, setAdviceCount] = useState(0);

  const getAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice');
    const data = await res.json();
    // console.log(data.slip.advice);
    setAdvice(data.slip.advice);
    setAdviceCount(count => count + 1);
  }

  // executes a function when a component first gets mounted
  useEffect(() => {
    getAdvice();
  }, []);
  
  return (
    <div className="App">
      <h1>{advice}</h1>
      <button onClick={getAdvice}>Get Advice</button>
      <Message count={adviceCount} />
    </div>
  );
}

const Message = (props) => {
  return (
    <div>
      <p>You have read {props.count} pieces of advice!</p>
    </div>
  );
}

export default App;
