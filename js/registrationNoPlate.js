var regElement = document.querySelector('.regNum') //refence
var addButtonElement = document.querySelector('.add')
var showAddedRegElement = document.querySelector('.recentReg')

var regInstance = addRegistrations();
function addReg(){
   
    // changed the var to regElementValue, less confusing and easy to differitiate it from regElement
    regElementValue = regInstance.enterRegistrationsNo(regElement.value);
    // showAddedRegElement.innerHTML= addRegistrationNumberInstance.enterRegistrationsNo(regElement.value);

    // changed this to just put the returened value into the innerHTML
    showAddedRegElement.innerHTML= regElementValue;
}

addButtonElement.addEventListener('click', addReg)
