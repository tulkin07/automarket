"use client";

import React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { filtersData } from "@/constants/data";
import CheckboxListSecondary from "./CheckboxListSecondary";
import { Box, Button } from "@mui/material";
import Slider from "@mui/material/Slider";
import { usePathname, useRouter, useSearchParams } from "next/navigation";

function valuetext(value: number) {
  return `$ ${value}`;
}

export default function SearchSidebar() {
  const searchParams = useSearchParams();
    const router = useRouter();
    const pathname = usePathname();
  const [value, setValue] = React.useState<number[]>([1, 100000]);
  const handleChange = (event: Event, newValue: number[]) => {
    setValue(newValue);
  };

  const getPrice = ()=>{
     const params = new URLSearchParams(searchParams.toString());
     params.set("minPrice",value[0].toString())
     params.set("maxPrice",value[1].toString())

      router.replace(`${pathname}?${params.toString()}`);
  }

  return (
    <div>
      {filtersData.map((item, index) => (
        <Accordion key={item.key} defaultExpanded={[1, 2].includes(index + 1)}>
          <AccordionSummary
            expandIcon={<ExpandMoreIcon />}
            aria-controls={item.key}
            id={item.key}
          >
            <Typography component="span">{item.label}</Typography>
          </AccordionSummary>
          <AccordionDetails className="overflow-y-auto max-h-[300px]">
            <CheckboxListSecondary title={item.key} data={item.options} />
          </AccordionDetails>
        </Accordion>
      ))}

      <Accordion defaultExpanded={[1, 2].includes(1)}>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography component="span">Narx</Typography>
        </AccordionSummary>
        <AccordionDetails className="overflow-y-auto max-h-[300px]">
          <Box sx={{ marginTop: 2 }}>
            <div className="flex justify-between gap-2 px-1">
              <input
                type="number"
                className="text-[14px] w-1/2 border border-gray-500 rounded-md text-center px-2 py-3 outline-none cursor-text"
                onChange={(e) => {
                  setValue([e.target.value, value[1]]);
                }}
                value={value[0]}
              />
              <input
                type="number"
                className="text-[14px] w-1/2 border border-gray-500 rounded-md text-center px-2 py-3 outline-none cursor-text"
                onChange={(e) => {
                  setValue([value[0], e.target.value]);
                }}
                value={value[1]}
              />
              <Button onClick={getPrice} variant="contained">OK</Button>
            </div>
            <div className="mt-5 px-5 ">
              <Slider
                getAriaLabel={() => "Price range"}
                value={value}
                min={1}
                max={100000}
                onChange={handleChange}
                valueLabelDisplay="auto"
                getAriaValueText={valuetext}
              />
            </div>
          </Box>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
