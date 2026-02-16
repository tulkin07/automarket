"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
export default function Profile() {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div className="py-10 max-w-5xl mx-auto px-5">
      <Box sx={{ width: "100%", typography: "body1" }}>
        <TabContext value={value}>
          <Box sx={{ display: "flex", gap: "48px", alignItems: "flex-start" }}>
            <Box
              sx={{ borderRight: 1, borderColor: "divider", minWidth: "250px" }}
            >
              <TabList
                onChange={handleChange}
                aria-label="lab API tabs example"
                orientation="vertical"
              >
                <Tab
                  label="Mening profilim"
                  value="1"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                />
                <Tab
                  label="Faol e’lonlar"
                  value="2"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                />
                <Tab
                  label="Arxivlangan e’lonlar"
                  value="3"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                />
                <Tab
                  label="Saqlangan mashinalar"
                  value="4"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                />
                <Tab
                  label="Xabarlar"
                  value="5"
                  sx={{ display: "flex", alignItems: "flex-start" }}
                />
              </TabList>
            </Box>
            <div className="border min-h-[250px] w-full border-[#E0E2E6] rounded-[14px]">
              <TabPanel value="1">
                <h4 className="text-2xl font-medium tracking-tight mb-5">
                  Mening profilim
                </h4>
                <div className="flex flex-col gap-4">
                  <div className="flex gap-10 items-center">
                    <h4 className="w-15 font-medium">Ism</h4>
                    <input type="text" className="w-full h-10 rounded-md px-2 " placeholder="Ali Valiyev" />
                  </div>
                  <div className="flex gap-10 items-center">
                    <h4 className="w-15 font-medium">Telefon</h4>
                    <input type="text" className="w-full h-10 rounded-md px-2" placeholder="+998 90 123 45 67" />
                  </div>
                  <div className="flex gap-10 items-center">
                    <h4 className="w-15 font-medium">Email</h4>
                    <input type="text" className="w-full h-10 rounded-md px-2 " placeholder="ali.valiyev@example.com" />
                  </div>
                </div>
              </TabPanel>
              <TabPanel value="2">Item Two</TabPanel>
              <TabPanel value="3">Item Three</TabPanel>
              <TabPanel value="4">Item Three</TabPanel>
              <TabPanel value="5">Item Three</TabPanel>
            </div>
          </Box>
        </TabContext>
      </Box>
    </div>
  );
}
