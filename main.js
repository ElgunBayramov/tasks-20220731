document.body.style.backgroundColor='black';
document.body.style.margin=0;
document.body.style.padding=0;
document.body.style.boxSizing='border-box';
document.body.style.fontFamily = '"Montserrat", sans-serif';
document.body.style.display='flex';
document.body.style.lineHeight='1.5';
document.body.style.fontSize='15px';
const nav=document.createElement('nav');
nav.classList.add("navbar");
const img=document.createElement('img');
img.src='https://www.w3schools.com/w3images/avatar_smoke.jpg';
nav.style.width='120px';
nav.style.height='100vh';
nav.style.position='sticky';
nav.style.top='0px';
// nav.style.zIndex='1';
nav.style.display='flex';
nav.style.flexDirection='column';
nav.style.backgroundColor='#222';
document.body.appendChild(nav);
nav.appendChild(img);
const navElements=['Home','About','Photos','Contact'];
navElements.forEach(function (item){    
    const anchorElement=document.createElement('a');
    const iconElement=document.createElement('i');
    const paragraph=document.createElement('p');
    nav.appendChild(anchorElement);
    anchorElement.href=`${item}`;
    anchorElement.appendChild(iconElement);
    iconElement.classList.add("fa");
    anchorElement.appendChild(paragraph);
    paragraph.innerText = item;
    anchorElement.style.textAlign = "center";
    anchorElement.style.textDecoration = "none";
    anchorElement.style.height="60px"
    anchorElement.style.padding = "20px 12px";
    anchorElement.style.fontSize="13px";
    anchorElement.addEventListener("mouseover", mouseOver);
    anchorElement.addEventListener("mouseout", mouseOut);
    iconElement.style.fontSize = "36px";
    iconElement.style.color = "white";
    paragraph.style.color="white";
    paragraph.style.textTransform="uppercase";
    paragraph.style.margin="10px 0";
    
    if (item == "Home") {
        // anchorElement.classList.add("black");
        anchorElement.style.backgroundColor = "black";
        
    }
    function mouseOver() {
        anchorElement.style.backgroundColor = "black";
        if (item == "Home") {
            // anchorElement.classList.add("black");
            anchorElement.style.backgroundColor = "#fff";
            iconElement.style.color='black';
            paragraph.style.color='#000'
            
        }
      }
      
      function mouseOut() {
        anchorElement.style.backgroundColor = "#222";
        if (item == "Home") {
            // anchorElement.classList.add("black");
            anchorElement.style.backgroundColor = "black";
            iconElement.style.color='white';
            paragraph.style.color='white'
            
        }
      }
     
})
const iconHome=document.querySelector(".navbar a:first-of-type .fa");
iconHome.classList.add("fa-home");
const iconUser=document.querySelector(".navbar a:nth-of-type(2) .fa");
iconUser.classList.add("fa-user");
const iconEye=document.querySelector(".navbar a:nth-of-type(3) .fa");
iconEye.classList.add("fa-eye");
const iconEnvelope=document.querySelector(".navbar a:last-of-type .fa");
iconEnvelope.classList.add("fa-envelope");   

const div = document.createElement("div");
div.classList.add("header");
document.body.appendChild(div);
div.style.color="white";
div.style.padding="12px 24px"
div.style.margin="0 auto"


const homeSection=document.createElement("div");
homeSection.classList.add("home");
homeSection.setAttribute('id','Home');
div.appendChild(homeSection);
homeSection.style.textAlign="center";
const h1=document.createElement("h1");
h1.innerText="I'm John Doe.";
h1.style.fontWeight="400";
h1.style.fontSize="64px";
h1.style.margin="10px 0"
homeSection.appendChild(h1);
const paragraph=document.createElement("p");
paragraph.innerText="Photographer and Web Designer.";
paragraph.style.margin="15px 0";
homeSection.appendChild(paragraph);
const imgHome=document.createElement("img");
imgHome.src="https://www.w3schools.com/w3images/man_smoke.jpg";
imgHome.style.width="992px";
imgHome.style.height="1108px";
homeSection.appendChild(imgHome)


const aboutSection=document.createElement("div");
aboutSection.classList.add("about");
aboutSection.setAttribute('id','About');
aboutSection.style.margin="0 250px";
aboutSection.style.padding="64px 92px"
div.style.textAlign='center';
div.appendChild(aboutSection)

const h2Tag=document.createElement("h2");
h2Tag.innerText="My Name";
h2Tag.style.fontWeight=400;
h2Tag.style.fontSize="30px";
h2Tag.style.textAlign='left';
h2Tag.style.margin="10px 0";
h2Tag.style.color="#f1f1f1";
aboutSection.appendChild(h2Tag)

const hrTag=document.createElement("hr");
hrTag.style.width="200px"
hrTag.style.border="0";
hrTag.style.margin="20px 0";
hrTag.style.borderTop="1px solid #eee";
hrTag.style.textAlign='center';
hrTag.style.opacity=0.6;
aboutSection.appendChild(hrTag)

const pTag=document.createElement("p");
pTag.style.color="#757575";
pTag.style.margin="15px 0px";
pTag.style.textAlign='left';
// pTag.style.textIndent='100px';
pTag.innerText="Some text about me. Some text about me. I am lorem ipsum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
aboutSection.appendChild(pTag)

const h3Tag=document.createElement("h3");
h3Tag.style.fontWeight=400;
h3Tag.style.margin="10px 0";
h3Tag.style.padding="16px 0";
h3Tag.style.fontSize="24px";
h3Tag.style.textAlign='left';
h3Tag.innerText="My skills"
aboutSection.appendChild(h3Tag)

const Abilities=["Photography","Web Design","Photoshop"];
Abilities.forEach(function(ability){
    const pAbilities=document.createElement("p");
    pAbilities.innerText=ability;
    pAbilities.style.textAlign='left';
    pAbilities.style.margin="15px 0";
    pAbilities.style.letterSpacing="4px";
    pAbilities.style.color="#757575";
    aboutSection.appendChild(pAbilities);
    const whitePart=document.createElement("div");
    whitePart.style.backgroundColor="white";
    aboutSection.appendChild(whitePart)
    const greyPart=document.createElement("div");
    greyPart.style.width="80%";
    greyPart.style.height="28px";
    greyPart.style.backgroundColor="grey";
    whitePart.appendChild(greyPart)
})

const boxSection=document.createElement("div");
boxSection.style.color="black";
boxSection.style.backgroundColor="white";
boxSection.style.margin="16px 0";
boxSection.style.padding="16px 0";
boxSection.style.display="flex";
aboutSection.appendChild(boxSection)

const section=["11+","55+","89+","150+"];
section.forEach(function(sec,index){
    const divSection=document.createElement("div");
    divSection.classList.add("section");
    divSection.style.textAlign="center";
    divSection.style.margin="16px 0";
    divSection.style.width="25%";
    boxSection.appendChild(divSection)
    const spanSection=document.createElement("span");
    spanSection.style.fontSize="24px"
    divSection.appendChild(spanSection)
    spanSection.innerText=sec;
    const brSec=document.createElement("br");
    divSection.appendChild(brSec)
    const texts=["Partners","Projects Done","Happy Clients","Meetings"]
    for(let i=0;i<texts.length;i++){
        if(index==i){
            const span2=document.createElement("span");
            span2.innerText=texts[i];
            divSection.appendChild(span2)
        }
    }   
})


const buttondownload=document.createElement("button");
// buttondownload.style.margin="16px 0";
buttondownload.style.marginRight= '869px';
buttondownload.style.marginTop= '15px';
buttondownload.style.padding="12px 24px";
aboutSection.appendChild(buttondownload);
const iconDowload=document.createElement("i");
iconDowload.classList.add("fa","fa-download");
iconDowload.style.marginRight="5px"
buttondownload.appendChild(iconDowload);
const spanDownload=document.createElement("span");
spanDownload.innerText="Download Resume";
spanDownload.style.color="#757575"
buttondownload.appendChild(spanDownload);

const h3Price=document.createElement("h3");
h3Price.innerText="My Price";
h3Price.style.fontWeight=400;
h3Price.style.margin="10px 0";
h3Price.style.padding="16px 0";
h3Price.style.fontSize="24px";
aboutSection.appendChild(h3Price);

const divPrice=document.createElement("div");
divPrice.style.display="flex";
divPrice.style.justifyContent="space-between";
divPrice.style.padding="8px 0";
divPrice.style.color="#757575";
aboutSection.appendChild(divPrice);


const divHalfPrice1=document.createElement("div");
divHalfPrice1.addEventListener("mouseover", mouseOver2);
divHalfPrice1.addEventListener("mouseout", mouseOut2);
divHalfPrice1.style.width="49%";
divHalfPrice1.style.textAlign="center";
divHalfPrice1.style.marginBottom="16px";
function mouseOver2() {
    divHalfPrice1.style.backgroundColor = "white";
    divHalfPrice1.style.color='black';
  }
  
  function mouseOut2() {
    divHalfPrice1.style.backgroundColor = "#757575";
  }
const divHalfPrice2=document.createElement("div");
divHalfPrice2.addEventListener("mouseover", mouseOver3);
divHalfPrice2.addEventListener("mouseout", mouseOut3);
divHalfPrice2.style.width="49%";
divHalfPrice2.style.textAlign="center";
divHalfPrice2.style.marginBottom="16px";
function mouseOver3() {
    divHalfPrice2.style.backgroundColor = "white";
    divHalfPrice2.style.color='black';
  }
  
  function mouseOut3() {
    divHalfPrice2.style.backgroundColor = "#757575";
  }
divHalfPrice1.classList.add("half-price");
divHalfPrice2.classList.add("half-price");
divPrice.appendChild(divHalfPrice1)
divPrice.appendChild(divHalfPrice2)
const ul1=document.createElement("ul");
ul1.style.listStyle="none";
ul1.style.backgroundColor="white";
ul1.style.opacity=0.6;
ul1.style.paddingLeft=0;
divHalfPrice1.appendChild(ul1)
const properties1=["Basic","Web Design","Photography","5 Storage","Mail Support","",""];
properties1.forEach(function(prop,index){
   const li=document.createElement("li");
   li.innerText=prop;
   li.style.borderBottom="1px solid #ddd";
   if(index==0){
    li.style.backgroundColor="#616161";
    li.style.color="#fff";
    li.style.padding="32px 16px";
   }else if(index!=0){
    li.style.padding="16px";
   }
   if(index==properties1.length-1){
    li.style.borderBottom="none";
    li.style.backgroundColor="#f1f1f1";
    li.style.color="black";
    li.style.padding="24px 16px";
    const liButton=document.createElement("button");
    liButton.innerText="Sign Up";
    liButton.style.backgroundColor="white";
    liButton.style.border="none";
    liButton.style.padding="12px 24px";
    li.appendChild(liButton);
   }
   if(index==properties1.length-2){
    const liH2=document.createElement("h2");
    liH2.innerText="$ 10";
    liH2.style.color="black";
    liH2.style.fontWeight=400;
    liH2.style.fontSize="30px";
    liH2.style.margin="10px 0";
    li.appendChild(liH2)
    const liSpan=document.createElement("span");
    liSpan.innerText="per month";
    liSpan.style.opacity=0.6;
    li.appendChild(liSpan)
   }
   ul1.appendChild(li)
})

const ul2=document.createElement("ul");
ul2.style.listStyle="none";
ul2.style.backgroundColor="white";
ul2.style.opacity=0.6;
ul2.style.paddingLeft=0;
divHalfPrice2.appendChild(ul2)
const properties2=["Basic","Web Design","Photography","50 Storage","Endless Support","",""];
properties2.forEach(function(prop,index){
   const li=document.createElement("li");
   li.innerText=prop;
   li.style.borderBottom="1px solid #ddd";
   if(index==0){
    li.style.backgroundColor="#616161";
    li.style.color="#fff";
    li.style.padding="32px 16px";
   }else if(index!=0){
    li.style.padding="16px";
   }
   if(index==properties2.length-1){
    li.style.borderBottom="none";
    li.style.backgroundColor="#f1f1f1";
    li.style.color="black";
    li.style.padding="24px 16px";
    const liButton=document.createElement("button");
    liButton.innerText="Sign Up";
    liButton.style.backgroundColor="white";
    liButton.style.border="none";
    liButton.style.padding="12px 24px";
    li.appendChild(liButton);
   }
   if(index==properties2.length-2){
    const liH2=document.createElement("h2");
    liH2.innerText="$ 25";
    liH2.style.color="black";
    liH2.style.fontWeight=400;
    liH2.style.fontSize="30px";
    liH2.style.margin="10px 0";
    li.appendChild(liH2)
    const liSpan=document.createElement("span");
    liSpan.innerText="per month";
    liSpan.style.opacity=0.6;
    li.appendChild(liSpan)
   }
   ul2.appendChild(li)
})