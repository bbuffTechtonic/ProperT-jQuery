// PROPERTY DETAILS SECTION

console.log(landlord1.properties[0]);

var street = landlord1.properties[0].address.address1;
var street2 = landlord1.properties[0].address.address2;
var cityStateZip = landlord1.properties[0].address.city + ", " + landlord1.properties[0].address.state + " " + landlord1.properties[0].address.zip;

var tenantName = "Current Tenant: " + landlord1.properties[0].tenantInfo.firstName + " " + landlord1.properties[0].tenantInfo.lastName;
var displayTenantEmail = "Current Tenant Email: " + landlord1.properties[0].tenantInfo.email;
var monthlyRentAmount = " Monthly Rental Amount: $" + landlord1.properties[0].tenantInfo.monthlyRent;
var leaseDateRange = "Lease Date Range: " + landlord1.properties[0].tenantInfo.leaseStart + " - " + landlord1.properties[0].tenantInfo.leaseEnd;

var getTenantFirst = landlord1.properties[0].tenantInfo.firstName;
var getTenantLast = landlord1.properties[0].tenantInfo.lastName;
var getTenantEmail = landlord1.properties[0].tenantInfo.email;
var rentalAmount = landlord1.properties[0].tenantInfo.monthlyRent;
var leaseStartDate = landlord1.properties[0].tenantInfo.leaseStart;
var leaseEndDate = landlord1.properties[0].tenantInfo.leaseEnd;
var getCity = landlord1.properties[0].address.city;
var getState = landlord1.properties[0].address.state;
var getZip = landlord1.properties[0].address.zip;


// Display property info
$('#display-prop-address-street').val(street);
$('#display-prop-address-street2').val(street2);
$('#display-prop-address-citystatezip').val(cityStateZip);
$('#display-tenant-name').text(tenantName);
$('#display-tenant-email').text(displayTenantEmail);
$('#display-rental-amount').text(monthlyRentAmount);
$('#display-lease-range').text(leaseDateRange);

// Edit property info Modal Values
$('input[name="edit-prop-address-street"]').val(street);
$('input[name="edit-prop-address-street2"]').val(street2);
$('input[name="edit-prop-address-city"]').val(getCity);
$('input[name="edit-prop-address-state"]').val(getState);
$('input[name="edit-prop-address-zip"]').val(getZip);
$('input[name="edit-tenant-first-name"]').val(getTenantFirst);
$('input[name="edit-tenant-last-name"]').val(getTenantLast);
$('input[name="edit-tenant-email"]').val(getTenantEmail);
$('input[name="edit-rental-amount"]').val(rentalAmount);
$('input[name="edit-lease-start"]').val(leaseStartDate);
$('input[name="edit-lease-end"]').val(leaseEndDate);

// onclick event for submit edit property
// should I target the button or form tag w/ jquery?
// issues with updating 2 obj? PropertyAddress1 and tenantInfo1
// not sure how to test this!! MC

$("#submit-edit-property").on("submit", function(e){
  e.preventDefault();
  var address1 = $('input[name="edit-prop-address-street"]').val();
  var address2 = $('input[name="edit-prop-address-street2"]').val();
  var city = $('input[name="edit-prop-address-city"]').val();
  var state = $('input[name="edit-prop-address-state"]').val();
  var zip = $('input[name="edit-prop-address-zip"]').val();
  var firstName = $('input[name="edit-tenant-first-name"]').val();
  var lastName = $('input[name="edit-tenant-last-name"]').val();
  var email = $('input[name="edit-tenant-email"]').val();
  var monthlyRent = $('input[name="edit-rental-amount"]').val();
  var leaseStart = $('input[name="edit-lease-start"]').val();
  var leaseEnd = $('input[name="edit-lease-end"]').val();


  // var updatedPropertyAddress =

  // var updatedTenantInfo = 







  // var newLandlord = new User(firstName, lastName, email, password);
  // landlords.push(newLandlord);
  // alert("A new landlord user was created in localStorage");
  // updateState(landlords);
});

$("#add-expense-form").on("submit", function(e) {
  e.preventDefault();
  var $date = $("#add-expense-date").val();
  var $description = $("#add-expense-description").val();
  var $category = $("#add-expense-category-select").val();
  var $amount = $("#add-expense-amount").val();
  // var $image = 
  if($category !== "mileage") {
    landlord1.properties[0].expenses[$category].push({
      date: $date,
      description: $description,
      amount: $amount,
      // image: $image ? $image : null
    })
  } else {
    landlord1.properties[0].expenses.mileage.push({
      date: $date,
      miles: $amount,
      description: "Miles driven"
    });
  }
});

$("#delete-expenses").on("click", function(e) {
  $('table tr').has('input[type="checkbox"]:checked').remove();
})
