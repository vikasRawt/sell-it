import React from "react";
import "./Contact.css";
import { Button} from '@mui/material';

const Contact = () => {
  return (
    <div className="contactContainer">
      <a className="mailBtn" href="mailto:mymailsellit@gmail.com">
        <Button>Contact: mymailsellit@gmail.com</Button>
      </a>
    </div>
  );
};

export default Contact;
