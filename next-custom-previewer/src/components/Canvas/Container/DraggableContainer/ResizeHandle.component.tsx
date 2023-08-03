import React from "react";
import Brightness1OutlinedIcon from "@mui/icons-material/Brightness1Outlined";

export const ResizeHandle = () => {
  return (
    <div>
      <Brightness1OutlinedIcon
        sx={{
          fontSize: 13,
          margin: 0.5,
          backgroundColor: "white",
          borderRadius: "50%",
          color: "rgb(255, 0, 204)",
        }}
      />
    </div>
  );
};
