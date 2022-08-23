$(document).ready(function(){
    // Add minus icon for collapse element which is open by default
    $(".collapse.show").each(function(){
        $(this).prev(".accordion-header").find(".bi").addClass("bi-x").removeClass("bi-plus");
    });
    
    // Toggle plus minus icon on show hide of collapse element
    $(".collapse").on('show.bs.collapse', function(){
        $(this).prev(".accordion-header").find(".bi").removeClass("bi-plus").addClass("bi-x");
    }).on('hide.bs.collapse', function(){
        $(this).prev(".accordion-header").find(".bi").removeClass("bi-x").addClass("bi-plus");
    });
});
function ValidateEmail(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    var x = document.getElementById("myDIV");
    var y=  document.getElementById("myDIV1");
    if(!inputText.value.match(mailformat))
    {   

        x.style.display="block";
        
    } 
 }
 function ValidateEmail1(inputText)
{
    var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    
    var y=  document.getElementById("myDIV1");
    if(!inputText.value.match(mailformat))
    {   

        
        y.style.display="block";
    } 
 }  