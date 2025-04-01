import { ZButton, ZIconSymbol, ZSizeEnum, ZStyleProps } from ".";
import { COMMON_STYLE, CONSTANTS } from "@/common_style";
import { useMergeStyle } from "@/hooks/styleHooks";
import { EAlignType, Input, View } from "lvgljs-ui";
import React, { useEffect, useMemo, useState } from "react";

const mergeStyle = useMergeStyle();

enum ZInputModeEnum {
  TEXT = "text",
  PASSWORD = "password",
}

interface ZInputProps {
  placeholder?: string;
  mode?: ZInputModeEnum;
  allowClean?: boolean;
  size?: ZSizeEnum;
  value?: string;
  maxLength?: number;
  round?: boolean;
  onChange?: (value: string) => void;
}

const style = {
  input: mergeStyle(COMMON_STYLE.noBorder),
  view: mergeStyle(
    COMMON_STYLE.autoWidth,
    COMMON_STYLE.radius4,
    COMMON_STYLE.border1,
    COMMON_STYLE.padding0,
  ),
};

const sizeStyleMap: Record<string, ZStyleProps> = {
  small: mergeStyle(
    COMMON_STYLE.minWidth36,
    COMMON_STYLE.height36,
    COMMON_STYLE.fontSizeSmall,
  ),
  default: mergeStyle(
    COMMON_STYLE.minWidth40,
    COMMON_STYLE.height40,
    COMMON_STYLE.fontSizeDefault,
  ),
  large: mergeStyle(
    COMMON_STYLE.minWidth48,
    COMMON_STYLE.height48,
    COMMON_STYLE.fontSizeLarge,
  ),
};

interface ClearButtonProps {
  size: ZSizeEnum;
  onClick?: () => void;
  display?: boolean;
}

const ClearButton = React.memo<ClearButtonProps>(
  ({ size, onClick, display = true }) => {
    return (
      <ZButton
        size={size}
        icon={ZIconSymbol.Backspace}
        onClick={onClick}
        round
        text
        disable={!display}
        style={!display && { display: "none" }}
        align={{
          type: EAlignType.ALIGN_RIGHT_MID,
        }}
      ></ZButton>
    );
  },
);

const ZInput = (props: ZInputProps) => {
  const {
    placeholder = "",
    mode = "text",
    size = ZSizeEnum.Default,
    value = "",
    allowClean = false,
    maxLength = 256,
    round = false,
    onChange,
  } = props;

  const [input, setInput] = useState(value);

  useEffect(() => {
    if (onChange) {
      onChange(input);
    }
  }, [input]);

  const computedInputStyle = useMemo(() => {
    return mergeStyle(
      sizeStyleMap[size],
      round ? { "border-radius": CONSTANTS.MAX_RADIUS } : {},
    );
  }, [size, round, mergeStyle]);

  const clearInput = () => {
    setInput("");
    // inputRef.current.focus(); // not work
  };

  return (
    <View style={mergeStyle(style.view, computedInputStyle)}>
      <Input
        style={mergeStyle(style.input, computedInputStyle)}
        placeholder={placeholder}
        maxlength={maxLength}
        value={input}
        onChange={(e) => {
          setInput(String(e.value));
        }}
        onFocusStyle={COMMON_STYLE.noBorder}
        autoKeyBoard={true}
        mode={mode}
        align={{
          type: EAlignType.ALIGN_CENTER,
        }}
      ></Input>
      <ClearButton
        onClick={clearInput}
        size={size}
        display={allowClean && input && input.length > 0}
      />
    </View>
  );
};

export type { ZInputProps };
export { ZInput, ZInputModeEnum };
