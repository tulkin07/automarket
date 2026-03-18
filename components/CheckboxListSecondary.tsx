"use client";
import * as React from "react";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Checkbox from "@mui/material/Checkbox";

import { useSearchParams, useRouter, usePathname } from "next/navigation";

export default function CheckboxListSecondary({ data, title }) {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const handleToggle = (value) => () => {
    const val = String(value);
    const params = new URLSearchParams(searchParams.toString());
    const values = params.getAll(title);

    if (values.includes(val)) {
      const filtered = values.filter((v) => v !== val);
      params.delete(title);
      filtered.forEach((v) => params.append(title, v));
    } else {
      params.append(title, val);
    }

    router.replace(`${pathname}?${params.toString()}`);
  };

  return (
    <List dense sx={{ width: "100%", maxWidth: 360 }}>
      {data.map((item) => {
        const labelId = `checkbox-${item.value}`;

        const checked = searchParams
          .getAll(title)
          .includes(String(item.value));

        return (
          <ListItem
            key={item.value}
            secondaryAction={
              <Checkbox
                edge="end"
                onChange={handleToggle(item.value)}
                checked={checked}
              />
            }
          >
            <ListItemButton onClick={handleToggle(item.value)}>
              <ListItemText id={labelId} primary={item.label} />
            </ListItemButton>
          </ListItem>
        );
      })}
    </List>
  );
}