import {Dialog, Box, Typography, styled, InputBase, TextField, Button} from '@mui/material'
import {Close, DeleteOutline} from '@mui/icons-material'
import {useState} from 'react'
import PropTypes from 'prop-types'; 
import useApi from '../hooks/useApi.js'
import {API_URLS} from '../services/api.urls.js'

const dialogStyle = {
  width: '80%',
  height:'90%',
  maxWidth: '100%',
  maxHeight: '100%',
  boxShadow: 'none',
  borderRadius: '10px 10px 0 0 '
}

const Header = styled(Box)({
  display: 'flex',
  justifyContent: 'space-between',
  padding : '10px 15px',
  background: '#f2f6fc',
  '& > p' : {
      fontSize: 14,
      fontWeight: 500
  },
  '& > svg:hover' : {
      cursor: 'pointer'
  }
})

const RecipientWrapper  = styled(Box)({
  display:'flex',
  flexDirection: 'column',
  padding:' 0 15px',
  '& > div' : {
      fontSize: 14,
      borderBottom: '1px solid #F5F5F5',
      marginTop: 10
  }
})

const Footer = styled(Box)({
  display:'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '10px 15px',
  '& > svg:hover' : {
      cursor: 'pointer'
  }
})

const SendButton = styled(Button)({
  background: '#0B57D0',
  color: '#fff',
  textTransform: 'none',
  fontSize: 14,
  fontWeight: 500,
  borderRadius: 20,
  width: 100
})

function ComposeMail({ openDialog, setOpenDialog }) {
  const [data, setData] = useState({})
  const sentEmailService = useApi(API_URLS.saveSentEmail)
  const saveDraftService = useApi(API_URLS.saveDraftEmails)


  const config = {
    Host : "smtp.elasticemail.com",
    Username : import.meta.env.VITE_USERNAME,
    Password : import.meta.env.VITE_PASSWORD,   
    port: '2525'       
   
}

const onValueChange = (e)=>{
    setData({...data,[e.target.name]: e.target.value})
    
}

const sendEmail = (e)=>{
  e.preventDefault();
  if(window.Email){
      window.Email.send({
          ...config,
          To : data.to,
          From : "santhosheminent@gmail.com",
          Subject : data.subject,
          Body : data.body
        }).then(
          message => alert(message)
        )
  }
  const payload = {
    To : data.to,
    From : "santhosheminent@gmail.com",
    Subject : data.subject,
    Body : data.body,
    Date: new Date(),
    Image: '',
    Name: 'sample test mail NAME',
    Starred: false,
    Type: 'sent'
  }

  sentEmailService.call(payload)

  if(!sentEmailService.error){
    setOpenDialog(false);
    setData({})
  }  
  
}

const closeComposeMail = (e) => {
  e.preventDefault();  
   const payload = {
    To : data.to,
    From : "santhosheminent@gmail.com",
    Subject : data.subject,
    Body : data.body,
    Date: new Date(),
    Image: '',
    Name: 'sample test mail NAME',
    Starred: false,
    Type: 'drafts'
  }

  saveDraftService.call(payload)

  if(!saveDraftService.error){
    setOpenDialog(false);
    setData({})
  }  

}

  return (
   <Dialog 
   open={openDialog}
   PaperProps={{ sx: dialogStyle }}>
   <Header>
      <Typography>New Message</Typography>
      <Close fontSize="small" onClick={(e) => closeComposeMail(e)} />
   </Header>
  <RecipientWrapper>
      <InputBase placeholder='Recipients' name="to" onChange={(e) => onValueChange(e)} value={data.to} />
      <InputBase placeholder='Subject' name="subject" onChange={(e) => onValueChange(e)} value={data.subject}  />
  </RecipientWrapper>
  <TextField 
      multiline
      rows={16.7}
      sx={{ '& .MuiOutlinedInput-notchedOutline': { border: 'none' } }}
      name="body"
      onChange={(e) => onValueChange(e)}
      value={data.body}
  />
  <Footer>
      <SendButton onClick={(e) => sendEmail(e)}>Send</SendButton>
      <DeleteOutline onClick={() => setOpenDialog(false)} />
  </Footer>
    </Dialog>
  )
}

ComposeMail.propTypes = {
  openDialog: PropTypes.bool.isRequired,
  setOpenDialog: PropTypes.func.isRequired
}

export default ComposeMail
