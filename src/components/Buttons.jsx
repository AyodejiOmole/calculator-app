import React from 'react';

const Buttons = ({symbol, handleClick}) => {
  return (
    <div onClick={() => handleClick(symbol)} className={`flex w-auto p-4 cursor-pointer duration-1000 transition-all hover:bg-slate-100 hover:text-slate-900 dark:hover:bg-slate-900 hover:border hover:border-red-400 dark:hover:border-slate-600 m-5 shadow-lg align-center justify-center bg-red-400 rounded-full text-white dark:text-white dark:bg-slate-600`}>
      {symbol}
    </div>
  )
}

export default Buttons;