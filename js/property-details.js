// console.log(landlord1.properties[0].tenantInfo);


var street = landlord1.properties[0].address.address1;
var street2 = landlord1.properties[0].address.address2;
var cityStateZip = landlord1.properties[0].address.city + ", " + landlord1.properties[0].address.state + " " + landlord1.properties[0].address.zip;
var tenantName = "Current Tenant: " + landlord1.properties[0].tenantInfo.firstName + " " + landlord1.properties[0].tenantInfo.lastName;
var displayTenantEmail = "Current Tenant Email: " + landlord1.properties[0].tenantInfo.email;
var monthlyRentAmount = " Monthly Rental Amount: $" + landlord1.properties[0].tenantInfo.monthlyRent;
var leaseDateRange = "Lease Date Range: " + landlord1.properties[0].tenantInfo.leaseStart + " - " + landlord1.properties[0].tenantInfo.leaseEnd;

var tenantFirst = landlord1.properties[0].tenantInfo.firstName;
var tenantLast = landlord1.properties[0].tenantInfo.lastName;
var tenantEmail = landlord1.properties[0].tenantInfo.email;
var rentalAmount = landlord1.properties[0].tenantInfo.monthlyRent;
var leaseStartDate = landlord1.properties[0].tenantInfo.leaseStart;
var leaseEndDate = landlord1.properties[0].tenantInfo.leaseEnd;


// Display property info
$('#display-prop-address-street').val(street);
$('#display-prop-address-street2').val(street2);
$('#display-prop-address-citystatezip').val(cityStateZip);
$('#display-tenant-name').text(tenantName);
$('#display-tenant-email').text(displayTenantEmail);
$('#display-rental-amount').text(monthlyRentAmount);
$('#display-lease-range').text(leaseDateRange);


// Edit property info Modal
$('input[name="edit-prop-address-street"]').val(street);
$('input[name="edit-prop-address-street2"]').val(street2);
$('input[name="edit-tenant-first-name"]').val(tenantFirst);
$('input[name="edit-tenant-last-name"]').val(tenantLast);
$('input[name="edit-tenant-email"]').val(tenantEmail);
$('input[name="edit-rental-amount"]').val(rentalAmount);
$('input[name="edit-lease-start"]').val(leaseStartDate);
$('input[name="edit-lease-end"]').val(leaseEndDate);
