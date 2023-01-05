import { useState } from 'react';
import Buttons from './components/Buttons';
import { symbols } from './assets/symbols';

function App() {
  const [figures, setFigures] = useState([]);

  const handleClick = (symbol) => {
    setFigures((prev) => {
      return [...prev, symbol];
    });
  }

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
  }

  const checkNumber = (symbol) => {
    const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    if(numbers.includes(Number(symbol))) {
      return true;
    }
    return false;
 }

  return (
    <div className='lg:mx-5'>
      <div className="flex justify-between px-20 align-center py-3">
          <h1 className='font-bold text-3xl text-slate-800 dark:text-white italic'>Calculator</h1>
          <div onClick={toggleMode} className="flex justify-end align-center">
            Switch
          </div>
        </div>
      <div className='lg:w-[35%] mt-5 md:w-[50%] w-[90%] bg-slate-100 dark:bg-slate-900 py-3 px-5 mx-auto rounded-md shadow-lg'>
        <input disabled className="font-semibold py-3 dark:text-white text-slate-800 my-12 text-base w-full border border-red-400" value={figures.join("")}/>
        <div className='grid grid-cols-4 grid-rows-5'>
          {symbols.map((symbol, index) => {
            return <div key={index} className={symbol === "=" ? "grid row-span-2" : ""}>
              <Buttons symbol={symbol} handleClick={handleClick} number={checkNumber(symbol) ? true : false}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
