let button=document.getElementById("btn")
let name=document.getElementById("UserName")
let email=document.getElementById("UserEmail")
let pswd=document.getElementById("UserPswd")
button.addEventListener("click",(e)=>{
    e.preventDefault()
    const nameValue=name.value
    const emailValue=email.value
    const pswdValue=pswd.value
    localStorage.setItem("name",nameValue)
    localStorage.setItem("email",emailValue)
    localStorage.setItem("pswd",pswdValue)
    alert("signup done successfully!!!!!!!!!!")
    setTimeout(()=>{
        window.location.href="login.html"
    },3000)
})

const loginbtn=document.getElementById("btn")
loginbtn.addEventListener("click",()=>{
    let namestorage=localStorage.getItem("name")
    let pswdstorage=localStorage.getItem("pswd")
    let inputusername=document.getElementById("UserName").value
    let inputuserpswd=document.getElementById("UserPswd").value
    document.body.style.backgroundColor="lightblue";
    if(namestorage==inputusername && pswdstorage==inputuserpswd){
        alert("login done successfully!!!!!!!")
        setTimeout(()=>{
            window.open("homepage.html")

        },5000)
    }else{
        alert("oops invalid credentials")

        }
        
    }
)
