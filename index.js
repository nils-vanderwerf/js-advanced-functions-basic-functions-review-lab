// Your code here
function saturdayFun (activity="roller-skate") {
   return "This Saturday, I want to " + activity + "!";     
}

function mondayWork(activity="go to the office") {
    return "This Monday, I will " + activity + "."; 
}

function wrapAdjective(highlight="*") {
   let result =  function(compliment) {
     return `You are ${highlight}${compliment}${highlight}!`;
   }
   return result;
 }

 let Calculator = {
    add: function(number1, number2) {
      return number1 + number2;
    },
    subtract: function(number1, number2) {
      return number1 - number2;
    },
    multiply: function(number1, number2) {
      return number1 * number2;
    },
    divide: function(number1, number2) {
      return number1 / number2;
    },
 }

function actionApplyer (a, arrayOfTransforms) {
   
   if (arrayOfTransforms.length === 0) {
      a === a;
      return a;
   } else {

      for (let i = 0; i < arrayOfTransforms.length; i++) {
         console.log(`a is ${a} and i is ${i} and the function return is ${arrayOfTransforms[i](a)} `)
         a = arrayOfTransforms[i](a);
         }
      }
      return a;
     }
          

actionApplyer(13,
   [function(a){ return a * 2 },
   function(a){ return a + 1000},
   function(a){ return a % 7 }]);
