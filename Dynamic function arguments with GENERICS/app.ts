export type Event =
  | {
      type: "LOG_IN";
      payload: {
        userId: number;
      };
    }
  | {
      type: "SIGN_OUT";
    };

// Extract is a utitly type in Typescript that allows you to create a new type by extracting a subset of an existing type.
export const sendEvent = <Type extends Event["type"]>(
  ..._args: Extract<
    Event,
    {
      type: Type;
    }
  > extends { payload: infer TPayload }
    ? [type: Type, payload: TPayload]
    : [type: Type]
) => {
  const [type] = _args;
  return type;
};

sendEvent("LOG_IN", {
  userId: 20,
});
sendEvent("SIGN_OUT");
sendEvent<"LOG_IN">("LOG_IN", {
  userId: 21,
});
