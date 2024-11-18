import React from "react";

// TypeScript's Omit type is a utility that allows developers to create new types by excluding specific properties from an existing type
// type IconSize = "sm" | "xs" | "xl" | Omit<string, "sm" | "xs" | "xl">; // normal way
type IconSize = LooseAutoComplete<"sm" | "xs" | "xl">;
type LooseAutoComplete<TOFS extends string> = TOFS | Omit<string, TOFS>;

type IconProps = {
  size: IconSize;
};

const Icon = (pros: IconProps) => {
  return (
    <React.Fragment>
      <p style={{ fontSize: `${pros.size}` }}>Welcome to Developer Sabbir</p>
    </React.Fragment>
  );
};

const Types = () => {
  return (
    <>
      <Icon size="sm" />
      <Icon size="20" />
    </>
  );
};
export default Types;
