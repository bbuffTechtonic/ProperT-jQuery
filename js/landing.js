$('#signupForm').on('submit', function (e) {
  e.preventDefault();
  var firstName = $('input[name="signUpFirstName"]').val();
  var lastName = $('input[name="signUpLastName"]').val();
  var email = $('input[name="signUpEmail"]').val();
  var password = $('input[name="signUpPassword"]').val();
  var newLandlord = new User(firstName, lastName, email, password);
  landlords.push(newLandlord);
  alert('A new landlord user was created in localStorage');
  updateState(landlords);
});

$('#signinForm').on('submit', function (e) {
  e.preventDefault();
  for (var i = 0; i < landlords.length; i++) {
    if (landlords[i].email === $('#signInEmail').val() &&  landlords[i].password === $('#signInPassword').val())
    {
      location.href = 'dashboard.html';
      return;
    }
  }

  alert('Email or Password do not match');
});
