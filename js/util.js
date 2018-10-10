//User Object
var userOne = {
  firstName: "Patrick",
  lastName: "Smith",
  email: "patrick@yoohoo.org",
  password: "password",
  avatar: "../images/userOne.jpeg"
};
//Property Object Array
var properties =
[
  {
    address1: "123 Elm St.",
    address2: "305",
    city: "Denver",
    state: "CO",
    zip: 80209,
    Current Tenant:
      {
        firstName: "Patrick",
        lastName: "Smith",
        email: "patrick@yoohoo.org"
      },
    monthlyRent: 1750,
    leaseStart: "6/1/2018",
    leaseEnd: "5/31/2019",
    expenses:
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
              date: "7/18/2018"
              description:"cleaning",
              amount:160,
              image:"../images/receipt.jpg"
            }
          ],
        suppliesGoods:
          [
            {
              date: "9/01/2018"
              description:"bathroom cleaning supplies",
              amount:25,
              image:"../images/receipt.jpg"
            }
          ],
        misc:
          [
            {
              date: "7/18/2018"
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
if (typeof(Storage) !== "undefined") {
  // Store
  localStorage.setItem("user", userOne);
  localStorage.setItem("properties", properties);
  // Retrieve
    //document.getElementById("heading").innerHTML = localStorage.getItem("content");
} else {
  document.getElementById("heading").innerHTML = "Sorry, your browser does not support Web Storage...";
}
