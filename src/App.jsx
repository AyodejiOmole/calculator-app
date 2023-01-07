import { useState } from 'react';
import Buttons from './components/Buttons';
import { symbols } from './assets/symbols';

function App() {
  const [figures, setFigures] = useState([]);
  const [light, setLight] = useState(false);

  const handleClick = (symbol) => {
    if(symbol === "C") {
      setFigures([]);
    } else if(symbol === "<") {
      setFigures(prev => {
        return [...prev.slice(0, prev.length - 1)];
      });
    } else if(symbol === "=") {
      // const solution = calculate();
      const solution = eval(figures.join(""));
      setFigures([solution]);
    } else {
      setFigures((prev) => {
        return [...prev, symbol];
      });
    }
  }

  function calculate() {
    let final;
    for(var i = 0; i < figures.length; i++) {
      if(!checkNumber(figures[i])) {
        if(figures[i] === "+") {
          final = Number(figures.slice(0, i).join("")) + Number([...figures.slice(i + 1, -1), figures.pop()].join(""));
        } else if(figures[i] === "-") {
          final = Number(figures.slice(0, i).join("")) - Number([...figures.slice(i + 1, -1), figures.pop()].join(""));
        } else if(figures[i] === "x") {
          final = Number(figures.slice(0, i).join("")) * Number([...figures.slice(i + 1, -1), figures.pop()].join(""));
        } else {
          final = Number(figures.slice(0, i).join("")) / Number([...figures.slice(i + 1, -1), figures.pop()].join(""));
        }
      }
    }
    return final;
  }

  const toggleMode = () => {
    setLight(!light);
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
      <div className="flex justify-between lg:px-20 px-10 align-center py-3">
          <h1 className='font-bold text-3xl flex align-center text-slate-800 dark:text-white italic'>Calculator</h1>
          <div onClick={toggleMode} className="cursor-pointer bg-slate-200 flex align-center p-2 rounded-full">
            {  
                light ? <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 21a1 1 0 011 1v3a1 1 0 11-2 0v-3a1 1 0 011-1zm-5.657-2.343a1 1 0 010 1.414l-2.121 2.121a1 1 0 01-1.414-1.414l2.12-2.121a1 1 0 011.415 0zm12.728 0l2.121 2.121a1 1 0 01-1.414 1.414l-2.121-2.12a1 1 0 011.414-1.415zM13 8a5 5 0 110 10 5 5 0 010-10zm12 4a1 1 0 110 2h-3a1 1 0 110-2h3zM4 12a1 1 0 110 2H1a1 1 0 110-2h3zm18.192-8.192a1 1 0 010 1.414l-2.12 2.121a1 1 0 01-1.415-1.414l2.121-2.121a1 1 0 011.414 0zm-16.97 0l2.121 2.12A1 1 0 015.93 7.344L3.808 5.222a1 1 0 011.414-1.414zM13 0a1 1 0 011 1v3a1 1 0 11-2 0V1a1 1 0 011-1z"/></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26"><path fill="#FFF" fillRule="evenodd" d="M13 0c.81 0 1.603.074 2.373.216C10.593 1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"/></svg>
            }
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
