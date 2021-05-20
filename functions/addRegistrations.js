function addRegistrations(){

    //var reg_No; 
    var letters = /^[A-Za-z]+$/;

    function enterRegistrationsNo(regNo){
         
        var numberPlate = regNo.trim()
        if (numberPlate.match(letters)){
        return numberPlate;

    }

    else {

        return("invalid registration");
    }     
  
    }

      

    return{
        enterRegistrationsNo
     } 
}