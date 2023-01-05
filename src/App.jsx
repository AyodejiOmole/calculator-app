import { useState } from 'react';
import Buttons from './components/Buttons';

const symbols = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0", "=", "/"];
function App() {

  const toggleMode = () => {
    document.documentElement.classList.toggle("dark");
  }

  return (
    <div className='lg:mx-5'>
      <div className='lg:w-[30%] md:w-[50%] mt-20 w-[90%] bg-slate-100 dark:bg-slate-900 mx-auto rounded-md shadow-lg'>
        <button onClick={toggleMode}>
          Switch
        </button>
        <p>This is it.</p>
        <div className='grid grid-cols-4'>
          {symbols.map((symbol, index) => {
            return <div key={index}>
              <Buttons symbol={symbol}/>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}

export default App;
