import { COLORS } from "@/common_style";
import { ZButton, ZRow, ZText } from "@/components";
import React from "react";
import { useNavigate } from "react-router-native";

const style = {
  BackgroundStyle: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const indexData = [
  {
    text: "Basic Widgets",
    children: [
      { text: "Button Demo", path: "/button" },
      { text: "Icon Demo", path: "/icon" },
      { text: "Card Demo", path: "/card" },
      { text: "Switch Demo", path: "/switch" },
    ],
  },
  {
    text: "Form Widgets",
    children: [{ text: "Input Demo", path: "/input" }],
  },
  {
    text: "Feedback Widgets",
    children: [{ text: "Dialog Demo", path: "/dialog" }],
  },
  { text: "List Render", children: [{ text: "List Demo", path: "/list" }] },
  { text: "State", children: [{ text: "State Demo", path: "/state" }] },
];

const HomeScreen = () => {
  const navigate = useNavigate();
  return (
    <>
      {indexData.map((category) => (
        <>
          <ZText>{category.text}</ZText>
          <ZRow
            wrap
            style={{
              ...style.BackgroundStyle,
            }}
          >
            {category.children.map((item) => (
              <ZButton onClick={() => navigate(item.path)}>{item.text}</ZButton>
            ))}
          </ZRow>
        </>
      ))}
    </>
  );
};

export default HomeScreen;
