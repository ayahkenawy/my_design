// Owl Carousel
$('.owl-carousel').owlCarousel({
    loop: true,
    margin: 20,
    nav: true,
    dots:false,
    navText: ['<i class="fas fa-long-arrow-alt-left"></i>', '<i class="fas fa-long-arrow-alt-right"></i>'],
   
    responsive: {
        0: {
            items: 1
        },
       
        1000: {
            items: 2
        }
    }
});
// Scroll Top
var btnTop = document.getElementById("btn-Top");
window.addEventListener('scroll',function(){
    if(document.documentElement.scrollTop>300)
    {
        btnTop.style.display="inline-block"    
    }
    else
    {
        btnTop.style.display="none"
    }
})
// Form Validation
var form = document.getElementById("form-contact")
//Check UserName Input
function userNameValidation(element) {
    var inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "this field must be at least 3 character")
    else handleError(element)
}
//Check Email Input
function emailValidation(element) {
    var emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    if(emailPattern.test(element.value) == false) handleError(element , "please enter a valid email")
    else handleError(element)

}
//Check Subject Input
function subjectValidation(element) {
    var inputValue = element.value.trim()
    if (inputValue.length < 3) handleError(element, "this field must be at least 3 character")
    else handleError(element)
}
//Check UsermMsg Input
function userMsgValidation(element) {
    var inputValue = element.value.trim()
    if (inputValue.length < 10) handleError(element, "this field must be at least 10 character")
    else handleError(element)
}
//Show MSg To User
function handleError(input, msg = "") {
    input.nextElementSibling.innerText = msg
}
//Remove Error Msg
function removeError(input) {
    input.nextElementSibling.innerText = ""
};


form.addEventListener('input', function (event) {
    switch (event.target.name) {
        case "userName":
            userNameValidation(event.target)
            break;
        case "userEmail":
            emailValidation(event.target)
            break;
        case "subject":
            subjectValidation(event.target)
            break;
        case "userMsg":
            userMsgValidation(event.target)
            break;
    }
})



var userInfo = {}
//Submit
form.addEventListener('submit' , function(event){
    event.preventDefault()
    addUser(event.target.elements.userName.value,event.target.elements.userEmail.value,event.target.elements.subject.value,event.target.elements.userMsg.value,event)
})
//Add User
var message= document.getElementById("Message")
function addUser(Name,Email,Subject,Msg,event){
    var flag =true;
    for(i=0;i<event.target.elements.length-1 ;i++)
    {
        //Check If All Element Have Value
        if(event.target.elements[i].value=="")
        {   flag = false;
            handleError(event.target.elements[i],"This Field Is Required")
            message.innerHTML = "All Fields Are Required"
        }
    }
    if(flag)
    {
        message.innerHTML = ""
        userInfo=
        {
        userName:Name,
        userEmail:Email,
        userSubject:Subject,
        userMsg:Msg
    }
        console.log(userInfo)
    }

}