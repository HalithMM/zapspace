import React from "react";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import PhoneIcon from "@mui/icons-material/Phone";
import InstagramIcon from "@mui/icons-material/Instagram";
export const ContactInfo = () => {
  const number = "919500318231";
  const message =
    "Hi ZapSpace, I’m interested in a home interior project and would like to know more about your design options and services.";
  const encodedMessage = encodeURIComponent(message);
  const handleWhatsApp = () => {
    const url = `https://wa.me/${number}?text=${encodedMessage}`;
    window.open(url);
  };
  const handlePhone = ()=>{window.location.href = `tel:${number}`}

  const handleInstagram = () => {
    const instaUrl = "https://www.instagram.com/zap_space1997"; 
    window.open(instaUrl, "_blank");
  };
  return (
    <div className="fixed right-0 top-1/2 transform -translate-y-1/2 z-50">
      <div className="flex flex-col gap-4 p-2 border border-gray-300 rounded-l-xl shadow-lg">
        <WhatsAppIcon
          className="!cursor-pointer "
          onClick={handleWhatsApp}
          fontSize="medium"
          style={{ color: "green" }}
        />
        <PhoneIcon
          onClick={handlePhone}
          fontSize="medium"
          className="!cursor-pointer"
          style={{ color: "blue" }}
        />
        <InstagramIcon
          onClick={handleInstagram}
          fontSize="medium"
          className="!cursor-pointer"
          style={{ color: "red" }}
        />
      </div>
    </div>
  );
};
