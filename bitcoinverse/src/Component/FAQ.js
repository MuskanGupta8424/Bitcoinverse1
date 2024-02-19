import React, { useState } from "react";
import { BiPlus, BiMinus } from "react-icons/bi";
import left from "../Assist/LEFT (1).png";
import right from "../Assist/RIGHT (1).png";
import "../Style/Faq.css";

function CollapsibleBox({ title, content }) {
  const [isExpanded, setIsExpanded] = useState(false);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div className="collapsible-box">
      <div className="box-header" onClick={handleToggle}>
        <h3 className="box-title">{title}</h3>
        {isExpanded ? (
          <BiMinus className="box-icon" />
        ) : (
          <BiPlus className="box-icon" />
        )}
      </div>
      {isExpanded && <div className="box-content">{content}</div>}
    </div>
  );
}

function FAQ() {
  const boxData = [
    {
      id: 1,
      title: "Box 1",
      content: "Content for Box 1",
    },
    {
      id: 2,
      title: "Box 2",
      content: "Content for Box 2",
    },
    {
      id: 3,
      title: "Box 3",
      content: "Content for Box 3",
    },
    {
      id: 4,
      title: "Box 4",
      content: "Content for Box 4",
    },
    {
      id: 5,
      title: "Box 5",
      content: "Content for Box 5",
    },
    {
      id: 6,
      title: "Box 6",
      content: "Content for Box 6",
    },
    // Add more box data here
  ];

  return (
    <>
      <div className="trendContainer" data-aos="fade-up">
      <h1 className="text-center" >
        <div className="trendContainer ">
        <img src={left} alt="" />
        <span style={{ color: "gold", fontSize: "40px", zIndex: "999" }}>FAQS</span>
        <img src={right} alt="" />
      </div>
        </h1>
      </div>

      <div className="box-grid" data-aos="fade-up">
        {boxData.map((box) => (
          <CollapsibleBox
            key={box.id}
            title={box.title}
            content={box.content}
          />
        ))}
      </div>
    </>
  );
}

export default FAQ;
