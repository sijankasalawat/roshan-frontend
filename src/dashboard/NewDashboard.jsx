import React, { useState } from 'react';
import './Sidebar.css'; // Import your CSS file if you have one
import { Dashboard } from './dashboard';
import Bluebook from './Bluebook';
import License from './License';
import ViewFine from './ViewFine';



const Sidebar = ({ setSelectedItem }) => {

const liStyle ={
  backgroundColor:"white",padding:'0.5rem',marginLeft:"-20px",borderRadius:"10px"
}

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const handleToggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const handleItemClick = (item) => {
    setSelectedItem(item);

    setIsSidebarOpen(false);
  
    
  };

  return (
    <div className={`sidebar ${isSidebarOpen ? 'open' : ''}`} style={{backgroundColor:"#E1D0C0"}}>
      <div className="logo-details">
        <h1>Drivers App</h1>
        <svg  id="btn" onClick={handleToggleSidebar} xmlns="http://www.w3.org/2000/svg" width="30" height="30" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"/>
</svg>
       
      </div>
      <div>

      <ul className="nav-list ">
     
        <li onClick={() => handleItemClick('dashboard')} className='aside-li pe-auto' style={liStyle}>Home</li>
        <li onClick={() => handleItemClick('bluebook')} className='aside-li pe-auto' style={liStyle}>Bluebook</li>
        <li onClick={() => handleItemClick('License')} className='aside-lipe-auto'style={liStyle} >License</li>
        <li onClick={() => handleItemClick('View Fine')} className='aside-li pe-auto' style={liStyle}>View Fine</li>
      </ul>
      </div>
   
    </div>
  );
};

const DashboardSection = ({ selectedItem }) => (
  <section className="home-section">
    {selectedItem === 'dashboard' && <Dashboard />}
    {selectedItem === 'Bluebook' && <Bluebook/>}
    {selectedItem === 'License' && <License/>}
    {selectedItem === 'View Fine' && <ViewFine/>}
  
  </section>
);

const MainDashboard = () => {
  const [selectedItem, setSelectedItem] = useState('dashboard');

  return (
    <div className="app-container">
      <Sidebar setSelectedItem={setSelectedItem} />
      <DashboardSection selectedItem={selectedItem} />
    </div>
  );
};

export default MainDashboard;
