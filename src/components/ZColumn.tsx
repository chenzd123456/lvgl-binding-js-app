import { ZHeightEnum, ZStyleProps, ZWidthEnum } from ".";
import { COMMON_STYLE } from "../common_style";
import { View } from "lvgljs-ui";
import * as _ from "radash";
import React, { useMemo } from "react";

interface ZColumnProps {
  children?: React.ReactNode;
  style?: ZStyleProps;
  width?: ZWidthEnum | number;
  height?: ZHeightEnum | number;
}

const ZColumn = (props: ZColumnProps) => {
  const baseStyle: ZStyleProps = {
    ...COMMON_STYLE.flexColumn,
    ...COMMON_STYLE.noBorder,
    ...COMMON_STYLE.padding0,
    ...COMMON_STYLE.radius0,
  };

  const widthStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoWidth,
    full: COMMON_STYLE.fullWidth,
  };

  const heightStyleMap: Record<string, ZStyleProps> = {
    auto: COMMON_STYLE.autoHeight,
    full: COMMON_STYLE.fullHeight,
  };

  const {
    children,
    width = ZWidthEnum.Auto,
    height = ZHeightEnum.Auto,
    style: propStyle = {},
  } = props;

  const computedStyle = useMemo(() => {
    let style = baseStyle;
    if (_.isNumber(width)) {
      style["width"] = width;
    } else {
      style = { ...style, ...widthStyleMap[width] };
    }
    if (_.isNumber(height)) {
      style["height"] = height;
    } else {
      style = { ...style, ...heightStyleMap[height] };
    }
    return style;
  }, [width, height]);

  return (
    <View
      style={{
        ...computedStyle,
        ...propStyle,
      }}
    >
      {children}
    </View>
  );
};

export type { ZColumnProps };
export { ZColumn };
