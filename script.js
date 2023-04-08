function converttoinches(){
    let cmvalue=Number(document.getElementById("input").value)
    let inval=cmvalue/2.54
    let result=document.getElementById("result")
    result.innerHTML=inval.toFixed(2) +" inches"
}
function converttomillimeter(){
    let cmvalue=Number(document.getElementById("input").value)
    let inval=cmvalue/1000
    let result=document.getElementById("result")
    result.innerHTML=inval.toFixed(2) +" millimeter"
}
function converttometer(){
    let cmvalue=Number(document.getElementById("input").value)
    let inval=cmvalue/100
    let result=document.getElementById("result")
    result.innerHTML=inval.toFixed(2) +" meter"
}
function converttofeet(){
    let cmvalue=Number(document.getElementById("input").value)
    let inval=cmvalue
    let result=document.getElementById("result")
    result.innerHTML=inval.toFixed(2) +" feet"
}
