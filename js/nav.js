var property2Address = {};
var tenant2Info = {};

$("#add-new-property").on("submit", function(e){
  e.preventDefault();
  // console.log($(this)[0]);

  property2Address.address1 = $(this)[0][0].value;
  property2Address.address2 = $(this)[0][1].value;
  property2Address.city = $(this)[0][2].value;
  property2Address.state = $(this)[0][3].value;
  property2Address.zip = $(this)[0][4].value;
  // console.log(property2Address);


  tenant2Info.name = $(this)[0][6].value;
  tenant2Info.email = $(this)[0][7].value;
  tenant2Info.rentalAmount = $(this)[0][8].value;
  tenant2Info.leaseStart = $(this)[0][9].value;
  tenant2Info.leaseEnd = $(this)[0][9].value;
  // console.log(tenant2Info);

  landlord1.addRental(property2Address,tenant2Info);
  $('#add-property-modal').modal('hide');

});


User.prototype.getUniqueAdd = function()
{
  // Restore bookShelf from Local Storage

  //get 'bookShelf' and rehydrate it  (convert it back JSON)
  var rUser = JSON.parse(window.localStorage.getItem('user'));
  console.log(rUser);
  var uniqAddresses = [];
  var thisAdd;

  for (var i = 0;i < rUser[0].rentals.length;i++) {

    //thisAdd = rUser[0].properties[i].address.address1;

    $("#navProperties").append('<a class="dropdown-item" href="property-details.html">' + rUser[0].rentals[i].address.address1 + '</a>');

    //uniqAddresses.push(thisAdd);

  }

  return uniqAddresses;
}
