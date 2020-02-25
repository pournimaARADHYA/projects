function Validate(){
    var name=document.getElementById("na").value
    console.log(na)
    localStorage.setItem("username",name)
    var accNum=document.getElementById("accNum").value
    console.log(accNum)
    localStorage.setItem("accnum",accNum)
    var ifsc=document.getElementById("ifc").value
    console.log(ifsc)
    localStorage.setItem("ifsc",ifsc)
    var gender=document.getElementById("gen").value
    console.log(gender)
    var pw=document.getElementById("pw").value
    console.log(pw)
    localStorage.setItem("password",pw)
    var cpw=document.getElementById("cpw").value
    console.log(cpw)
    var emid=document.getElementById("emid").value
    console.log(emid)
    var Balance=0;
    localStorage.setItem("balance",Balance)
    var count=0
    if(name.length===0){
        document.getElementById("msgna").innerHTML="Enter your User-Name";
       count=count+1// return false;
    }
    if(!(/^[a-zA-Z]{3,15}$/.test(name))){
        document.getElementById("msgna").innerHTML="**Please enter User-Name which is more than 3 char and less than 15";
        count=count+1//return false;
    }
    if(accNum.length===0){
        document.getElementById("msgacc").innerHTML="**Please enter your account Number";
        count=count+1// return false;
    }
    if(!(/^[0-9]{1,10}$/.test(accNum))){
        document.getElementById("msgacc").innerHTML="**your account number is invalid";
        count=count+1// return false;
    }
    if(ifsc.length===0){
        document.getElementById("msgifc").innerHTML="**Please enter IFSC Code"
        count=count+1//return false;
    }
    if(!(/^OATH0\d\d\d\d\d$/.test(ifsc))){
        document.getElementById("msgifc").innerHTML="**IFSC Code is Invalid"
        count=count+1// return false;
    }
    if(pw.length===0){
        document.getElementById("msgpw").innerHTML="**Please enter Password"
        count=count+1//return false;
    }
    if(!/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/.test(pw)){
        document.getElementById("msgpw").innerHTML="**Password should contain atleast one uppercase,one lowercase,one digit "
        count=count+1//return false;
    }
    if(!(pw===cpw)){
        document.getElementById("msgcpw").innerHTML="**Password and confirm-password not matching"
        count=count+1// return false;
    }
    if(emid.length===0){
        document.getElementById("msgemid").innerHTML="**Please enter email-id"
        count=count+1// return false;
    }
    if(!/[a-zA-z0-9]+.com$/.test(emid)){
        document.getElementById("msgemid").innerHTML="**email-id is invalid"
        count=count+1//return false;
    }
    if(count>0){
        return false;
    }
    
}

//login validation
//document.getElementById("su").addEventListener("click",logIn())
function logIn(){
    console.log("aasdfg")
    
    var name=document.getElementById("nam").value;
    var password=document.getElementById("pass").value;
    var user= localStorage.getItem("username")
    var passer=localStorage.getItem("password")
    console.log(user)
    console.log(passer)
    var count=0
    if(!(name===user)){
        document.getElementById("msgname").innerHTML="**Invalid user name"
        count=count+1//return false;
    }
    //console.log(password===passer)
    if(!(password===passer)){
        document.getElementById("msgpass").innerHTML="**Invalid password"
        count=count+1//return false;
    }
    if(count>0){
        return false;
    }
    
}
        // if(name.length===0){
        //     document.getElementById("msgname").innerHTML="**Please enter name"
        //     count=count+1//return false;
        // }
        // if(password.length===0){
        //     document.getElementById("msgpass").innerHTML="**Please enter Password"
        //     count=count+1//return false;
        // }
        //console.log(name===user)