function canWin(n, player) {
    if (n === 0) {
      return false;
    }
    for (let i = 1; i <= 3; i++) {
      if (i <= n) {
        if (!canWin(n - i, 3 - player)) {
          return true;
        }
      }
    }
    return false;
  }
  
  const n = parseInt(prompt("Enter the number of stones:"));
  if (canWin(n, 1)) {
    console.log("First");
  } else {
    console.log("Second");
  }
  