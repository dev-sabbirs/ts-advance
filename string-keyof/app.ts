export type Letters = "a" | "b" | "c";

// export type RemoveC<TType> = TType extends "c" ? never : TType;

// export type RemoveL<TType, LTR extends string> = TType extends LTR
//   ? LTR
//   : TType;

export type RemoveLTR<TOFL, LTR extends TOFL> = TOFL extends LTR ? never : TOFL;
