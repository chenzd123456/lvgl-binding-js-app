import { COLORS, COMMON_STYLE } from "@/common_style";
import {
  ZButton,
  ZColumn,
  ZHeightEnum,
  ZIconSymbol,
  ZNavHeader,
  ZSizeEnum,
  ZWidthEnum,
} from "@/components";
import { useMergeStyle } from "@/hooks/styleHooks";
import { EAlignType, View } from "lvgljs-ui";
import React, { useRef } from "react";

const mergeStyle = useMergeStyle();

interface ZNavScreenLayoutProps {
  children?: React.ReactNode | React.ReactNode[];
}

const ZNavScreenLayout = (props: ZNavScreenLayoutProps) => {
  const { children } = props;

  const topElementRef = useRef();

  return (
    <>
      <ZColumn
        width={ZWidthEnum.Full}
        height={ZHeightEnum.Full}
        style={{
          "background-color": COLORS.PAGE_BACKGROUND,
          overflow: "hidden",
        }}
        gap={0}
      >
        <ZNavHeader />
        <ZColumn
          width={ZWidthEnum.Full}
          style={mergeStyle(COMMON_STYLE.padding20, {
            "flex-grow": 1,
            "background-color": COLORS.PAGE_BACKGROUND,
          })}
        >
          <View ref={topElementRef} style={{ display: "none" }}></View>
          {children}
        </ZColumn>
      </ZColumn>
      <ZButton
        onClick={() => {
          topElementRef.current && topElementRef.current.scrollIntoView();
        }}
        align={{
          type: EAlignType.ALIGN_BOTTOM_RIGHT,
          pos: [-10, -10],
        }}
        size={ZSizeEnum.Large}
        icon={ZIconSymbol.Up}
        round
      ></ZButton>
    </>
  );
};
export type { ZNavScreenLayoutProps };
export { ZNavScreenLayout };
