const iniciar =()=>{

    let searchBtn =document.querySelector("#search-btn");
    let searchBar =document.querySelector(".search-bar-container");
    let formhBtn =document.querySelector("#login-btn");
    let loginForm =document.querySelector(".login-form-container");
    let formClose =document.querySelector("#form-close");
    let menu =document.querySelector("#menu-bar");
    let navbar =document.querySelector(".navbar");
    
    let videoBtn = document.querySelectorAll('.vid-btn')//ALL para todos VidBtn
    
    window.onscroll = () => {
        searchBtn.classList.remove('fa-times');
        searchBar.classList.remove('active');
        menu.classList.remove('fa-times');
        navbar.classList.remove('active');
        loginForm.classList.remove('active')
        
    }
    
    menu.addEventListener('click', ()=>{
        menu.classList.toggle('fa-times');
        navbar.classList.toggle('active');
    });
    
    searchBtn.addEventListener('click', ()=>{
        searchBtn.classList.toggle('fa-times');//X pesquisa
        searchBar.classList.toggle('active');//tag dentro css
    });
    
    formhBtn.addEventListener('click', ()=>{
        loginForm.classList.add('active')
    });
    
    formClose.addEventListener('click', ()=>{
        loginForm.classList.remove('active')
    });

    // ========== Slider menu incial dificl o simples esta no final   ==========
    
    //forEach função de callback parece um For ou Map percorre toda class 
    // videoBtn.forEach (btn =>{
    //     btn.addEventListener('click', ()=>{//função ao clickar 
    //         document.querySelector('.controls .active').classList.remove('active');//remover click 
    //         btn.classList.add('active');// adicionar os elmentos abaixo 
    //         let src =btn.getAttribute('data-src'); // add atributo data src
    //         document.querySelector('#video-slider').src =src; //puxa os outro videos
            
    //     });
        
    // });

    var swiper = new Swiper(".container-slider", {
        spaceBetween:20 ,
        loo:true,
        autoplay: {
            delay: 3500,
            disableOnInteraction: false,
        },
        breakpoints:{
            640: {
                slidesPerView: 1,
            },
            
            768: {
                slidesPerView: 2,
            },
            
            1024:{
                slidesPerView: 3,
            },
        },
        
    });
    
    var swiper = new Swiper(".brand-slider", {
        spaceBetween:20 ,
    loo:true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    breakpoints:{
        480: {
            slidesPerView: 2,
        },
        
        780: {
            slidesPerView: 3,
        },
        
        965:{
            slidesPerView: 4,
        },
    },
    
});

const email = document.querySelector('#email');
const password= document.querySelector('#password');
const vbtn = document.querySelector(".btn");
const small= document.querySelector(".p1");
const small2= document.querySelector(".p2");
    
// ====== VALIDAÇÃO LOGIN  ===========
    
vbtn.addEventListener('click',(enviar)=> {
    const userEmail = email.value.trim();//tira os espaço, nao envia vazio função/metodo js . 
    const userpwd = password.value.trim();

    if(userEmail=== ''){
        console.log(`${email} prencha email`)
        small.textContent =("[ERRO] Usuario invalido")
        document.querySelector('#email').style.border= ".1rem solid red";
        enviar.preventDefault();                
        }else{
            document.querySelector('#email').style.border= ".1rem solid #4ECA64";
            small.textContent = ""
        }

        if( userpwd ===''){
            console.log(`${password},  prencha email`)
            small2.textContent =(`Senha Invalida`)
            document.querySelector('#password').style.border= ".1rem solid red";
            enviar.preventDefault();

        } else if (userpwd.length >5 ||  userpwd.length<7 ){
            small2.textContent =(`Senha tem que ter no minimo 6 caracteres`)
            document.querySelector('#password').style.border= ".1rem solid red";
        }
        else{
            document.querySelector('#password').style.border= ".1rem solid #4ECA64";
            small2.textContent = ``
        }


    })
    

} 
window.onload =iniciar
//existe atitudes melhores que atitudes . ideias melhore que ideias . porem nao existe uma pessoa melhor que a outra (nao existe um ser melhor que outro )

// slide simples 

function img1 (){
    document.querySelector('#video1').src="images/vid-1.mp4";
    btn.classList.add('active')
}
function img2 (){
    document.querySelector('#video1').src="images/vid-2.mp4";
    btn.classList.add('active')
}

// function img3 (){
//     document.querySelector('#video1').src="images/vid-3.mp4";
// }

function img4 (){
    document.querySelector('#video1').src="images/vid-4.mp4";
}


