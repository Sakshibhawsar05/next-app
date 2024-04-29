"use client";
import React, { useState } from "react";
import { Avatar, Typography, Box, MenuItem, Menu } from "@mui/material";
import Link from "next/link";
import { act } from "react-dom/test-utils";
import Deployment from "./Devepolyment";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);

  const navLink = [
    { label: "Start", path: "/" },
    { label: "Simulation config", path: "/simulation-config" },
    { label: "Landing page config", path: "/landing-config" },
    { label: "Simulation", path: "/simulation" },
    { label: "Deployment", path: "/deployment" },
  ];

  const handleMenuOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <div className=" flex gap-7  lg:gap-14 items-center md:px-1  px-4 py-2 bg-teal-700 ">
      {/**navbar for small screen */}
      <div  className="  visible md:invisible ">
        <div >
          <div onClick={handleMenuOpen} style={{ cursor: "pointer" }}>
            <MenuIcon sx={{ color: "white", fontSize: 35 }} />
          </div>

          {/* Dropdown Menu */}
          <Menu
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleMenuClose}
            anchorOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "right",
            }}
          >
            {navLink.map((nav, index) => (
              <MenuItem key={index} onClick={handleMenuClose}>
                <Link href={nav.path}>{nav.label}</Link>
              </MenuItem>
            ))}
          </Menu>
        </div>
      </div>

      <div>
        <h1 className="text-white  font-bold  text-xl">Simulation</h1>
      </div>
      <div className="  invisible md:visible   cursor-pointer">
        <Box className=" flex   gap-5   lg:px-7 lg:py-2  text-gray-200  text-sm  font-bold ">
          {navLink.map((nav, index) => (
            <Typography
              key={index}
              className={
                index === activeIndex ? "text-white " : "text-gray-300"
              }
              onClick={() => setActiveIndex(index)}
            >
              <Link href={nav.path} >{nav.label}</Link> {/* Link component */}
            </Typography>
          ))}
        </Box>
      </div>

      {activeIndex !== 0 && <Deployment />}

      <div className="   absolute  right-9">
        <Avatar className="">SB</Avatar>
      </div>
    </div>
  );
};
export default Navbar;
