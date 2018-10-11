//User Object
function User(firstName, lastName, email, password, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.avatar = avatar;
  this.properties = [];
}

function Property(oAddress, oTenantInfo, oExpenses) {
  this.address = oAddress || {};
  this.tenantInfo = oTenantInfo || {};
  this.expenses = oExpenses || {};
}

//Property Object
var PropertyAddress1 = {
  address1: "123 Elm St.",
  address2: "#305",
  city: "Denver",
  state: "CO",
  zip: 80209
};

var tenantInfo1 = {
  firstName: "Maggie",
  lastName: "Brown",
  email: "maggie@abc.org",
  monthlyRent: 1750,
  leaseStart: "6/1/2018",
  leaseEnd: "5/31/2019"
};

var expenses1 = {
  mileage: [
    {
      date: "7/5/2018",
      miles: 25
    },
    {
      date: "8/18/2018",
      miles: 25
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

var landlords = [];
var property1 = new Property(PropertyAddress1,tenantInfo1,expenses1);
var landlord1 = new User("Patrick","Smith","patrick@yoohoo.org","password","./images/userOne.jpeg");
landlord1.properties.push(property1);
landlords.push(landlord1);
//Localstorage stuff
$(loadContent(landlords));

function updateState(aUser){
  localStorage.setItem("user", JSON.stringify(aUser));
}

function loadContent(aUser){
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("user", JSON.stringify(aUser));
    // Retrieve
      //document.getElementById("heading").innerHTML = localStorage.getItem("content");
  } else {
    document.getElementById("heading").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}
