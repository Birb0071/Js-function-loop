function process() {

    var num1 = parseInt(document.getElementById("num1Input").value); 
    var num2 = parseInt(document.getElementById("num2Input").value);

    add (num1,num2);
    multiply (num1, num2); 

    // IMPORTANT 
    // LOOP Example below ............................

      var p;
      for (p =5 ; p<= 20 ; p+=5) {
        console.log(p); 
      }
     

      var someNumber = 500;
      var someNumber2 = 25.55;
      var someName = "ABC PQR";

      var storage = [10, 4, 55, 23, 12, 70, 24]; 
      console.log('Total items in the storage array:', storage.length);
      console.log ('The second item in this array is:', storage[1]);

      var products = ["pens", "pencils", "some item1", "other items2"]; 
      
      var student1 = {name: "ABC Khan", id: 4534543, 
                    ph: 167653333, bloodGp: "O+", address: "30 Banani" }; 

      console.log("Student 1 Address:", student1.address); 


}

function add (num1, num2){

    // console.log(num1);
    // console.log(num2);
    //console.log(num1+num2);
    document.getElementById('showArea').innerHTML = `
    sum of two numbers are: ${num1+num2}`; 
  
}

function multiply(num1, num2){

    //console.log(num1 * num2);
}
