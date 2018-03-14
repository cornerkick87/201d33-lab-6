

var shops =  [ {
    location: "1st and Pike", 
    minCust: 23,
    maxCust:  65,
    avgCookieSales: 3,
    
    showRandomCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor (Math.random()* (this.maxCust-this.minCust)) + 1;

            var hrlySales = hrlyCust * this.avgCookieSales;
         
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
            
    }
},

{
    location: "Seatac Airport",
    minCust: 3,
    maxCust: 24,
    avgCookieSales: 1.2,
    showRandomCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor (Math.random()* (this.maxCust-this.minCust)) + 1;

            var hrlySales = hrlyCust * this.avgCookieSales;
         
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    } 
},

{
    location: "Seattle Center",
    minCust: 11,
    maxCust: 38,
    avgCookieSales: 3.7,
    showRandomCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor (Math.random()* (this.maxCust-this.minCust)) + 1;

            var hrlySales = hrlyCust * this.avgCookieSales;
         
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    }   
},

{
    location: "Capitol Hill",
    minCust: 20,
    maxCust: 38,
    avgCookieSales: 2.3,
    showRandomCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor (Math.random()* (this.maxCust-this.minCust)) + 1;

            var hrlySales = hrlyCust * this.avgCookieSales;
         
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    }
},
{
    location: "Akli",
    minCust: 2, 
    maxCust: 16,
    avgCookieSales: 46,
    showRandomCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor (Math.random()* (this.maxCust-this.minCust)) + 1;

            var hrlySales = hrlyCust * this.avgCookieSales;
         
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    }
}
];

function calcSales() {
    for(var i = 0; i < shops.length; i++) {
        shops[i].showRandomCustCount()  
    }
    
}