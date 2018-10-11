$("#add-new-property").on("submit", function(e){
  e.preventDefault();
  console.log($(this)[0]);
  var PropertyAddress2 = {};
  PropertyAddress2.address1 = $(this)[0][0].value;
  PropertyAddress2.address2 = $(this)[0][1].value;
  PropertyAddress2.city = $(this)[0][2].value;
  PropertyAddress2.state = $(this)[0][3].value;
  PropertyAddress2.zip = $(this)[0][4].value;
  console.log(PropertyAddress2);

  var tenantInfo2 = {};
  tenantInfo2.name = $(this)[0][6].value;
  tenantInfo2.email = $(this)[0][7].value;
  tenantInfo2.amount = $(this)[0][8].value;
  tenantInfo2.start = $(this)[0][9].value;
  tenantInfo2.end = $(this)[0][9].value;
  console.log(tenantInfo2);

  $('#add-property-modal').modal('hide');
});


//
// var tenantInfo1 = {
//   firstName: "Maggie",
//   lastName: "Brown",
//   email: "maggie@abc.org",
//   monthlyRent: 1750,
//   leaseStart: "6/1/2018",
//   leaseEnd: "5/31/2019"
// };

// var property1 = new Property(PropertyAddress1,tenantInfo1,expenses1);
//landlord1.properties.push(property1);
