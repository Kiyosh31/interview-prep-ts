/**
 * https://leetcode.com/problems/valid-anagram/
 */

/**
 * iterate through s and save characters in map
 * iterate t and check if char in t exists in map
 * if not return false
 * if we get to the end of the iteration
 * return true
 */

// O(n)
export const isAnagram = (s: string, t: string): boolean => {
  if (s.length !== t.length) return false;

  const sMap = new Map();
  const tMap = new Map();

  for (const char of s) {
    sMap.set(char, (sMap.get(char) || 0) + 1);
  }

  for (const char of t) {
    tMap.set(char, (tMap.get(char) || 0) + 1);
  }

  for (const [key, value] of sMap) {
    if (tMap.get(key) !== value) {
      return false;
    }
  }

  return true;
};
