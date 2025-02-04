$('#lets-connect-add-form').validate({
    rules: {
        name: {
            required: true,
        },
        clinic: {
            required: true,
        },
        email: {
            required: true,
        },
        pincode: {
            required: true,
        },
        address: {
            required: true,
        },
        phone: {
            required: true,
        },
    },
    messages: {
        name: "Doctor's name field is required",
        clinic: "Clinic's name field is required",
        email: "Email field is required",
        pincode: "Pincode field is required",
        address: "Address field is required",
        phone: "Doctor's phone field is required",
    },
    errorElement: 'span',
    submitHandler: function (form, event) {
        //
        var formData = new FormData($(form)[0]);
        $('.error').html('');
        var submitButton = $(form).find('[type=submit]');
        var current_btn_text = submitButton.html();
        button_loading_text = 'Submitting...';
        // Create
        $.ajax({
            type: "POST",
            url: BASE_URL + '/submit-lets-connect',
            contentType: false,
            processData: false,
            data: formData,
            cache: false,
            beforeSend: function () {
                submitButton.html(`
                    <span class="spinner-border spinner-border-sm"></span>
                    `+ button_loading_text + `
                `).attr('disabled', true);
            },
            success: function (response) {
                if (response.status) {
                    showMessage('success', response.message);
                    $('#lets-connect-add-form').trigger('reset');
                } else {
                    showMessage('warning', response.message);
                }
            },

            error: function (response) {
                submitButton.html(current_btn_text).attr('disabled', false);
                if (response.responseJSON.errors) {
                    $.each(response.responseJSON.errors, function (i, v) {
                        element = $(form).find('[name=' + i + ']');
                        element.addClass('is-invalid');
                        if ($(form).find('#' + i + '-error').length) {
                            $(form).find('#' + i + '-error').html(v).show();
                        } else {
                            element.closest('.form-group').
                                append(`<span id="` + i + `-error" class="error invalid-feedback">` + v + `</span>`);
                            $('.error').show();
                        }
                        element.attr('aria-invalid', true);
                        element.attr("area-describedby", i + "-error");
                        element.focus();
                    });
                }
                else {
                    showMessage('warning', 'Something went wrong...');
                }
            },
            complete: function () {
                submitButton.html(current_btn_text).attr('disabled', false);
            }
        });
        event.preventDefault();
    },
    highlight: function (element, errorClass, validClass) {
        $(element).addClass('is-invalid');
    },
    unhighlight: function (element, errorClass, validClass) {
        $(element).removeClass('is-invalid');
    }
});

$('.three_steps_onhover').on('mouseenter', function () {
    var image = $(this).data('image');
    gsap.set("#steps-img", { attr: { src: image }, duration: 1000, easing: "power4.inOut" });
});
