
import PropTypes from 'prop-types'; 
import {Box,Typography, styled,Divider} from '@mui/material'

const Component = styled(Box)({
    display:'flex',
    alignItems: 'center',
    flexDirection: 'column',
    marginTop: 50,
    opacity:'0.5',
    width: '100%'
})

const StyledDivider = styled(Divider)({
    width: '100%',
    marginTop:100,
    
})

function NoMails({message}) {
  return (
    <Component>
      <Typography>{message.heading}</Typography>
      <Typography>{message.subHeading}</Typography>
      <StyledDivider />

    </Component>
  )
}

NoMails.propTypes = {
    message: PropTypes.object.isRequired,
  
}
export default NoMails
