var arr=[]
if(localStorage.getItem("arr")!=null)
arr=JSON.parse(localStorage.getItem("arr"))

var inn = document.getElementById("inn")
var login = document.getElementById("login")
var inred1 = document.getElementById("inred1")
var inred2 = document.getElementById("inred2")
var ingreen = document.getElementById("ingreen")
var tosignup = document.getElementById("tosignup")
var inemail = document.getElementById("inemail")
var inpass = document.getElementById("inpass")
var insub = document.getElementById("insub")


var upp = document.getElementById("upp")
var signup = document.getElementById("signup")
var upred1 = document.getElementById("upred1")
var upred2 = document.getElementById("upred2")
var upgreen = document.getElementById("upgreen")
var tosignin = document.getElementById("tosignin")
var upname = document.getElementById("upname")
var upemail = document.getElementById("upemail")
var uppass = document.getElementById("uppass")
var upsub = document.getElementById("upsub")


var home = document.getElementById("home")
var logout = document.getElementById("logout")
var welc = document.getElementById("welc")


function runinput(e){
    var l = Math.floor(Math.random()*95);
    var t = Math.floor(Math.random()*95);
    e.target.style.top=`${t}%`;
    e.target.style.left=`${l}%`;
}



login.addEventListener("mousemove",function(e){

    if(ingreen.getAttribute("class").split(" ")[(ingreen.getAttribute("class").split(" ").length-1)]=="d-none"){
        e.target.style.position="absolute";
        runinput(e);
    }
    else {
        e.target.style.position="";
        login.addEventListener("click",function(){
            inn.classList.add("d-none")
            ingreen.classList.add("d-none")
            home.classList.remove("d-none")
            
            var index
            for(var i=0 ; i<arr.length ; i++)
                if(inemail.value==arr[i].email && inpass.value==arr[i].pass){
                    welc.innerHTML=`Welcome ${arr[i].name}`
                    inemail.value=""
                    inpass.value=""
                }
            
            
        })

    } 
    
})

insub.addEventListener("click",function(){

    var obj={
        email:inemail.value,
        pass:inpass.value
    }

    var flag=false;

    for(var i=0 ; i<arr.length ; i++)
        if(obj.email==arr[i].email && obj.pass==arr[i].pass)
            flag=true;
    
    if(flag){
        ingreen.classList.remove("d-none")
        inred1.classList.add("d-none")
        inred2.classList.add("d-none")
        login.style.position=""
    }

    else if(obj.email=="" || obj.pass==""){
        
        inred1.classList.remove("d-none")
        ingreen.classList.add("d-none")
        inred2.classList.add("d-none")
        alert("All inputs is required");
    }
    else{
        
        inred2.classList.remove("d-none")
        ingreen.classList.add("d-none")
        inred1.classList.add("d-none")
        alert("incorrect email or password");
    }


})

tosignup.addEventListener("click",function(){
    login.style.position=""
    inemail.value=""
    inpass.value=""
    inn.classList.add("d-none")
    upp.classList.remove("d-none")
    inred2.classList.add("d-none")
    ingreen.classList.add("d-none")
    inred1.classList.add("d-none")
})







upsub.addEventListener("click",function(){

    var obj={
        name:upname.value,
        email:upemail.value,
        pass:uppass.value
    }

    var flag=false

    for(var i=0 ; i<arr.length ; i++){
        if(arr[i].email==obj.email)
            flag=true;
    }


    if( obj.name=="" || obj.email=="" || obj.pass==""){
        upgreen.classList.add("d-none")
        upred2.classList.add("d-none")
        upred1.classList.remove("d-none")
    }
        
    
    else if(flag){
        upgreen.classList.add("d-none")
        upred1.classList.add("d-none")
        upred2.classList.remove("d-none")
    }
        

    else{
        arr.push(obj)
        localStorage.setItem("arr",JSON.stringify(arr))
        upgreen.classList.remove("d-none")
        upred1.classList.add("d-none")
        upred2.classList.add("d-none")
    }

})

tosignin.addEventListener("click",function(){
    upname.value=""
    upemail.value=""
    uppass.value=""
    upp.classList.add("d-none")
    inn.classList.remove("d-none")
    upgreen.classList.add("d-none")
    upred1.classList.add("d-none")
    upred2.classList.add("d-none")
})


logout.addEventListener("click",function(){
    home.classList.add("d-none")
    inn.classList.remove("d-none")
})

