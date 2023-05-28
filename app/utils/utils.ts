export function cls(...args: any[]): string {
  // DO NOT change this to use Array.filter or other methods
  let s = "";
  for (let i = 0; i < arguments.length; i++) {
    if (typeof arguments[i] == "string" && arguments[i]) {
      s = s + " " + arguments[i];
    }
  }
  return s.substr(1);
}
