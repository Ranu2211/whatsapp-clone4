
    var rightbtn = document.getElementById("rightbtn");
var sidenav = document.getElementById("sidenav");
var rightnav = document.getElementById("rightnav");
sidenav.style.right="-168px";
rightbtn.onclick = function(){
       if(sidenav.style.right=="-168px"){
        sidenav.style.right="4px";
       
       }
       else{
           sidenav.style.right="-168px";
         //   <i id="rightnav" class="fa fa-ellipsis-v"></i>;

       }
     
    }

