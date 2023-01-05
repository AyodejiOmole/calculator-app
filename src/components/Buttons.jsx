import React from 'react';

const Buttons = ({symbol, handleClick, number}) => {
  return (
    <div onClick={() => handleClick(symbol)} className={`py-4 px-1 cursor-pointer duration-1000 transition-all hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 hover:border grid place-content-center hover:border-red-400 dark:hover:border-slate-600 m-2 shadow-lg ${number ? "bg-blue-400 dark:bg-slate-600" : "bg-red-300"}  text-white dark:text-white`}>
      {symbol}
    </div>
  )
}

export default Buttons;