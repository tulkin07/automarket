"use client"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

export default function CheckboxListSecondary({ data }) {
  const [checked, setChecked] = React.useState([1]);

  const handleToggle = (value) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  return (
    <List
      dense
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
    >
      {data.map((item) => {
        const labelId = `checkbox-list-secondary-label-${item.value}`;
        return (
          <ListItem
            key={item.value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(item.value)}
                checked={checked.includes(item.value)}
                inputProps={{ "aria-labelledby": labelId }}
              />
            }
            disablePadding
          >
            <ListItemButton>
              <ListItemText id={labelId} primary={item.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}
