"use client";
import { useEffect, useState } from "react";
import { FaRegUser, FaUser, FaUserAlt, FaUserFriends } from "react-icons/fa";
import { FaUserClock } from "react-icons/fa6";
import { IoMdMailUnread } from "react-icons/io";

export default function StatCard({ title, value, duration = 1000 }) {
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    const target = Number(String(value).replace(/,/g, ""));
    const start  = Date.now();

    const tick = () => {
      const progress = Math.min((Date.now() - start) / duration, 1); 
      const current  = Math.floor(progress * target);
      setDisplay(current.toLocaleString());

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [value, duration]);

  return (
    <div style={card} className="statcard">
        <div>
      <h4 style={{ fontSize: ".9rem", color: "#6b7280" }}>{title}</h4>
      <p style={{ fontSize: "1.8rem", fontWeight: 600 }}>{display}</p>
      </div>
      {title === "Total Users" &&<FaUserFriends style={{fontSize:'70px'}}/> }
      {title === "Active Tasks" &&<FaUserClock style={{fontSize:'70px'}}/> }
      {title === "Unread Msgs" &&<IoMdMailUnread style={{fontSize:'70px'}}/> }

    </div>
  );
}

const card = {
  background: "#fff",
  border: "1px solid #e5e7eb",
  borderRadius: 8,
  padding: "1rem 1.25rem",
  minWidth: 300,
  boxShadow: "0 1px 2px rgba(0,0,0,.05)",
  
  
};
