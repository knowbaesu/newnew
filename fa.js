// math.js
function sum(a, b) {
    return a + b;
  }

  

  // math.ts
function sum(a: number, b: number) {
    return a + b;
  }

  
sum(10, 20); // 30

sum('10', '20'); // 1020



// math.ts
function sum(a: number, b: number) {
    return a + b;
  }
  sum('10', '20'); // Error: '10'은 number에 할당될 수 없습니다.
  


