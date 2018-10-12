$( document ).ready(function() {
  // PROPERTY DETAILS SECTION
//console.log(landlord1);

var street = landlord1.rentals[0].address.address1;
var street2 = landlord1.rentals[0].address.address2;
var cityStateZip = landlord1.rentals[0].address.city + ", " + landlord1.rentals[0].address.state + " " + landlord1.rentals[0].address.zip;

var tenantName = "Current Tenant: " + landlord1.rentals[0].tenantInfo.name;
var displayTenantEmail = "Current Tenant Email: " + landlord1.rentals[0].tenantInfo.email;
var monthlyRentAmount = "Monthly Rental Amount: $" + landlord1.rentals[0].tenantInfo.rentalAmount;
var leaseDateRange = "Lease Date Range: " + landlord1.rentals[0].tenantInfo.leaseStart + " - " + landlord1.rentals[0].tenantInfo.leaseEnd;

var getTenantFirst = landlord1.rentals[0].tenantInfo.name;
//Oops there is no longer a tenant lastName field in the object!
//var getTenantLast = landlord1.properties[0].tenantInfo.lastName;
var getTenantEmail = landlord1.rentals[0].tenantInfo.email;
var rentalAmount = landlord1.rentals[0].tenantInfo.rentalAmount;
var leaseStartDate = landlord1.rentals[0].tenantInfo.leaseStart;
var leaseEndDate = landlord1.rentals[0].tenantInfo.leaseEnd;
var getCity = landlord1.rentals[0].address.city;
var getState = landlord1.rentals[0].address.state;
var getZip = landlord1.rentals[0].address.zip;


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
//$('input[name="edit-tenant-last-name"]').val(getTenantLast);
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
)};
//EXPENSES SECTION

$("#search-input").keyup(function () {
  var value = this.value.toLowerCase().trim();
  $("table tr").each(function (index) {
    if (!index) return;
    $(this).find("td").each(function () {
      var id = $(this).text().toLowerCase().trim();
      var notFound = (id.indexOf(value) == -1);
      $(this).closest('tr').toggle(!notFound);
      return notFound;
    });
  });
});

$("#add-expense-form").on("submit", function(e) {
  e.preventDefault();
  var $date = $("#add-expense-date").val();
  var $description = $("#add-expense-description").val();
  var $category = $("#add-expense-category-select").val();
  var $amount = $("#add-expense-amount").val();
  // var $image =
  if($category !== "mileage") {
    landlord1.rentals[0].expenses[$category].push({
      date: $date,
      description: $description,
      amount: "$" + $amount,
      // image: $image ? $image : null
    })
  } else {
    landlord1.rentals[0].expenses.mileage.push({
      date: $date,
      amount: "$" + $amount,
      description: "Miles driven"
    });
  }
  $('#add-expense-modal').modal('hide');
});

$("#delete-expenses").on("click", function(e) {
  $('table tr').has('input[type="checkbox"]:checked').remove();
});

$('#check-all').click(function () {
    $('.check').prop('checked', $(this).prop('checked'));
  });


$("#v-pills-tab a").on("click", function() {
  $("a.active").removeClass("active bg-success").addClass("text-success");
  $(this).addClass("active bg-success").removeClass("text-success");
  $("tbody").children().remove();
  var $selectedExpense = $(this).text().toLowerCase();
  var $category = $(this).text();
  var storedExpenses = landlord1.rentals[0].expenses;
  var currentExpenses;
  if($selectedExpense === "all") {
    currentExpenses = storedExpenses;
  } else {
    currentExpenses = storedExpenses[$selectedExpense];
  }
  $.each(currentExpenses, function(index) {
    $tr = $("<tr class='expense-row'></tr>");
    $tr.append("<th scope='col'><input type='checkbox'></th>");
    $tr.append("<td class='date'></td>")
    $tr.append("<td class='description'></td>")
    $tr.append("<td class='expense-image'></td>")
    $tr.append("<td class='category'>" + $category + "</td>")
    $tr.append("<td class='amount'></td>")
    $("tbody").append($tr);
  })
});



});
