interface StringToBooleanFunction {
  (input: string): boolean;
}

export const isEmptyString: StringToBooleanFunction = (str) => str.trim() === "";