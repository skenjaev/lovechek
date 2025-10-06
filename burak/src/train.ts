// @MITASKts
export function firstUniqueCharIndex(str: string): number {
  const charCount: Record<string, number> = {};

  for (const char of str) {
    charCount[char] = (charCount[char] || 0) + 1;
  }

  for (let i = 0; i < str.length; i++) {
    if (charCount[str[i]] === 1) {
      return i;
    }
  }
  return -1;
}

console.log(firstUniqueCharIndex("stamp"))
