function increment (num) {
    for (var i = num.length - 1; i >= 0; i--) {
        num[i]++;
        if (num[i] > 9) {
          num[i] = 0;
          if (i === 0) {
            // Last iteration, but we need to carry - unshift a 1:
            num.unshift(1);
          }
        }
        else break;
    }
    return num;
}

increment([1, 2, 7, 9]); //returns [1, 2, 8, 0]
increment([3, 9, 9, 9]); //returns [4, 0, 0, 0]
increment([9, 9, 9, 9]); //returns [1, 0, 0, 0, 0]
increment([1, 1, 1, 1]); //returns [1, 1, 1, 2]
