/*var dep=function(){
    var draw=document.getElementById("two").checked
    var withdraw=document.getElementById("three").checked
    let ab=document.getElementById("five").value
    let amount=document.getElementById("nine").value
    if(draw==true){
        let total=Number(ab)+Number(amount)
        console.log(total)
    }else{
        let total=Number(ab)-Number(amount)
        console.log(total)
        
    }
}*/


function validate() {
    // var total=1000;
    var amount=document.getElementById("five").value
    // console.log("amount "+amount)
    var draw=document.getElementById("two").checked
    var withdraw=document.getElementById("three").checked
    var desc = document.getElementById("ten").value
    
    var amount2=document.getElementById("nine").value
    console.log("amount "+amount)
    if(draw==true){
        alert("AMOUNT DEPOSITED")
        var total=Number(amount2)+Number(amount)
        amount=total
        document.getElementById("five").value=amount
        console.log(total)
        var date=new Date().getDate();var day=new Date().getDay();var year=new Date().getFullYear();
        var data = document.getElementsByTagName("table")[0] 
        var newRow = data.insertRow() 
        var cel1 = newRow.insertCell(0) 
        var cel2 = newRow.insertCell(1)
        var cel3 = newRow.insertCell(2)
        var cel4 = newRow.insertCell(3)
        cel1.innerHTML = amount2
        cel2.innerHTML = desc
        cel3.innerHTML = total
        cel4.innerHTML = date+"-"+day+"-"+year
        document.getElementById("availbal").innerHTML=total
    }else if(withdraw==true){
        let amount2=document.getElementById("nine").value
        if(amount2>amount||amount2==0){
            alert("Not able to withdraw")
        }else{
            alert("AMOUNT WITHDRAWN")
            var total=Number(amount)-Number(amount2)
            amount=total
            document.getElementById("five").value=amount
            console.log(total)
            var date=new Date().getDate();var day=new Date().getDay();var year=new Date().getFullYear();
            var data = document.getElementsByTagName("table")[1] 
            var newRow = data.insertRow() 
            var cel1 = newRow.insertCell(0) 
            var cel2 = newRow.insertCell(1)
            var cel3 = newRow.insertCell(2)
            var cel4 = newRow.insertCell(3)
            cel1.innerHTML = amount2
            cel2.innerHTML = desc
            cel3.innerHTML = total
            cel4.innerHTML = date+"-"+day+"-"+year
            document.getElementById("availbal").innerHTML=total
        }
    }
    else{
        document.getElementById("baby").innerHTML="Enter mode of operation"
    }
    
    
    
}




/*
var dep=function(){
let ab=document.getElementById("five").value
let amount=document.getElementById("nine").value

let total=Number(ab)+Number(amount)
console.log(typeof total)
console.log("Total balance is"+Number(total))
}*/