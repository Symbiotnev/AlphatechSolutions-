let words=document.querySelectorAll(".word");
words.forEach((word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach((letter)=>{
        let span =document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});
let currentwordindex =0;
let maxwordindex =words.length-1;
words[currentwordindex].style.opacity="1";
let changeText =()=>{
    let currentword=words[currentwordindex];
    let nextword=currentwordindex ===maxwordindex ? words[0]:words[currentwordindex +1];
    Array.from(currentword.children).forEach((letter,i)=>{
        setTimeout(()=>{
            letter.className ="letter out";
        },i * 80);
    });
    nextword.style.opacity ="1";
    Array.from(nextword.children).forEach((letter,i)=>{
        letter.className="letter behind";
        setTimeout(()=>{
            letter.className ="letter in";
        },340 + i *80);
    });
    currentwordindex =currentwordindex ===maxwordindex ? 0 : currentwordindex +1;
};
changeText();
setInterval(changeText,3000);

//circle skill//
const circles =document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked =elem.getAttribute("data-percent");
    var percent =Math.floor(dots*marked/100);
    var points="";
    var rotate=360/dots;

    for(let i=0 ;i < dots; i++){
        points +='<div class ="points" style="--i:${i}; --rot:${rotate}deg"></div>';
    }
    elem.innerHTML = points;
const pointsmarked =elem.querySelectorAll('.points');
for(let i=0;i<percent; i++){
pointsmarked[i].classList.add("marked")
}
 })
 //Active Menu//
 let menuli =document.querySelectorAll('header ul li a');
 let section =document.querySelectorAll('section');

 function activeMenu(){
let len =section.length;
while(--len && window.scrollY +97 <section[len].offsetTop){}
menuli.forEach(sec=> sec.classList.remove("active"));
menuli[len].classList.add("active");
 }
 
    activeMenu();
    window.addEventListener("scroll",activeMenu);

     //Sticky Navbar//
     const header=document.querySelector("header");
     window.addEventListener("scroll",function(){
        header.classList.toggle("sticky",window.scrollY > 50)
     })

      //Sticky Navbar//
      let menuicon =document.querySelector("#menu-icon");
      let navlist = document.querySelector(".navlist");

      menuicon.onclick =()=>{
        menuicon.classList.toggle("bx-x");
        navlist.classList.toggle("open");
      }

      window.onscroll =()=>{
        menuicon.classList.remove("bx-x");
        navlist.classList.remove("open");
      }

        //Paralax//
        const observer=new IntersectionObserver((entries)=>
{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");
        }else{
            entry.targetclassList.remove("show-items");
        }
    });
});
const scrollscale =document.querySelectorAll(".scroll-scale");
scrollscale.forEach((el)=>observer.observe(el));

const scrollbottom =document.querySelectorAll(".scroll-bottom");
scrollbottom.forEach((el)=>observer.observe(el));

const scrolltop =document.querySelectorAll(".scroll-top");
scrolltop.forEach((el)=>observer.observe(el));

/*Contact Input */

        