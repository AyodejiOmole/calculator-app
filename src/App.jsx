import { useEffect, useState } from 'react';
import Buttons from './components/Buttons';

const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "/"];
function App() {

  const [figures, setFigures] = useState([]);

  const handleClick = (symbol) => {
    setFigures((prev) => {
      // const newArray = prev.push(symbol);
      // console.log(newArray);
      return [...prev, symbol];
    });
  }

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
  }

  // useEffect(() => {
  //   console.log(figures.join(""));
  // }, [figures]);

  return (
    <div className='lg:mx-5'>
      <div className='lg:w-[30%] md:w-[50%] mt-20 w-[90%] bg-slate-100 dark:bg-slate-900 mx-auto rounded-md shadow-lg'>
        <button onClick={toggleMode}>
          Switch
        </button>
        <p>{figures.join("")}</p>
        <div className='grid grid-cols-4'>
          {symbols.map((symbol, index) => {
            return <div key={index}>
              <Buttons symbol={symbol} handleClick={handleClick}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
