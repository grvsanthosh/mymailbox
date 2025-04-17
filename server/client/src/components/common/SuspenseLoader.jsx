import {CircularProgress, Box,Typography} from '@mui/material'

function SuspenseLoader() {
  return (
   <Box>
     <CircularProgress color="secondary" size={50} />
     <Typography>Loading...</Typography>
   </Box>
  )
}

export default SuspenseLoader
