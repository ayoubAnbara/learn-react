import './App.css';

import Expenses from './components/Expenses';

function App() {
  const expenses=[
    {date:new Date(),description:'todo 1',price:55},
    {date:new Date(),description:'todo 2',price:44},
    {date:new Date(),description:'todo 3',price:88}
  ]
  return (
    <Expenses expenses={expenses}/>
  );
}

export default App;
