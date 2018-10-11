var firstName = landlord1.firstName;
var lastName = landlord1.lastName;
var email = landlord1.email;
var avatar = landlord1.avatar;

$('input[name="first-name"]').val(firstName);
$('input[name="last-name"]').val(lastName);
$('input[name="email"]').val(email);
$('img#profilePic').attr('src', avatar);
