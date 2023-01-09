import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import RateReviewIcon from "@mui/icons-material/RateReview";
import { NavLink } from "react-router-dom";
import LoginModal from "./LoginModal";
import { useDispatch, useSelector } from "react-redux";
import { UserLogout } from "../redux_Store/actions/UserAction";
const pages = [
  { name: "Home", link: "/" },
  { name: "About", link: "/About" },
  { name: "Restaurents", link: "/Restaurents" },
  { name: "Vloggers", link: "/Vloggers" },
  { name: "Events", link: "/Events" },
  { name: "Recipies", link: "/Recipies" },
];

const logInUserList = ["Profile", "Settings", "Logout"];

function Header() {
  const dispatch = useDispatch();
  const { isAuthenticated } = useSelector((state) => state.user);
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const [loginModal, setOpenLoginModal] = React.useState(false);

  const openLoginModal = () => setOpenLoginModal(true);
  const closeLoginModal = () => setOpenLoginModal(false);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const handleLogout = (list) => {
    if (list === "Logout") {
      dispatch(UserLogout());
      handleCloseUserMenu();
    }
  };

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(20px)",
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <RateReviewIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 7,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".2rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            Review❤️Food
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
                "& .MuiPaper-root": {
                  backgroundColor: "rgba(0,0,0,0.5)",
                  backdropFilter: "blur(10px)",
                  color: "white",
                  width: "100%",
                  marginTop: "40px",
                },
                "& .MuiMenuItem-root": {
                  width: "100%",
                  textAlign: "center",
                  height: "80px",
                },
                "& .MuiTypography-root": {
                  width: "100%",
                  textAlign: "center",
                },
                "& .MuiMenuItem-root:hover ": {
                  backgroundColor: "rgba(0,0,0,0.4)",
                },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography
                    textAlign="center"
                    variant="h6"
                    sx={{
                      color: "grey.100",
                    }}
                  >
                    <NavLink to={page.link}>{page.name}</NavLink>
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          <NavLink to={"/"}>
            <Typography
              variant="h5"
              noWrap
              component="a"
              href=""
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Review❤️Food
            </Typography>
          </NavLink>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page.name}
                onClick={handleCloseNavMenu}
                sx={{
                  my: 2,
                  color: "white",
                  display: "block",
                  gap: 2,
                  "&:hover": {
                    color: "grey",
                  },
                  fontWeight: "300",
                  mr: 2,
                  letterSpacing: ".1rem",
                  // fontFamily: "inherit",
                  textTransform: "capitalize",
                }}
              >
                <NavLink to={page.link}>{page.name}</NavLink>
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            {!isAuthenticated ? (
              <>
                <Button onClick={openLoginModal} sx={{ color: "white" }}>
                  Log in
                </Button>
                {/* <Button onClick={openRegisterModal} sx={{ color: "white" }}>
                  Register
                </Button> */}
                <LoginModal open={loginModal} handleClose={closeLoginModal} />
              </>
            ) : (
              <>
                <Tooltip title="Open settings">
                  <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                    <Avatar
                      alt="Remy Sharp"
                      src="/static/images/avatar/2.jpg"
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {logInUserList.map((list) => (
                    <MenuItem
                      key={list}
                      onClick={() => {
                        handleLogout(list);
                      }}
                    >
                      <Typography textAlign="center" on>
                        {list}
                      </Typography>
                    </MenuItem>
                  ))}
                </Menu>
              </>
            )}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default Header;
