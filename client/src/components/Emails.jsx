import PropTypes from 'prop-types'; 


function Emails({openDrawer}) {
    console.log(openDrawer);
  return (
    <div style={openDrawer ? {marginLeft:'250px',width:"100%"}: {width:"100%"}}>
      Hello from emails
    </div>
  )
}

Emails.propTypes = {
  openDrawer: PropTypes.bool.isRequired
}
export default Emails
