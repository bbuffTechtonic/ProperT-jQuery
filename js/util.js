//User Object
function User(firstName, lastName, email, password, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.email = email;
  this.password = password;
  this.avatar = avatar;
  this.properties = [];
}

function Property() {
  this.address = {};
  this.tenantInfo = {};
  this.expenses = {};
}

var users =
  [
    {
      firstName: "Patrick",
      lastName: "Smith",
      email: "patrick@yoohoo.org",
      password: "password",
      avatar: "../images/userOne.jpeg"
    }
  ];
//Property Object Array
var properties =
[
  {
    landlord: "patrick@yoohoo.org",
    address1: "123 Elm St.",
    address2: "305",
    city: "Denver",
    state: "CO",
    zip: 80209,
    currentTenant:
      {
        firstName: "Maggie",
        lastName: "Brown",
        email: "maggie@abc.org"
      },
    monthlyRent: 1750,
    leaseStart: "6/1/2018",
    leaseEnd: "5/31/2019",
    expenses:[
      {
        mileage:
          [
            {
              date: "7/5/2018",
              miles: 25
            },
            {
              date: "8/18/2018",
              miles: 25
            }
          ],
        mortgage:
          {
            premium: 1700,
            escrow: 800,
            interest: 85,
            mortgageIns: 100
          },
        maintenance:
          [
            {
              date: "7/18/2018",
              description:"cleaning",
              amount:160,
              image:"../images/receipt.jpg"
            }
          ],
        suppliesGoods:
          [
            {
              date: "9/01/2018",
              description:"bathroom cleaning supplies",
              amount:25,
              image:"../images/receipt.jpg"
            }
          ],
        misc:
          [
            {
              date: "7/18/2018",
              description:"painting living room wall",
              amount:800,
              image:"../images/receipt.jpg"
            }
          ],
        hoa:
          [
            {
              date: "6/1/2018",
              amount: 50
            }
          ],
        rent:
          [
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
      }
  }
];

//Localstorage stuff
$(loadContent);

function loadContent(oUser, aProperties){
  if (typeof(Storage) !== "undefined") {
    // Store
    localStorage.setItem("user", oUser);
    localStorage.setItem("properties", aProperties);
    // Retrieve
      //document.getElementById("heading").innerHTML = localStorage.getItem("content");
  } else {
    document.getElementById("heading").innerHTML = "Sorry, your browser does not support Web Storage...";
  }
}
