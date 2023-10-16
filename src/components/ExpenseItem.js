import React from 'react'
import './ExpenseItem.css';
import ExpenseDate from './ExpenseDate';
const expenseItem= ({expense}) => {
  
  return (
    <div className='expense-item'>
      <ExpenseDate date={expense.date}></ExpenseDate>
      
      <div className='expense-item__description'>
        <h2>{expense.description}</h2>
        <div className='expense-item__price'>{expense.price}</div>
      </div>

    </div>
  )
}
export default expenseItem;
