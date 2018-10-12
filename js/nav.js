var PropertyAddress2 = {};
var tenantInfo2 = {};

$("#add-new-property").on("submit", function(e){
  e.preventDefault();
  console.log($(this)[0]);

  PropertyAddress2.address1 = $(this)[0][0].value;
  PropertyAddress2.address2 = $(this)[0][1].value;
  PropertyAddress2.city = $(this)[0][2].value;
  PropertyAddress2.state = $(this)[0][3].value;
  PropertyAddress2.zip = $(this)[0][4].value;
  console.log(PropertyAddress2);


  tenantInfo2.name = $(this)[0][6].value;
  tenantInfo2.email = $(this)[0][7].value;
  tenantInfo2.rentalAmount = $(this)[0][8].value;
  tenantInfo2.leaseStart = $(this)[0][9].value;
  tenantInfo2.leaseEnd = $(this)[0][9].value;
  console.log(tenantInfo2);

  $('#add-property-modal').modal('hide');
  var property2 = new Property(PropertyAddress2,tenantInfo2);
  landlord1.properties.push(property2);

});

var property2 = new Property(PropertyAddress2,tenantInfo2);
landlord1.properties.push(property2);


Property.prototype.getUniqueAdd = function()
{
  // Restore bookShelf from Local Storage

  var rUser;

  //get 'bookShelf' and rehydrate it  (convert it back JSON)
  var rehydratedYear = JSON.parse(window.localStorage.getItem('user'));

  rUser = rehydratedYear;
  var uniqAddresses = [];
  var thisAdd;

  for (var i = 0;i < rUser[0].properties.length;i++) {

    //thisAdd = rUser[0].properties[i].address.address1;

    $("#navProperties").append('<a class="dropdown-item" href="property-details.html">' + rUser[0].properties[i].address.address1 + '</a>');

    //uniqAddresses.push(thisAdd);

  }

  return uniqAddresses;
}
