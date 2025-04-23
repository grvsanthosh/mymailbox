import Header from '../components/Header.jsx'
import Sidebar from '../components/SideBar.jsx'
import { useState, Suspense} from 'react';
import {Outlet} from 'react-router-dom';
import SuspenseLoader from '../components/common/SuspenseLoader.jsx'
import { Box} from '@mui/material'
function Main() {
  const [openDrawer, setOpenDrawer] = useState(true);
  
    const toggleDrawer = () => {
        setOpenDrawer(prevState => !prevState);
    }
  return (
    <>
        <Header toggleDrawer={toggleDrawer} />
        <Box>
          <Sidebar openDrawer={openDrawer}/>
          <Suspense  fallback={<SuspenseLoader />}>
            <Outlet context={{openDrawer}} />            
          </Suspense>
        </Box>
    </>
   
  )
}

export default Main
