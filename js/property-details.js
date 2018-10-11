// console.log(landlord1.properties[0].tenantInfo);

var street = landlord1.properties[0].address.address1;
var street2 = landlord1.properties[0].address.address2;
var cityStateZip = landlord1.properties[0].address.city + ", " + landlord1.properties[0].address.state + " " + landlord1.properties[0].address.zip;
var tenantName = "Current Tenant: " + landlord1.properties[0].tenantInfo.firstName + " " + landlord1.properties[0].tenantInfo.lastName;
var tenantEmail = "Current Tenant Email: " + landlord1.properties[0].tenantInfo.email;
var monthlyRentAmount = " Monthly Rental Amount: $" + landlord1.properties[0].tenantInfo.monthlyRent;
var leaseDateRange = "Lease Date Range: " + landlord1.properties[0].tenantInfo.leaseStart + " - " + landlord1.properties[0].tenantInfo.leaseEnd;

$('#display-prop-address-street').val(street);
$('#display-prop-address-street2').val(street2);
$('#display-prop-address-citystatezip').val(cityStateZip);
$('#display-tenant-name').text(tenantName);
$('#display-tenant-email').text(tenantEmail);
$('#display-rental-amount').text(monthlyRentAmount);
$('#display-lease-range').text(leaseDateRange);
