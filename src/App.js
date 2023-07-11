import { useState } from "react"
import './App.css';
import FormComponent from './components/Form';
import Transaction from './components/transaction';

function App() {

  const list = [
    {
      title: "ค่าขนม",
      price: Number(500)
    }
  ]

  const [items,setItems] = useState(list)

  const onAddItem = (newItem) => {

    console.log("ข้อมูลจาก Form "+newItem)

    setItems((prevItem) => {
      return [...prevItem, newItem]
    })
  }

  return (
    <div className="App">
      <FormComponent onAddData={onAddItem}/>
      <Transaction data={items}/>
    </div>
  );
}

export default App;