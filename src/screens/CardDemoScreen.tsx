import { COLORS } from "@/common_style";
import { ZCard, ZRow, ZSizeEnum, ZText } from "@/components";
import React from "react";

const style = {
  background: {
    "background-color": COLORS.PAGE_BACKGROUND,
  },
};

const rowStyle = {
  ...style.background,
};

const CardDemoScreen = () => {
  return (
    <>
      <ZRow style={rowStyle}>
        <ZText size={ZSizeEnum.Large}>Basic Card</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard>
          <ZText>This is card content</ZText>
        </ZCard>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZText size={ZSizeEnum.Large}>Card with Header and Footer</ZText>
      </ZRow>
      <ZRow style={rowStyle}>
        <ZCard
          header={<ZText size={ZSizeEnum.Large}>Title</ZText>}
          footer={<ZText size={ZSizeEnum.Small}>Footer</ZText>}
        >
          <ZText>This is card content</ZText>
        </ZCard>
      </ZRow>
    </>
  );
};

export default CardDemoScreen;
