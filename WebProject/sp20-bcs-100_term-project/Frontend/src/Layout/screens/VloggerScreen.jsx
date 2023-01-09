import { Button } from "@mui/material";
import React, { useState } from "react";
import CoverHeading from "../components/CoverHeading";
import VloggerCard from "../components/VloggerCard";

export default function VloggerScreen() {
  const vlog = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  const [rating, setRating] = useState(4.5);

  return (
    <>
      <CoverHeading
        bgImage={"vloggerBg"}
        firstLine="Vlogger are"
        secondLine="representative of food"
      >
        <Button
          variant="contained"
          color="inherit"
          sx={{
            fontSize: "1.2rem",
            marginTop: 5,
            marginLeft: 2,
            fontWeight: "bold",
          }}
          className="w-52"
        >
          Add Vlogger
        </Button>
      </CoverHeading>

      <div className="bg-black container-fluid bg-opacity-70 p-2 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3  ">
        {vlog.map((item) => (
          <VloggerCard
            name="Nimra Khan"
            age="23"
            rating={rating}
            image="https://images.unsplash.com/photo-1598346762291-aee88549193f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            description="This is a wider card with supporting text below as a natural lead-in
            to additional content. This content is a little bit longer."
          />
        ))}
      </div>
    </>
  );
}
