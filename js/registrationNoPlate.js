var regElement = document.querySelector('.regNum') //refence
var addButtonElement = document.querySelector('.add')
var showAddedRegElement = document.querySelector('.recentReg')

var regInstance = addRegistrations();
function addReg(){
   
    regElement = regInstance.enterRegistrationsNo(regElement.value);
    showAddedRegElement.innerHTML= addRegistrationNumberInstance.enterRegistrationsNo(regElement.value);
   }

   addButtonElement.addEventListener('click', addReg)