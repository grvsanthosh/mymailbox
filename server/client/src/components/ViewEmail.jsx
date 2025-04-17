import {useOutletContext, useLocation} from 'react-router-dom'
import {Box,Typography, styled} from '@mui/material'
import {ArrowBack, Delete} from '@mui/icons-material'
import {emptyProfilePic} from '../constants/tabConstant.js'
import {API_URLS} from '../services/api.urls.js'
import useApi from '../hooks/useApi.js'

const IconWrapper = styled(Box)({
  padding: 15
})

const Subject = styled(Typography)({
  fontSize: 22,
  margin: '10px 0 20px 75px',
  display: 'flex'

})

const Indicator = styled(Typography)({
  fontSize: 12,
  background: '#ddd',
  color: '#222',
  padding: '2px 4px',
  marginLeft: 6,
  borderRadius:4,
  alignSelf: 'center'
})

const Container = styled(Box)({
  marginLeft: 15,
  width: '100%',
  '& > div': {
    display:'flex',
    '& > p > span': {
      fontSize:12,
      color: '#5E5E5E'
    }
  }
  
})

const Image = styled('img')({
  borderRadius: '50%',
  width:40,
  height:40,
  margin: '5px 10px 0 10px',
  background: '#cccccc'
})

const Datevalue = styled(Box)({
  margin: '0 50px 0 auto',
  fontSize: 12,
  color: '#5E5E5E'
})


function ViewEmail() {
    const {openDrawer} = useOutletContext();
    const { state } = useLocation();
    const {email} = state;
    const moveEmailsToBinService = useApi(API_URLS.moveEmailsToBin)
    const deleteEmail = ()=>{
      moveEmailsToBinService.call([email._id])
      window.history.back()
    }
  return (
    <Box style={openDrawer ? {marginLeft:250}: {width:"100%"}}>
      <IconWrapper>
        <ArrowBack onClick={()=>{window.history.back()}} color='action' fontSize='small' />
        <Delete fontSize='small' color='action' style={{marginLeft:40}} onClick={()=>{deleteEmail()}}/>
      </IconWrapper>
      <Subject>
        {email.Subject} <Indicator component='span'>Inbox</Indicator>
      </Subject>
      <Box style={{display: 'flex'}}>
        <Image src={emptyProfilePic} alt='dp' />
        <Container>        
          <Box>
            <Typography>{email.Name}
            <Box component='span'>&nbsp;&#60;{email.To}&#62;&nbsp;</Box>
            </Typography>
            <Datevalue>
              {(new window.Date(email.Date)).getDate()}&nbsp;
              {(new window.Date(email.Date)).toLocaleString('default', {month: 'long' })}&nbsp;
              {(new window.Date(email.Date)).getFullYear()}
            </Datevalue>
          </Box>
          <Typography style={{marginTop:20}}>{email.Body}</Typography>
        </Container>
      </Box>
    </Box>
  )
}

export default ViewEmail
