import './App.css';
import Title from './components/Title';
import FormComponent from './components/Form';
import Detail from "./components/Detail";
import Transaction from './components/transaction';
import { useState } from 'react';

function App() {

const [initItem,setInitItem] = useState([])

  const onAddNewItem = (newItem) => {

    console.log("ข้อมูลจาก Form ", newItem)

    setInitItem((prevItem) => {
      return [...prevItem, newItem]
    })
  }

  return (
    <div className="container">
      <Title />
      <FormComponent onAddItem={onAddNewItem}/>
      <Detail />
      <Transaction list={initItem}/>
    </div>
  );
}

export default App;