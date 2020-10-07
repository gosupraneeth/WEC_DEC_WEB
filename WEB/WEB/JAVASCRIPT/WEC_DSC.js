// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    //document.getElementById("navbar").style.padding = "30px 10px";
   // document.getElementById("navbar").style.height = "10vh";
    document.getElementById("logo").style.height = "60px";
    //document.getElementById("lazy").style.opacity = "1";
    document.getElementById("logo").style.width = "60px";
    document.getElementById("myBtn").style.display = "block";
    document.getElementById("navbar").classList.add("sticky");
    document.getElementById("navbar").classList.add("shadow");
    
  } else {
    //document.getElementById("navbar").style.height = "14vh";
    document.getElementById("logo").style.height = "85px";
    //document.getElementById("lazy").style.opacity = "0";
    document.getElementById("logo").style.width = "85px";
    document.getElementById("myBtn").style.display = "none";
    document.getElementById("navbar").classList.remove("sticky");
    document.getElementById("navbar").classList.remove("shadow");
  }

  if (document.body.scrollTop > 450 || document.documentElement.scrollTop > 450){
    document.getElementById("lazy").style.opacity = "1";
  }
  else{
    document.getElementById("lazy").style.opacity = "0"; 
  }
}


// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}





