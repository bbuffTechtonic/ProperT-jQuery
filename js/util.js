(function() {
  var instance;
  User = function(firstName, lastName, email, password, avatar) {
    if (instance) {
      return instance;
    }
    this.firstName = firstName;
    this.lastName = lastName;
    this.email = email;
    this.password = password;
    this.avatar = avatar;
    this.rentals = [];
    instance = this;
  }
})();

var landlords = [];
window.landlord1 = new User("Patrick","Smith","patrick@yoohoo.org","password","./images/userOne.jpeg");

//Add a rental
User.prototype.addRental = function(address, tenantInfo, expenses) {
  // for (var i = 0; i < this.rentals.length; i++){
  //   console.log("In this loop");
  //   console.log(this.rentals);
  //   if(this.rentals[i].address.address1.toLowerCase() === oAddress.address1.toLowerCase()){
  //     return false;
  //   }
  // }
  // var expenses =
  // {
  //   mileage: [],
  //   mortgage: {},
  //   maintenance: [],
  //   suppliesGoods: [],
  //   misc:[],
  //   hoa:[],
  //   rent:[]
  // };
  this.rentals.push({address, tenantInfo, expenses});
  this.updateState();
  return true;
};

//Add multiple rentals
// User.prototype.addRentals = function(aRentals) {
//   var rentalsAdded = 0;
//   var oThis = this;
//   aRentals.forEach(function(oAddress, oTenant, oExpense) {
//       oThis.addRental(oAddress, oTenant, oExpense);
//       rentalsAdded++;
//     });
//   this.updateState();
//   return rentalsAdded;
// };

// //Property Object
var prop1Address = {
  address1: "123 Elm St.",
  address2: "#305",
  city: "Denver",
  state: "CO",
  zip: 80209
};
// Tenant Object
var tenant1Info = {
  firstName: "Maggie",
  lastName: "Brown",
  email: "maggie@abc.org",
  monthlyRent: 1750,
  leaseStart: "6/1/2018",
  leaseEnd: "5/31/2019"
};
// //Expense Object
var expenses1Obj = {
  mileage: [
    {
      date: "7/5/2018",
      amount: 25,
      description: "Miles driven"
    },
    {
      date: "8/18/2018",
      amount: 25,
      description: "Miles driven"
    }
  ],
  mortgage: {
    premium: 1700,
    escrow: 800,
    interest: 85,
    mortgageIns: 100
  },
  maintenance: [
    {
      date: "7/18/2018",
      description:"cleaning",
      amount:160,
      image:"../images/receipt.jpg"
    }
  ],
  suppliesGoods: [
    {
      date: "9/01/2018",
      description:"bathroom cleaning supplies",
      amount:25,
      image:"../images/receipt.jpg"
    }
  ],
  misc: [
    {
      date: "7/18/2018",
      description:"painting living room wall",
      amount:800,
      image:"../images/receipt.jpg"
    }
  ],
  hoa: [
    {
      date: "6/1/2018",
      amount: 50
    }
  ],
  rent: [
    {
      date: "6/5/2018",
      amount: 1750
    },
    {
      date: "7/2/2018",
      amount: 1750
    },
    {
      date: "8/5/2018",
      amount: 1750
    }
  ]
};
// //Create Initial New Property
// //Create initial landlord and assign a property to landlord
// var landlord1 = new User("Patrick","Smith","patrick@yoohoo.org","password","./images/userOne.jpeg");
// landlord1.rentals.push(property1);
//landlord1.addRental(prop1Address,tenant1Info,expenses1Obj);
//Localstorage stuff
User.prototype.updateState = function() {
  localStorage.setItem("rentals", JSON.stringify(this.rentals));
}

User.prototype.loadRentals = function (){
  var rentalProperties = JSON.parse(localStorage.getItem("rentals"));
  if(rentalProperties){
    for (var i = 0; i< rentalProperties.length; i++) {
      //console.log(rentalProperties[i].address, rentalProperties[i].tenantInfo, rentalProperties[i].expenses);
      this.addRental(rentalProperties[i].address, rentalProperties[i].tenantInfo, rentalProperties[i].expenses);
    }
  }
}

$( document ).ready(function() {
  window.landlord1 = new User("Patrick","Smith","patrick@yoohoo.org","password","./images/userOne.jpeg");
  landlord1.loadRentals();
  landlords.push(landlord1);
  landlord1.getUniqueAdd();
  
});
