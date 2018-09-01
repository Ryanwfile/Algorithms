//Convert to Roman Numerals  (I need to refactor this algorithm)

convertToRoman = num =>{
                  //0    1    2    3    4    5   6   7    8    9    10  11  12
  const arrNum =   [1,   4,   5,   9,  10,  40, 50,  90, 100, 400, 500,900,1000];
  const arrRoman = ["I","IV","V","IX","X", "XL","L","XC","C","CD","D", "CM","M"];
  let romanized = "";
  let output = num;
  let digit;
  let remainder;
  
  if (output >= 1000){
    digit = Math.floor(output/1000);
    remainder = output - (digit * 1000);
    while(digit > 0){
      romanized += "M";
      digit --;
    }
  }  
  if(remainder || remainder === 0){
    output = remainder;
  }  
  if (output >= 900){
    digit = Math.floor(output/900);
    remainder = output - (digit * 900);
    while (digit > 0){
      romanized += "CM";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 500){
    digit = Math.floor(output/500);
    remainder = output - (digit * 500);
    while (digit > 0){
      romanized += "D";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 400){
    digit = Math.floor(output/400);
    remainder = output - (digit * 400);
    while(digit > 0){
      romanized += "CD";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 100){
    digit = Math.floor(output/100);
    remainder = output - (digit * 100);
    while(digit > 0){
      romanized += "C";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 90){
    digit = Math.floor(output/90);
    remainder = output - (digit * 90);
    while(digit > 0){
      romanized += "XC";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 50){
    digit = Math.floor(output/50);
    remainder = output - (digit * 50);
    while (digit > 0){
      romanized += "L";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 40){
    digit = Math.floor(output/40);
    remainder = output - (digit * 40);
    while (digit > 0){
      romanized += "XL";
      digit --;
    }
  }
   if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 10){
    digit = Math.floor(output/10);
    remainder = output - (digit * 10);
    while (digit > 0){
      romanized += "X";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if(output >= 9){
    digit = Math.floor(output/9);
    remainder = output - (digit * 9);
    while (digit > 0){
      romanized += "IX";
      digit --;
    }
  }
  
  if(remainder || remainder === 0){
    output = remainder;
  }  
  if(output >= 5){
    digit = Math.floor(output/5);
    remainder = output - (digit * 5);
    while(digit > 0){
      romanized += "V";
      digit --;
    }
  }
  if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 4){
    digit = Math.floor(output/4);
    remainder = output - (digit * 4);
    while(digit > 0){
      romanized += "IV";
      digit --;
    }
  }
 if(remainder || remainder === 0){
    output = remainder;
  } 
  if (output >= 1){
    digit = Math.floor(output/1);
    remainder = output - (digit * 1);
    while ( digit > 0){
      romanized += "I";
      digit --;
    }
  }
  return romanized;
}

console.log(convertToRoman(798));