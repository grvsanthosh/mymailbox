import {useState} from 'react'
import {Box,Button,styled, List, ListItem} from '@mui/material'
import { CreateOutlined } from '@mui/icons-material'
import {SIDEBAR_DATA} from '../config/SideBarConfig.js'
import ComposeMail from './ComposeMail.jsx'
import { NavLink, useParams } from 'react-router-dom';
import { routes } from '../routes/routes';

const ComposeButton = styled(Button)({
    background:"#c2e7ff",
    color:"#001d35",
    padding:16,
    borderRadius:16,
    minWidth:100,
    textTransform:"none",
    fontWeight:"bold",
    ':hover' :{
        boxShadow:"2px 2px 5px #696969"
    }
})

const Container = styled(Box)({
    padding:12,
    '& > ul' :{
        padding: "10px 0 0 5px",
        fontSize: 14,
        fontWeight:500,
        cursor:"pointer",
        '& > a' : {
            textDecoration: 'none',
            color: 'inherit',            
            '&:hover' : {
                color: '#0B57D0',               
            }
        }
    },
    '& > ul > a > li > svg':{
        marginRight : 20
    }
})

function SideBarContent() {
    const [openDialog, setOpenDialog] = useState(false);
    const { type } = useParams()
    const onComposeClick = ()=>{
        setOpenDialog(true);
    }
  return (
    <Container>
        <ComposeButton onClick={()=>{onComposeClick()}}>
            <CreateOutlined sx={{marginRight:"10px"}}/> Compose
        </ComposeButton>
        <List>
         {
                SIDEBAR_DATA.map((data) =>(
                    <NavLink key={data.name} to={`${routes.emails.path}/${data.name}`}>                    
                        <ListItem  style={type === data.name.toLowerCase() ? {
                            backgroundColor: '#d3e3fd',
                            borderRadius: '16px 16px 16px 16px'
                        } : {}} >
                            <data.icon fontSize="small" />{data.title}
                        </ListItem>
                    </NavLink>
                ))
            }
        </List>
        <ComposeMail  openDialog={openDialog} setOpenDialog={setOpenDialog} />
    </Container>
  )
  
} 

export default SideBarContent
