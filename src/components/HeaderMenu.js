import * as React from 'react';
import PopperUnstyled from '@mui/base/PopperUnstyled';
import ClickAwayListener from '@mui/base/ClickAwayListener';
import { styled } from '@mui/joy/styles';
import Button from '@mui/joy/Button';
import MenuList from '@mui/joy/MenuList';
import MenuItem from '@mui/joy/MenuItem';
import WidgetsIcon from '@mui/icons-material/Widgets';
import { Link } from "react-scroll";

const Popup = styled(PopperUnstyled)({
  zIndex: 1000,
});

export default function HeaderMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleListKeyDown = (event) => {
    if (event.key === 'Tab') {
      setAnchorEl(null);
    } else if (event.key === 'Escape') {
      anchorEl?.focus();
      setAnchorEl(null);
    }
  };
  const links = ["About", "Skills", "Experience", "Projects"];

  return (
    <div>
      <Button
        id="composition-button"
        aria-controls={open ? 'composition-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="outlined"
        color="neutral"
        onClick={handleClick}
        sx={{ borderRadius: 0 }}
      >
        <WidgetsIcon color='primary'/>
      </Button>
      <Popup
        role={undefined}
        id="composition-menu"
        open={open}
        anchorEl={anchorEl}
        disablePortal
        modifiers={[
          {
            name: 'offset',
            options: {
              offset: [0, 4],
            },
          },
        ]}
      >
        <ClickAwayListener onClickAway={handleClose}>
          <MenuList
            variant="outlined"
            onKeyDown={handleListKeyDown}
            sx={{ boxShadow: 'md', bgcolor: 'background.body' }}
          >
           {links.map((link, index)=>(
              <MenuItem key={index} component={Link} to={link} smooth={true} duration={500}>{link}</MenuItem>
           ))} 
            {/* <MenuItem onClick={handleClose}>Skills</MenuItem>
            <MenuItem onClick={handleClose}>Experience</MenuItem>
            <MenuItem onClick={handleClose}>Projects</MenuItem> */}
          </MenuList>
        </ClickAwayListener>
      </Popup>
    </div>
  );
}