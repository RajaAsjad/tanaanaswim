"use client";

import { useState, useEffect } from "react";

const messages = [
  "FREE SHIPPING OVER $125",
  "RECEIVE 15% OFF YOUR FIRST ORDER WHEN YOU SIGN UP FOR THE NEWSLETTER",
];

export default function AnnouncementBar() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % messages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="bg-ocean text-white text-center py-2.5 px-4 text-xs sm:text-sm tracking-wider">
      <p className="transition-opacity duration-500">{messages[index]}</p>
    </div>
  );
}
