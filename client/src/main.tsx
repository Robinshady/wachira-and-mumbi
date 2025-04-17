import { createRoot } from "react-dom/client";
import App from "./App";
import "./index.css";

// Import Google Fonts
const link1 = document.createElement("link");
link1.rel = "preconnect";
link1.href = "https://fonts.googleapis.com";
document.head.appendChild(link1);

const link2 = document.createElement("link");
link2.rel = "preconnect";
link2.href = "https://fonts.gstatic.com";
link2.crossOrigin = "";
document.head.appendChild(link2);

const link3 = document.createElement("link");
link3.rel = "stylesheet";
link3.href = "https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap";
document.head.appendChild(link3);

// Import Font Awesome
const link4 = document.createElement("link");
link4.rel = "stylesheet";
link4.href = "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css";
document.head.appendChild(link4);

const title = document.createElement("title");
title.textContent = "Wachira & Mumbi Advocates | Kenyan Law Firm";
document.head.appendChild(title);

createRoot(document.getElementById("root")!).render(<App />);
