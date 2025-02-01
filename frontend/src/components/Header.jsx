import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import MenuIcon from "@mui/icons-material/Menu";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { grey } from "@mui/material/colors";
import LoginIcon from "@mui/icons-material/Login";
import PersonIcon from "@mui/icons-material/Person";
import ApartmentIcon from "@mui/icons-material/Apartment";
import LogoutIcon from "@mui/icons-material/Logout";
import logo from "../assets/logo.svg";
import { Link } from "@mui/material";
const drawerWidth = 240;
const navItems = ["Login", "Register", "My Rooms", "Sign Out"];

const RightNavItems = [
  { label: "Login", icon: <LoginIcon /> },
  { label: "Register", icon: <PersonIcon /> },
  { label: "My Rooms", icon: <ApartmentIcon /> },
  { label: "Sign Out", icon: <LogoutIcon /> },
];

const LeftNavItems = ["Rooms", "Bookings", "Add Room"];

function Header(props) {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box
      onClick={handleDrawerToggle}
      sx={{
        textAlign: "center",
        background: "grey[200]",
        height: "100%",
        color: grey[900],
      }}
    >
      <Typography variant="h6" sx={{ my: 2 }}>
        MUI
      </Typography>
      <Divider />
      <List sx={{ color: grey[900], border: "1px solid red" }}>
        {navItems.map((item) => (
          <ListItem key={item} disablePadding sx={{ color: grey[900] }}>
            <ListItemButton sx={{ textAlign: "center", color: grey[900] }}>
              <ListItemText primary={item} sx={{ color: grey[900] }} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <>
      <CssBaseline />
      <AppBar component="nav" sx={{ background: grey[200], color: grey[900] }}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>
          <Box sx={{ flexGrow: 1, display: { xs: "none", sm: "flex" } }}>
            <Link href="/" alignContent="center">
              <img
                src={logo}
                alt="Bookit"
                style={{ width: "30px", height: "30px" }}
              />
            </Link>
            {LeftNavItems.map((item) => (
              <Button key={item} sx={{ color: grey[900] }}>
                {item}
              </Button>
            ))}
          </Box>
          <Box
            sx={{
              display: { xs: "none", sm: "block" },
            }}
          >
            {RightNavItems.map((item) => (
              <Button
                key={item}
                startIcon={item.icon}
                sx={{ color: grey[900] }}
              >
                {item.label}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
      <nav>
        <Drawer
          container={container}
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </nav>
    </>
  );
}

Header.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default Header;
