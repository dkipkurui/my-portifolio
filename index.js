var tablink = document.querySelectorAll(".tab-link");
var tabcontents = document.querySelectorAll(".tabcontent");

function opentab(tabname){
    for(tab of tablink){
        tab.classList.remove("active-link");
    }
    for(tabcontent of tabcontents){
        tabcontent.classList.remove("active-tab");
    }
    
        event.currentTarget.classList.add("active-link");
        document.getElementById(tabname).classList.add("active-tab");
    
    
    
}



        function showCertifcation(){
                var btn = document.querySelector("#revealbtn");
                var cert = document.querySelector(".cerification");
                btn.addEventListener('click', ()=>{
                    cert.classList.remove("show");
                });
                showCertifcation();
        }


    