/*Exact Change
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.
cid is a 2D array listing available currency.
Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.
Otherwise, return change in coin and bills, sorted in highest to lowest order. */

function checkCashRegister(price, pay, cid) {
  var change = {
    penny:{
      total : Math.round(cid[0][1] * 100)
    },
    nickel: {
      total: Math.round((cid[1][1] * 100) /5)
    },
    dime: {
      total: Math.round((cid[2][1] * 100) /10)
    },
    quarter: {
      total: Math.round((cid[3][1] * 100) /25)
    },
    one:{
      total: Math.round(cid[4][1])
    },
    five:{
      total:Math.round(cid[5][1] /5)
    },
    ten:{
      total:Math.round(cid[6][1] /10)
    },
    twenty:{
      total:Math.round(cid[7][1] /20)
    },
    hundred:{
      total:Math.round(cid[8][1] /100)
    }
  }//ends change object   
  var amount = pay - price;
  var cash = [];
  var sum = Math.round((cid[0][1] + cid[1][1] + cid[2][1] + cid[3][1] + cid[4][1] + cid[5][1] + cid[6][1] + cid[7][1] + cid[8][1]) * 100) / 100;
  //console.log(sum);
  amount = Math.round(amount * 100) / 100;//removes floats where applicable like 20 - 19.1
  if (amount > sum){
    return "Insufficient Funds";
  }
  else if (amount === sum){
    return "Closed";
  }
  else {
    var count;
    //console.log("Amount before loop " + amount);
    while (amount > 0){
      if (amount >= 100){
            count = Math.floor(amount / 100);
          if (change.total.hundred >= count){
            cash.push(["ONE HUNDRED",count * 100]);
            amount = Math.round((amount - (count * 100)) * 100) /100; 
          }
          else if (change.hundred.total) {
            cash.push(["ONE HUNDRED",change.hundred.total])
            amount = Math.round((amount - cid[8][1]) * 100)/100;
            change.hundred.total = 0;
          }
     }//////////    
      else if (amount >= 20 && change.twenty.total){
        count = Math.floor(amount / 20);       
          if (change.twenty.total >= count){            
             cash.push(["TWENTY",count * 20]);
             amount = Math.round((amount - (count * 20)) * 100) /100; 
          }
           else {
             cash.push(["TWENTY", cid[7][1]]);
             amount = Math.round((amount - cid[7][1]) * 100)/100;          
             change.twenty.total = 0;
           }
        }//////////    
      else if (amount >= 10 && change.ten.total){
          count = Math.floor(amount / 10);
          if (change.ten.total >= count){
            cash.push(["TEN",count * 10]);
            amount = Math.round((amount - (count * 10)) * 100) /100; 
        }
        else {
          cash.push(["TEN", cid[6][1]])
          amount = Math.round((amount - cid[6][1]) * 100) /100;
          change.ten.total = 0;
        }          
      }////////////
      else if (amount >= 5 && change.five.total){
        count = Math.floor(amount / 5);
        if (change.five.total >= count){
             cash.push(["FIVE",count * 5]);
             amount = Math.round((amount - (count * 5)) * 100) /100; 
          }
        else {
          cash.push(["FIVE", cid[5][1]])
          amount = Math.round((amount - cid[5][1]) * 100) /100;
          change.five.total = 0;
        }
      }/////////////
      else if (amount >= 1 && change.one.total){
          count = Math.floor(amount / 1);
        if (change.one.total >= count){
          cash.push(["ONE",count]);
          amount = Math.round((amount - (count * 1)) * 100) /100;
        }
        else {
          cash.push(["ONE", cid[4][1]])
          amount = Math.round((amount - cid[4][1]) * 100) /100;
          change.one.total = 0;
        }           
      }////////////////////
      else if (amount >= .25 && change.quarter.total){      
          count = Math.floor(amount / .25);
        if (change.quarter.total >= count){
          cash.push(["QUARTER",count * .25]);
          amount = Math.round((amount - (count * .25)) * 100) /100; 
        }
        else {
          cash.push(["QUARTER", cid[3][1]]);
          amount = Math.round((amount - cid[3][1]) * 100) /100;
          change.quarter.total = 0;
        }
      }/////////////////////
      else if (amount >= .1 && change.dime.total){
          count = Math.floor(amount / .10);
        if (change.dime.total >= count){
          cash.push(["DIME",count * .1]);
          amount = Math.round((amount - (count * .10)) * 100) /100; 
        }
        else {
          cash.push(["DIME", cid[2][1]]);
          amount = Math.round((amount - cid[2][1]) * 100) / 100;
          change.dime.total = 0;
        }
      }////////////////////
      else if (amount >= .05 && change.nickel.total){
          count = Math.floor(amount / .05);
        if (change.nickel.total >= count){
          cash.push(["NICKEL",count * .05]);
          amount = Math.round((amount - (count * .05)) * 100) /100; 
        }
        else {
          cash.push(["NICKEL", cid[1][1]]);
          amount = Math.round((amount - cid[1][1]) * 100) /100;
          change.nickel.total = 0;
        }
      }/////////////////////
      else if (amount >= .01 && change.penny.total){
          count = Math.floor(amount / .01);
        if (change.penny.total >= count){
          cash.push(["PENNY",count * .01]);
          amount = Math.round((amount - (count * .01)) * 100) /100; 
        }
        else {
          cash.push(["PENNY", cid[0][1]]);
          amount = Math.round((amount - cid[0][1]) * 100) /100;
          change.penny.total = 0;
        }
      }  
      else {
         return "Insufficient Funds";
      }
    }//end while loop  
  }
  return cash;
}

console.log(checkCashRegister(19.50, 20.00, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1.00], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));