interface ConcatStrings {
  (str1: string, str2: string): string;
}

export const concatStrings: ConcatStrings = (str1, str2) => {
  return str1 + str2;
};