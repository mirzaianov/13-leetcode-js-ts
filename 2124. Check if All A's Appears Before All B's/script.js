var checkString = function (s) {
  for (let i = 0; i < s.length; i++) {
    if (s[i] > s[i + 1]) return false;
  }

  return true;
};
