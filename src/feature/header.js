import * as React from 'react';
import Link from '@mui/material/Link';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Hidden from '@mui/material/Hidden';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import propTypes from 'prop-types';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

const Header = () => {
const drawerWidth = 240;

const navigationLinks = [
  {name:"About", href:""},
  {name:"Profile", href:""},
  {name:"Contact", href:""},
];

//function DrawerAppBar(props){
 // const {window} = props;
  const [mobileOpen, setMobileOpen] = React.useState(false)

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  }
//}

const drawer = (
    <Box onClick={handleDrawerToggle} sx={{textAlign:'center'}}>
      <Typography>
        <Avatar
 sx = {{marginRight: "auto",
                   color:"black",
                   border: '0.1px solid black',
                   bgcolor:"white"
                  }}
        >HK</Avatar>
  </Typography>
      <Divider/>
      <List>
        {navigationLinks.map((item)=>(
          <ListItem key={item.name} disablePadding>
          <ListItemButton sx={{textAlign:'center'}}>
          <ListItemText primary={item.name}/>
          </ListItemButton>
          </ListItem>
        ))}
  </List>
    </Box>
);

//const container =/* window !== undefined ?*/ () => window().document.body /*: undefined*/;



  return(
    <Box sx={{display:'flex'}}>
    <AppBar position="sticky" sx = {{bgcolor:"white"}}>
      <Container>
         <ToolBar>
           <IconButton
             color="inherit"
             aria-label="open drawer"
             edge="start"
             onClick={handleDrawerToggle}
    sx={{mr:2, display:{sm:'none'}}}
           >
             <MenuIcon/>
    </IconButton>
          <Avatar
            sx = {{marginRight: "auto",
                   color:"black",
                   border: '0.1px solid black',
                   bgcolor:"white"
                  }}
          >HK</Avatar>
    {navigationLinks.map((item) =>
      (<Link
         key = {item.name}
         sx = {{marginRight: 20}}
         color="textPrimary"
         underline="none"
         href={item.href}>{item.name}</Link>)
    )}
    </ToolBar>
    </Container>
    </AppBar>
      <Box component = "nav">
        <Drawer
         // container = {container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true,
          }}
          sx={{
            display:{xs:'block', sm:'none'},
            '& .MuiDrawer-paper':{boxSizing:'border-box', width:drawerWidth}
          }}
        >
          {drawer}
    </Drawer>
    </Box>
    </Box>
  )
}

export default Header
