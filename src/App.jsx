import './App.css';
import Title from './components/Title';
import FormComponent from './components/Form';
import Transaction from './components/transaction';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';

function App() {

  const [initItem, setInitItem] = useState([])

  const onAddNewItem = (newItem) => {

    console.log("ข้อมูลจาก Form ", newItem)

    setInitItem((prevItem) => {
      return [...prevItem, newItem]
    })
  }

  return (
    <>
    <BrowserRouter>
    <div className="container">
        <div>

          <ul>
            <li>
              <Link to="/">หน้าแรก</Link>
            </li>

            <li>
              <Link to="/form">หน้าบันทึกข้อมูล</Link>
            </li>

            <li>
              <Link to="/detail">หน้ารายการ</Link>
            </li>

          </ul>

          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/form" element={<FormComponent onAddItem={onAddNewItem} />} />
            <Route path="/detail" element={<Transaction list={initItem} />} />
          </Routes>
          
        </div>
    </div>
    </BrowserRouter>
    </>
  );
}

export default App;