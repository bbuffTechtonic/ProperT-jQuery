$("#add-new-property").on("submit", function(e){
  e.preventDefault();
  console.log($(this));
  
  //$('#add-property-modal').modal('hide');
});

// var PropertyAddress1 = {
//   address1: "123 Elm St.",
//   address2: "#305",
//   city: "Denver",
//   state: "CO",
//   zip: 80209
// };
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
