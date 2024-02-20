// const link1 = document.querySelector(".nav-link1")
// const link2= document.querySelector(".nav-link2")
// const link3 = document.querySelector(".nav-link3")
// const link4 = document.querySelector(".nav-link4")

// const link = document.querySelectorAll(".nav-link")

// const nav1 = document.querySelector(".div-nav1")
// const nav2 = document.querySelector(".div-nav2")
// const nav3 = document.querySelector(".div-nav3")
// const nav4 = document.querySelector(".div-nav4")
// const nav5 = document.querySelector(".div-nav5")



document.addEventListener("click" ,e =>{

    if(e.target.matches(".nav-link1")){
        // console.log(e.target)
        document.querySelector(".nav-link1").classList.add("text-[#282626]")
     
    }else{
        document.querySelector(".nav-link1").classList.remove("text-[#282626]")
        
    }
    if(e.target.matches(".nav-link2")){
        // console.log(e.target)
        document.querySelector(".nav-link2").classList.add("text-[#282626]")
     
    }else{
        document.querySelector(".nav-link2").classList.remove("text-[#282626]")
        
    }
    if(e.target.matches(".nav-link3")){
        // console.log(e.target)
        document.querySelector(".nav-link3").classList.add("text-[#282626]")
     
    }else{
        // link.classList.remove(".text-[#282626]") 
        document.querySelector(".nav-link3").classList.remove("text-[#282626]")
        
    }
    if(e.target.matches(".nav-link4")){
        // console.log(e.target)
        document.querySelector(".nav-link4").classList.add("text-[#282626]")
     
    }else{
        // link.classList.remove(".text-[#282626]") 
        document.querySelector(".nav-link4").classList.remove("text-[#282626]")
        
    }
   
    if(e.target.matches("#boton-menu")){
        document.querySelector(".nav-mobile").classList.add("active")

    }else {
        document.querySelector(".nav-mobile").classList.remove("active")
    }

})


