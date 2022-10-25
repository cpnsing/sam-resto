import React from "react";
import Rate from "@material-ui/lab/Rating";

export default function Rating() {
  const [value, setValue] = React.useState(4);
  return (
    <Rate
      name="simple-controlled"
      value={value}
      onChange={(event, newValue) => {
        setValue(newValue);
      }}
    />
  );
}
