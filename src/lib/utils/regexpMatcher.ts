export function emailRegexpMathcher(string: string): boolean {
  const regExp = /@/;
  if (regExp.test(string)) return true;
  return false;
}

export function passwordRegexpMathcher(string: string): boolean {
  const regExp = /......../;
  if (regExp.test(string)) return true;
  return false;
}
