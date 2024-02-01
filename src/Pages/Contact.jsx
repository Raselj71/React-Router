import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div>
      <h1>Contact Us</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Alias
        consequatur doloremque laudantium minus quibusdam totam facere tenetur
        enim esse dolor nostrum provident voluptatem quae natus, praesentium
        sequi aspernatur, optio explicabo distinctio? Deserunt neque voluptate
        aperiam aut perspiciatis! Dolorem neque mollitia tempore facere
        assumenda excepturi, odio adipisci, rerum debitis, fugiat harum.
      </p>

      <button
        className="text-red-800"
        onClick={() => {
          navigate("/");
        }}
      >
        Go to Home page
      </button>
    </div>
  );
}

export default Contact;
