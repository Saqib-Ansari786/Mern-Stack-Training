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

export default function RegisterModal(props) {
  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
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
            <Button sx={{}}>Login</Button>
            <Button>Sign Up</Button>
          </ButtonGroup>
          <Button
            onClick={props.handleClose}
            sx={{ mt: -4, mr: -6, float: "right" }}
            color="inherit"
          >
            <CloseIcon color="white" />
          </Button>

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
        </Box>
      </Modal>
    </div>
  );
}
