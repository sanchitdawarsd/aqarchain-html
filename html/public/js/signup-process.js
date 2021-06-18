function step1Completed() 
{
  $("#signup-section_1").toggleClass("d-none")
  $("#signup-section_2").toggleClass("d-block")
}

function step2Completed() 
{
    $("#signup-section_2").removeClass("d-block")
    $("#signup-section_3").toggleClass("d-block")
} 

function step3Completed() 
{
    $("#signup-section_3").removeClass("d-block")
    $("#signup-section_4").toggleClass("d-block")
} 

function step4Completed() 
{
    $("#signup-section_4").removeClass("d-block")
    $("#signup-section_5").toggleClass("d-block")
} 

function step5Completed() 
{
    $("#signup-section_5").removeClass("d-block")
    $("#signup-section_6").toggleClass("d-block")
} 