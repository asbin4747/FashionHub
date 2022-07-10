import React from "react";
import AttachEmailIcon from "@mui/icons-material/AttachEmail";
import CallIcon from "@mui/icons-material/Call";
import ChatIcon from "@mui/icons-material/Chat";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import CopyrightIcon from "@mui/icons-material/Copyright";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Footer() {
  const iconStyle = {
    fontsize: 100,
    color: "blue",
  };

  return (
    <div className="grid grid-flow-row-dense grid-cols-2 md:grid-cols-4 justify-items-center gap-5 pt-4 md:pt-5 md:pb-2 md:p-10 
    bg-stone-200 footer-gradient border rounded-xl border-4">
      <div className="footer-contact text-black">
        <div className="font-semibold text-2xl md:text-3xl text-sky-500">
          <InfoIcon /> Contact
        </div>
        <div className="text-small">
          <LocalPhoneIcon /> 123456789
        </div>
        <div className="text-small ">
          <EmailIcon /> info@gmail.com
        </div>
      </div>

      <div className="footer-information">
        <div className="font-semibold text-2xl md:text-3xl text-sky-500">
          Information
        </div>
        <div className="">About</div>
        <div className="">Products</div>
      </div>

      <div className=" footer-follow col-span-2 text-center">
        <div className="footer-contact-text font-semibold text-2xl text-sky-500 ">Follow us</div>
        <div className="space-x-6">
          <InstagramIcon style={{ fontsize: 50, color: "purple" }} />
          <YouTubeIcon style={{ color: "red" }} />
          <ChatIcon style={{ color: "green" }} />
          <FacebookIcon style={{ color: "blue" }} />
        </div>
      </div>

      <div className="copyright col-span-2 justify-items-center">
        <div className="leading-10 md:pb-5 mx-2">
          <TextField
            id="outlined-basic"
            label="Subscribe"
            variant="outlined"
            size="small"
          />
          <Button variant="contained" size="medium">
            Subscribe
          </Button>
        </div>
      </div>

      <div className="col-span-2 place-items-center">
        <CopyrightIcon style={{ color: "blue" }} /> Fashionhub 2022
      </div>
    </div>
  );
}
