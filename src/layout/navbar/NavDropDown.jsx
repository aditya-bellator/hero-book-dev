import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { StyledMenuItem } from './styled';
import { Link } from 'react-router-dom';
import { accountStatement, currentBet } from '../../routes/PagesUrl';

const NavDropDown = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <div>
         <Button
        id="basic-button"
        sx={{color:"white"}}
        aria-controls={open ? 'basic-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      >
        Demo <KeyboardArrowDownIcon/>
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          'aria-labelledby': 'basic-button',
        }}
      >
       <Link to={accountStatement}>
       <StyledMenuItem onClick={handleClose}>Account Statement</StyledMenuItem>
       </Link> 
       <Link to={currentBet}>

        <StyledMenuItem onClick={handleClose}>Current Bet</StyledMenuItem>
       </Link>
        <StyledMenuItem onClick={handleClose}>Casino Result</StyledMenuItem>
        <StyledMenuItem onClick={handleClose}>Set Button Value</StyledMenuItem>
        <hr style={{height: "1px" ,borderTop: "1px solid rgba(0, 0, 0, .15)"}}/>
        <StyledMenuItem onClick={handleClose}>SignOut</StyledMenuItem>
      </Menu>
    </div>
  )
}

export default NavDropDown