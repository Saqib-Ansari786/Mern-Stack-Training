import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { CardActionArea } from "@mui/material";
import { Link } from "react-router-dom";

export default function BasicCard(props) {
  return (
    <Link to={props.link}>
      <Card
        elevation={12}
        sx={{
          maxWidth: 345,
          color: "white",
          backgroundColor: "rgba(0,0,0,0.8)",
          // backdropFilter: "blur(20px)",
          backgroundBlendMode: "darken",
          borderRadius: "10px",
        }}
      >
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image={props.img}
            alt="green iguana"
            sx={{ ":hover": { opacity: 0.5, backdropFilter: "blur(20px)" } }}
          ></CardMedia>
          <CardContent>
            <Typography
              gutterBottom
              variant="h5"
              component="div"
              sx={{ ":hover": { color: "brown" } }}
            >
              {props.title}
            </Typography>
            <Typography variant="body2" color="text.white">
              {props.description}
            </Typography>
          </CardContent>
        </CardActionArea>
      </Card>
    </Link>
  );
}
