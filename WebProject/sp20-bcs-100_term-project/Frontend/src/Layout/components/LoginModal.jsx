import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Modal from "@mui/material/Modal";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import CloseIcon from "@mui/icons-material/Close";
import {
  ButtonGroup,
  IconButton,
  InputAdornment,
  TextField,
} from "@mui/material";

import { useDispatch } from "react-redux";
import { UserAction } from "../redux_Store/actions/UserAction";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "100%",
    sm: 500,
  },
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  borderRadius: 3,
  p: 4,
  sm: {
    width: 400,
    px: 4,
  },
};

export default function LoginModal(props) {
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = React.useState(false);
  const [email, setEmail] = React.useState("saqib");
  const [password, setPassword] = React.useState("");

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  const [login, setLogin] = React.useState(true);

  const RegisterModalOn = () => {
    setLogin(false);
  };

  const LoginModalOn = () => {
    setLogin(true);
  };

  const loginInputHandler = (e) => {
    if (e.target.id === "email") {
      setEmail(e.target.value);
    } else if (e.target.id === "password") {
      setPassword(e.target.value);
    }
  };

  const LoginButtonHandler = () => {
    dispatch(UserAction(email, password));
  };

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <ButtonGroup
            fullWidth
            variant="contained"
            sx={{ mt: -7, float: "left" }}
          >
            <Button onClick={LoginModalOn}>Login</Button>
            <Button onClick={RegisterModalOn}>Sign Up</Button>
          </ButtonGroup>
          <Button
            onClick={props.handleClose}
            sx={{ mt: -4, mr: -6, float: "right" }}
            color="inherit"
          >
            <CloseIcon color="white" />
          </Button>

          {login ? (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: 5 }}
              >
                Log In to Review❤️Food
              </Typography>
              <TextField
                fullWidth
                required
                id="email"
                label="Email"
                sx={{ mt: 3 }}
                onChange={(e) => {
                  loginInputHandler(e);
                }}
              />

              <TextField
                fullWidth
                id="password"
                type={showPassword ? "text" : "password"}
                required
                label="Password"
                onChange={(e) => {
                  loginInputHandler(e);
                }}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ my: 1 }}
              />
              <Typography color={"primary"} sx={{ textAlign: "end" }}>
                Forgot Password?
              </Typography>
              <Button
                variant="contained"
                fullWidth
                sx={{ mt: 2 }}
                onClick={() => {
                  LoginButtonHandler();
                }}
              >
                Login
              </Button>
              <Typography sx={{ mt: 2 }}>
                Don't have an account?{" "}
                <Typography
                  color={"primary"}
                  sx={{
                    display: "inline",
                    cursor: "pointer",
                    fontWeight: "bold",
                  }}
                >
                  Sign Up
                </Typography>
              </Typography>
            </>
          ) : (
            <>
              <Typography
                id="modal-modal-title"
                variant="h6"
                component="h2"
                sx={{ mb: 5 }}
              >
                Register Here
              </Typography>
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Name"
                sx={{ mt: 3 }}
              />
              <TextField
                fullWidth
                required
                id="outlined-required"
                label="Email"
                sx={{ mt: 3 }}
              />
              <TextField
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                required
                label="Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ my: 1 }}
              />
              <TextField
                fullWidth
                id="outlined-adornment-password"
                type={showPassword ? "text" : "password"}
                required
                label="Confirm Password"
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
                sx={{ my: 1 }}
              />
              <Button variant="contained" fullWidth sx={{ mt: 2 }}>
                Register
              </Button>
            </>
          )}
        </Box>
      </Modal>
    </div>
  );
}
