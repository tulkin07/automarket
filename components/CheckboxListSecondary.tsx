"use client"
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CheckboxListSecondary({ data, title }) {

  const [checked, setChecked] = React.useState([]);

  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (value) => () => {

    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    const params = new URLSearchParams(searchParams.toString());
    newChecked.map(item =>
      params.append(title, item)
    )


    router.replace(`${pathname}?${params.toString()}`);

    setChecked(newChecked);
  };

  return (
    <List dense sx={{ width: "100%", maxWidth: 360 }}>
      {data.map((item) => {
        const labelId = `checkbox-${item.value}`;

        return (
          <ListItem
            key={item.value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(item.value)}
                checked={checked.includes(item.value)}
              />
            }
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