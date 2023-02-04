import { useState } from 'react';
import MainSection from './MainSection';
import './App.css';
import SideNav from './SideNav';
import pic from './computerpng.png'
export default function App() {
  const [active, setActive] = useState("INBOX")
  return (
    <div id='main'>
      <h1 className='header'>Add TODO</h1>
        <img src={pic} className='pic'/>
      <header>
        <div className="row">
          <div className="col-md-2">
            <SideNav change={setActive} />
          </div>
          <div className="col-md-10">
            <MainSection active={active} />
          </div>
        </div>
      </header>
    </div>
  );
}