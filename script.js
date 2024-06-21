// let Students = ["Mujahid", "Azeem", "saad", "wajid", "khalid"]
// {
//           console.log(Students.length);
// }
     
let Students =[ ]
Students[0]= "Mujahjid"
Students[1]= "Azeem"
Students[2]= "saad"
Students[3]= "wajid"
Students[4]= "Khalid"
Students.pop();//Using the keyword, pop, you can remove the last element of an array.
Students.push("khalil","jamil") //Using the keyword, push, you can add one or more elements to the end of an array.
//Students.shift(); //Use the shift method to remove an element from the beginning of an array.
Students.unshift("ijaz", "waheed") //To add one or more elements to the beginning of an array, use the unshift method. 
Students.splice(3, 0, "bilal"); //Use the splice method to insert one or more elements anywhere in an array
console.log(Students);
 let scores = [10, 20, 30];
scores[1] = 25;
console.log(scores);
 let arr1 = [1,2,3]
 let arr2 = [4,5,6]

 let arr3 = arr1.concat(arr2);

 console.log(arr3);