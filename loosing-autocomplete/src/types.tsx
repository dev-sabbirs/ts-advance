import React from "react";

type IconSize = LooseAutoComplete<"sm" | "xs" | "xl">;
type LooseAutoComplete<TOFS extends string> = TOFS | Omit<string, TOFS>;
type IconProps = {
  size: IconSize;
};
const Icon = (pros: IconProps) => {
  return <p style={{ fontSize: `${pros.size}` }}>Welcome to Generic World!</p>;
};
// call you custom Icon components
const Types = () => {
  return (
    <>
      <Icon size="sm" />
      <Icon size="20" />
    </>
  );
};
export default Types;
