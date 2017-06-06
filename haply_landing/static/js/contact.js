// $(function() {

//     $("input,textarea").jqBootstrapValidation({
//         preventSubmit: true,
//         // additional error messages or events
//         submitError: function ($form, event, errors) {},
//         submitSuccess: function($form, event) {
//             // Prevent spam clicking and default submit behavior
//             $("#btnSubmit").attr("disabled", true);
//             event.preventDefault();
            
//             // Get form values
//             var name = $("input#name").val();
//             var email = $("input#email").val();
//             var message = $("textarea#message").val();

//             // See if checkbox was clicked 
//             var beta = $(".glyphicon-ok").first().hasClass("ok-active");

//             // For success/failure message
//             var firstName = name; 
//             if (firstName.indexOf(' ') >= 0) {
//                 firstName = name.split(' ').slice(0, -1).join(' ');
//             }

//             // Ajax post 
//             $.ajax({
//                 url: "/",
//                 type: "POST",
//                 data: {
//                     name: name,
//                     email: email,
//                     beta: beta,
//                     message: message
//                 },
//                 cache: false,
//                 success: function() {
//                     // Enable button & show success message
//                     // $("#btnSubmit").attr("disabled", false);
//                     // $('#success').html("<div class='alert alert-success'>");
//                     // $('#success > .alert-success').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                     //     .append("</button>");
//                     // $('#success > .alert-success')
//                     //     .append("<strong>Your message has been sent. </strong>");
//                     // $('#success > .alert-success')
//                     //     .append('</div>');

//                     // //clear all fields
//                     // $('#contactForm').trigger("reset");
//                 },
//                 error: function(data) {
//                     console.log(data);
                    
//                     // Fail message
//                     $('#success').html("<div class='alert alert-danger'>");
//                     $('#success > .alert-danger').html("<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;")
//                         .append("</button>");
//                     $('#success > .alert-danger').append("<strong>Sorry " + firstName + ", it seems that our mail server isn't responding. Please try again later!");
//                     $('#success > .alert-danger').append('</div>');
//                     //clear all fields
//                     $('#contactForm').trigger("reset");
//                 },
//             })
//         },
//         filter: function() {
//             return $(this).is(":visible");
//         },
//     });

//     $("a[data-toggle=\"tab\"]").click(function(e) {
//         e.preventDefault();
//         $(this).tab("show");
//     });
// });

// // When clicking on Full hide fail/success boxes
// $('#name').focus(function() {
//     $('#success').html('');
// });
