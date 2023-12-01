"use strict";
let myScores = [92, 98, 84, 76, 89, 99, 100];
let yourScores = [82, 98, 94, 88, 92, 100, 100];
let average = 0;
function getAverage(){
    for(let i = 0 ; i < myScores.length; i++){
  average += myScores[i] /myScores.length;
   return average;
    }
}

getAverage(myScores);