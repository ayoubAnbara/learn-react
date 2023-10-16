
import ExpenseItem from './ExpenseItem';
import './Expenses.css'

const Expenses = ({ expenses }) => {
    return <div className='expenses'>
        {expenses.map((item, index) => {
            return <ExpenseItem expense={item} key={index}></ExpenseItem>
        })}
    </div>

}

export default Expenses;