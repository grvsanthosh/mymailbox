import {Drawer, styled} from '@mui/material'
import PropTypes from 'prop-types'; 
import SideBarContent from './SideBarContent.jsx'

const StyledDrawer = styled(Drawer)`
    margin-top: 0px;
`

const SideBar = ({openDrawer})=> {

  return (
        <StyledDrawer 
          anchor='left'
          open={openDrawer}          
          hideBackdrop={true}
          ModalProps={{
            keepMounted: true,
          }}
          variant="persistent"
          sx = {{
            '& .MuiPaper-elevation' :{
              marginTop:"64px",
              width:250,
              backgroundColor:"#FFFAFA",
              border:"none",
              height:'calc(100vh - 75px)',
              
            }
          }}
          >
          <SideBarContent />
            
          </StyledDrawer>

      )
}

SideBar.propTypes = {
  openDrawer: PropTypes.bool.isRequired  
};

export default SideBar