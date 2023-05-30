var rollError = document.getElementById('roll-error');
var nameError = document.getElementById('name-error');
var addError = document.getElementById('add-error');
var submitError = document.getElementById('submit-error');
var submitSuccess = document.getElementById('submit-success');


var name = document.getElementById('name').value;
var roll = document.getElementById('roll').value;
var add = document.getElementById('add').value;

document.getElementById("name").disabled = true;
document.getElementById("add").disabled = true;


function validateRoll(){
    var roll = document.getElementById('roll').value;

    if(roll.length == 0){
        rollError.innerHTML = 'Roll no is required';
        return false;
    }
    if(!roll.match(/^[0-9]+$/)){
        rollError.innerHTML = 'Use valid digits';
        return  false;
    }
    if(parseInt(roll) <= 0 ){
        rollError.innerHTML = 'Roll no >=1';
        return false;
    }
    if(roll.match(/^[-+]?[0-9]+\.[0-9]+$/)){
        rollError.innerHTML = 'decimals not accepted';
        return false;
    }
    if(roll.length !== 3){
        rollError.innerHTML = 'Roll no should be 3 digits';
        return false;
    }
    if(roll.length >3){
        rollError.innerHTML = 'Only 3 digits please.';
        return false;
    }
    rollError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;

}


/*function f1(){
   
    if(!validateRoll()){
        document.getElementById("name").disabled = true;
    }
    if(validateRoll()) {
        document.getElementById("name").disabled = false;
    }

}*/


function validateName(){
    var name = document.getElementById('name').value;

if(!validateRoll()){

//document.getElementById('name').style.color = 'transparent';
   //document.getElementById('name').style.text ='none';
   //document.getElementById('name').style.visibility = "hidden";
    
    nameError.innerHTML = 'fill roll first';
  return false;
}

 if(validateRoll()){
    document.getElementById("name").disabled = false;
    if(name.length == 0){
        nameError.innerHTML = 'Name is required';
        return false;
    }
    if(!name.match(/^[a-zA-Z]+[A-Za-z|.|  ]*$/)){
        nameError.innerHTML = 'Use valid characters';
        return  false;
    }
    nameError.innerHTML = '<i class="fas fa-check-circle"></i>';
    return true;
 }
}



function validateAdd(){

    
var add = document.getElementById('add').value;

       // document.getElementById('add').style.color = 'transparent';
      
    if(!(validateRoll() && validateName())){
      // document.getElementById('name').style.display='none';
        //add.value = "";
        nameError.innerHTML = 'fill roll first';
        addError.innerHTML = 'fill above details first';
        return false;
    }
    else {

       document.getElementById("add").disabled = false;
    
    var required = 15;
    var left = required - add.length;

    if(add.length == 0){
        addError.innerHTML = 'Address is required';
        return false;
    }
    if(left>0){
        addError.innerHTML = left + 'more characters required';
        return false;
    }
    if(!add.match(/[a-zA-z0-9]+[^a-zA-Z0-9\-\/]*/)){
        addError.innerHTML = 'enter valid address';
        return false;
    }

    addError.innerHTML = '<i class="fas fa-check-circle"></i>';
            return true;
    
}
}

function validateForm(){
    if(!validateRoll() || !validateName() || !validateAdd()){
        submitError.style.display = 'block';
        submitError.innerHTML = 'Fix above errors to submit';
        setTimeout(function(){submitError.style.display = 'none';}, 3000);
        return false;   
    }
    if(validateRoll() && validateName() && validateAdd()){
        /*submitSuccess.style.display='block';
        submitSuccess.innerHTML = 'Welcome user';
        setTimeout(function(){submitSuccess.style.display = 'none';}, 5000);*/
        var roll = document.getElementById('roll').value;
        var name = document.getElementById('name').value;
        var add = document.getElementById('add').value;
        alert(  "Welcome "+ name + "!! Your Roll number is " + roll + ". You stay at " + add);
    return true;
    }  
}


function clearInput(){

   location.reload();
}
