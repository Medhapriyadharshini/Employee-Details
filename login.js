function login(){
    let username=document.getElementById("uname").value 
    let password=document.getElementById("pswd").value

    localStorage.getItem("USERNAME",username)
    localStorage.getItem("PASSWORD",password)


    window.location="./index.html"
}

