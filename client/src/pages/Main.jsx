import Header from '../components/Header.jsx'
import Sidebar from '../components/SideBar.jsx'
import { useState } from 'react';
import Emails from '../components/Emails.jsx'
function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);
  
    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
  return (
    <div>
        <Header toggleDrawer={toggleDrawer} />
        <Sidebar openDrawer={openDrawer}/>
        <Emails openDrawer={openDrawer}/>  
    </div>
   
  )
}

export default Main
