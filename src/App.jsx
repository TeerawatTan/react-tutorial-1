import './App.css';
import Title from './components/Title';
import FormComponent from './components/Form';
import Transaction from './components/transaction';
import { Routes, Route, Link, BrowserRouter } from 'react-router-dom';
import { useState } from 'react';
import ErrorPage from './ErrorPage';
import Login from './components/Login/Login';
import Profile from './components/Login/Profile';
import Chat from './components/Chat/Chat';

function App() {

  const [initItem, setInitItem] = useState([])

  const onAddNewItem = (newItem) => {

    setInitItem((prevItem) => {
      return [...prevItem, newItem]
    })
  }

  return (
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

            <li>
              <Link to="/login">เข้าสู่ระบบ</Link>
            </li>
            <li>
              <Link to="/profile">ข้อมูลส่วนตัว</Link>
            </li>
            <li>
              <Link to="/chat">Chat</Link>
            </li>
          </ul>

          <Routes>
            <Route path="/" element={<Title />} />
            <Route path="/form" element={<FormComponent onAddItem={onAddNewItem} />} />
            <Route path="/detail" element={<Transaction list={initItem} />} />
            <Route path='/login' element={<Login />} />
            <Route path='/profile' element={<Profile />} />
            <Route path='/chat' element={<Chat />} />
            <Route path='/*' element={<ErrorPage />} />
          </Routes>
          
        </div>
    </div>
    </BrowserRouter>
  );
}

export default App;