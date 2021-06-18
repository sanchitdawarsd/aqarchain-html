function changeActiveTab(tab)
{ 
    $('.nav-tabs a[href="#' + tab + '"]').tab('show');
}

$(function () {
    $('body').prepend($('<div class="overlay"></div>'));
    $('#sidebarCollapse').on('click', function () {
        if($('#sidebar').hasClass('active'))
        {
            $('#sidebar').removeClass('active');
            $('body').removeClass('has-overlay');
        }
        else
        {
            $('#sidebar').addClass('active');
            $('body').addClass('has-overlay');
        }
    });

    $('.overlay, #sidebar a').on('click', function () {
        $('#sidebar').removeClass('active');
        $('body').removeClass('has-overlay');
    });
    $('[data-toggle="tooltip"]').tooltip();
});

function step1Completed() 
{
  $("#dashboard-settings-nav-tab-security").addClass("d-none").removeClass("d-block")
  $("#dashboard-settings-nav-tab-security-change-email").toggleClass("d-block")
}

function step2Completed() 
{
    $("#dashboard-settings-nav-tab-security-change-email").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-reset-otp").toggleClass("d-block")
} 

function step3Completed() 
{
    $("#dashboard-settings-nav-tab-security-reset-otp").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-updated").toggleClass("d-block")
} 

function step4Completed() 
{
    $("#dashboard-settings-nav-tab-security-updated").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security").toggleClass("d-block")
} 

function step5Completed() 
{
  $("#dashboard-settings-nav-tab-security").addClass("d-none").removeClass("d-block")
  $("#dashboard-settings-nav-tab-security-change-password").toggleClass("d-block")
}

function step6Completed() 
{
  $("#dashboard-nav-tab-dashboard").addClass("d-none").removeClass('active show d-block')
  $("#dashboard-nav-tab-buynow").toggleClass("d-none").toggleClass("active").toggleClass("show")
  $("#dashboard-buynowbtn-nav-tabs-content").addClass("d-block active show")
  $("#dashboard-buynowbtn-nav-tab-usdt-next-tab").removeClass('d-block active show')
}

function step7Completed() 
{
   
    $("#dashboard-buynowbtn-nav-tabs-content").addClass("d-none").removeClass("d-block")
    $("#dashboard-buynowbtn-nav-tab-usdt-next-tab").toggleClass("d-block").toggleClass("active").toggleClass("show")
} 

function step8Completed() 
{
   
    $("#dashboard-buynowbtn-nav-tab-usdt-next-tab").addClass("d-none").removeClass("d-block")
    $("#dashboard-buynowbtn-nav-tab-usdt-retry-tab").toggleClass("d-block").toggleClass("active").toggleClass("show")
} 
function step9Completed() 
{
   
    $("#dashboard-buynowbtn-nav-tab-usdt-retry-tab").removeClass("d-block")
    $("#dashboard-nav-tab-dashboard").addClass("d-block active show")
    $("#dashboard-nav-tab-buynow").removeClass('d-block active show').addClass('d-none')
} 

function step10Completed()
{
    $("#dashboard-settings-nav-tab-wallet-address").addClass("d-block").removeClass("d-none")
    $("#dashboard-settings-nav-tab-kyc").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-change-email").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-reset-otp").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-updated").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-change-password").addClass("d-none").removeClass("d-block")

}

function step11Completed()
{
    $("#dashboard-settings-nav-tab-wallet-address").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-kyc").addClass("d-block").removeClass("d-none")
    $("#dashboard-settings-nav-tab-security").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-change-email").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-reset-otp").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-updated").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security-change-password").addClass("d-none").removeClass("d-block")

}

function step12Completed()
{
    $("#dashboard-settings-nav-tab-wallet-address").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-kyc").addClass("d-none").removeClass("d-block")
    $("#dashboard-settings-nav-tab-security").addClass("d-block").removeClass("d-none")
    // $("#dashboard-settings-nav-tab-security-change-email").addClass("d-none").removeClass("d-block")
    // $("#dashboard-settings-nav-tab-security-reset-otp").addClass("d-none").removeClass("d-block")
    // $("#dashboard-settings-nav-tab-security-updated").addClass("d-none").removeClass("d-block")
    // $("#dashboard-settings-nav-tab-security-change-password").addClass("d-none").removeClass("d-block")
}

function step13Completed()
{
    $("#dashboard-nav-tab-dashboard").removeClass("d-none").addClass("show active")
    $("#dashboard-nav-tab-buynow").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-transactions").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-settings").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-staking").addClass("d-none").removeClass("d-block")

    
}

function step14Completed()
{
    $("#dashboard-nav-tab-dashboard").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-buynow").addClass("d-block").removeClass("d-none")
    $("#dashboard-nav-tab-transactions").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-settings").addClass("d-none").removeClass("d-block")
}

function step15Completed()
{
    $("#dashboard-nav-tab-dashboard").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-buynow").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-transactions").addClass("d-block").removeClass("d-none")
    $("#dashboard-nav-tab-staking").addClass("d-none").removeClass("d-block")

    $("#dashboard-nav-tab-settings").addClass("d-none").removeClass("d-block")
}

function step16Completed()
{
    $("#dashboard-nav-tab-dashboard").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-buynow").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-transactions").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-staking").addClass("d-none").removeClass("d-block")

    $("#dashboard-nav-tab-settings").addClass("d-block").removeClass("d-none")
}

function step17Completed()
{
    console.log('#dashboard-nav-tab-staking')
    $("#dashboard-nav-tab-dashboard").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-buynow").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-transactions").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-staking").addClass("d-block").removeClass("d-none")
    $("#dashboard-nav-tab-settings").addClass("d-none").removeClass("d-block")
}

function step18Completed()

{
    $("#dashboard-nav-tab-users").addClass("d-block").removeClass("d-none")
    $("#dashboard-nav-tab-token").addClass("d-none").removeClass("d-block")
    $("#transaction-table").addClass("d-none").removeClass("d-block")

}

function step19Completed()

{
    $("#dashboard-nav-tab-users").addClass("d-none").removeClass("d-block")
    $("#dashboard-nav-tab-token").addClass("d-block").removeClass("d-none")
    $("#transaction-table").addClass("d-none").removeClass("d-block")
    $("#token-nav-content").addClass("d-block").removeClass("d-none")
    $("#view-table").addClass("d-none").removeClass("d-block")
    $("#view-table-for-allocation").addClass("d-none").removeClass("d-block")


}


function step20Completed()

{
    $("#dashboard-nav-tab-users").addClass("d-none").removeClass("d-block")
    $("#transaction-table").addClass("d-block").removeClass("d-none")
}

function step21Completed()

{
    $("#token-nav-content").addClass("d-none").removeClass("d-block")
    $("#view-table").addClass("d-block").removeClass("d-none")
}

function step22Completed()

{
    $("#token-nav-content").addClass("d-none").removeClass("d-block")
    $("#view-table-for-allocation").addClass("d-block").removeClass("d-none")
}

function step23Completed()

{
    $("#dashboard-nav-tab-users").addClass("d-block active show")
    $("#transaction-table").removeClass('d-block active show').addClass('d-none')
}

function step24Completed()

{
    $("#token-nav-content").removeClass("d-none").addClass("d-block active show")
    $("#view-table").removeClass("d-block show active").addClass("d-none")

}

function step25Completed()

{
    $("#token-nav-content").removeClass("d-none").addClass("d-block active show")
    $("#view-table-for-allocation").removeClass("d-block show active").addClass("d-none")
}
function step26Completed()

{
    $("#checkmark").removeClass("d-none").addClass("d-block active show")
}

function step27Completed()

{
    $("#checkmark1").removeClass("d-none").addClass("d-block active show")
}


