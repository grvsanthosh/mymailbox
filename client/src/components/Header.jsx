
import PropTypes from 'prop-types'; 
import {AppBar, Toolbar, styled, InputBase, Box} from '@mui/material';
import {Menu as MenuIcon,Search as SearchIcon,Tune as TuneIcon,HelpOutline as HelpOutlineIcon,
  SettingsOutlined as SettingsOUtlinedIcon, AppsOutlined as AppsOutlinedIcon,
  AccountCircleOutlined as AccountCircleOutlinedIcon} from '@mui/icons-material';
import {gmailLogo} from '../constants/tabConstant.js'


const StyledAppBar = styled(AppBar)({
  background: "#FFFAFA",
  boxShadow:"none",
  color:"#696969"
}) 

const SearchWrapper = styled(Box)({
  background: "#EAF1F8",
  marginLeft: 80,
  borderRadius: 20,
  minWidth:690,
  maxWidth:720,
  height: 45,
  display: 'flex',
  alignItems: 'center',
  justifyContent:'space-between',
  paddingLeft: 15,
  paddingRight:15,
  '& > div' : {
    width: "100%",
    padding:"0px 15px"
  },
  '& > svg' : {
    cursor: 'pointer'
  }
 
})

const OptionsWrapper = styled(Box)({
  
  width: "100%",
  display: 'flex',
  justifyContent: 'end',
  alignItems: 'center',
  '& > svg': {
    marginLeft: 10,
    cursor: 'pointer'
  }
 
})


function Header({ toggleDrawer }) {
      
  return (
     <StyledAppBar position="static">
       <Toolbar>
        <MenuIcon fontSize="medium" style={{cursor:"pointer"}} onClick={toggleDrawer}/>        
        <img src={gmailLogo} alt="logo" style={{width:35,marginLeft:20,cursor:"pointer"}}/>
        <h2 style={{marginLeft:10, cursor:"pointer"}}>Gmail</h2>
        <SearchWrapper>
          <SearchIcon fontSize="medium" color="action"/>
          <InputBase placeholder="search mail"/>
          <TuneIcon fontSize="medium" color="action" />            
        </SearchWrapper>
        <OptionsWrapper>
          
          <HelpOutlineIcon fontSize="medium" color="action"/>
          <SettingsOUtlinedIcon fontSize="medium" color="action"/>
          <AppsOutlinedIcon fontSize="medium" color="action" />
          <AccountCircleOutlinedIcon sx={{fontSize:40}} color="action" />
         
        </OptionsWrapper>
       </Toolbar>
     </StyledAppBar>  
  )
}

Header.propTypes = {
  toggleDrawer : PropTypes.func.isRequired,
}
export default Header
