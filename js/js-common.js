gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

var BASE_URL=$('#base-route').val();
function showMessage(type,message) {
    switch(type){
        case 'success':alertify.success(message);break;
        case 'info':alertify.message(message);break;
        case 'warning':alertify.warning(message);break;
        case 'danger':alertify.error(message);break;
        case 'primary':alertify.primary(message);break;
        case 'secondary':alertify.secondary(message);break;
    }
}

$.ajaxSetup({
    headers: {
    'X-CSRF-TOKEN': $('meta[name="csrf-token"]').attr('content'),
    }
});

function logout() {
    const swalWithBootstrapButtons = Swal.mixin({
        customClass: {
        confirmButton: 'btn btn-success',
        cancelButton: 'btn btn-danger'
        },
        buttonsStyling: false
    })
    Swal.fire({
        title: 'Are you sure?',
        text: "You want to logout!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Yes, logout!',
        cancelButtonText: 'No, cancel!',
        reverseButtons: true
    }).then((result) => {
        if (result.isConfirmed) {
            window.location = BASE_URL + '/logout-me';
        }
    })
}

function toolTipEnable() {
    [].slice.call(document.querySelectorAll('[data-bs-toggle="popover"]')).map(function (e) {
        return new bootstrap.Popover(e);
    })
}

$( document ).ajaxComplete(function() {
    toolTipEnable();
    ScrollTrigger.refresh();
});

// $(window).on('resize', function () {
//     ScrollTrigger.refresh();
// });

function scrollToDiv(div){
    gsap.to(window, {duration: 2, scrollTo:"#"+div});
}

window.onorientationchange = function() { location.reload() };