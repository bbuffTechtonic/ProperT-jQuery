$("#signupForm").on("submit", function(e){
  e.preventDefault();
  var firstName = $('input[name="signUpFirstName"]').val();
  var lastName = $('input[name="signUpLastName"]').val();
  var email = $('input[name="signUpEmail"]').val();
  var password = $('input[name="signUpPassword"]').val();
  var newLandlord = new User(firstName, lastName, email, password);
  landlords.push(newLandlord);
  updateState(landlords);
});
