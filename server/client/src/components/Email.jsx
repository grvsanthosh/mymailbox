import {Box, Typography,Checkbox,styled} from '@mui/material'
import {Star,StarBorder} from '@mui/icons-material';
import PropTypes from 'prop-types'; 
import { useNavigate } from 'react-router-dom';
import {routes} from '../routes/routes.js'
import useApi from '../hooks/useApi.js'
import {API_URLS} from '../services/api.urls.js'
const Wrapper = styled(Box)({
  padding:'0 0 0 10px',
  background: '#f2f6fc',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  '& > div': {
    display: 'flex',
    width: '100%',
    '& > p': {
      fontSize: 14
    }
  }
})

const Indicator = styled(Typography)({
  fontSize: '12px !important',
  background: '#ddd',
  color: '#222',
  padding: '0 4px',
  borderRadius: 4,
  marginRight: 6
 })

 const Date = styled(Typography)({
  marginLeft: 'auto',
  marginRight: 20,
  fontSize: 12,
  color: '#5F6368'

 })

function Email({email,selectedEmails,setRefreshScreen,setSelectedEmails}) {
  
  
  const navigate = useNavigate();
  const toggleStarredService = useApi(API_URLS.toggleStarredMails)
  const toggleStarredMails = () =>{
    toggleStarredService.call({id: email._id, value: !email.Starred})
    setRefreshScreen(prev => !prev)    
  }
  const onValueChange = ()=>{
    if(selectedEmails.includes(email._id)){
      setSelectedEmails(prev => prev.filter(id => id != email._id))
    }
    else{
      setSelectedEmails(prev => [...prev, email._id])
    }
  }

  return (
    <Wrapper>
      <Checkbox  
      size='small'
      checked={selectedEmails.includes(email._id) }
      onChange={()=>{onValueChange()}}
      />
      {
        email.Starred ?
          <Star fontSize='small' style={{marginRight:10, color: '#FFBF00'}} onClick={()=>{toggleStarredMails()}} />
          :
          <StarBorder fontSize='small' style={{marginRight:10}} onClick={()=>{toggleStarredMails()}}/>
      }
      
      <Box onClick={()=> navigate(routes.view.path, {state: {email: email}})} >
        <Typography style={{width:200, overflow: 'hidden'}}>
            {email.Name}
        </Typography>
        <Indicator>Inbox</Indicator>
        <Typography>{email.Subject} {email.Body && '-'} {email.Body}</Typography>
        <Date>
          {(new window.Date(email.Date)).getDate()}&nbsp;
          {(new window.Date(email.Date)).toLocaleString('default', {month: 'long' })}
        </Date>
      </Box>
    </Wrapper>
  )
}

Email.propTypes = {
  email: PropTypes.object.isRequired,
  selectedEmails: PropTypes.array.isRequired,
  setRefreshScreen:PropTypes.func.isRequired,
  setSelectedEmails:PropTypes.func.isRequired
}


export default Email
