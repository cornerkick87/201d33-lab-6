
function Shop(location, minCust, maxCust, avgCookieSales) {
    this.location = location;
    this.minCust = minCust;
    this.maxCust = maxCust;
    this.avgCookieSales = avgCookieSales;
    this.cust =[];
    this.sales = [];
}

Shop.prototype.calcCustCount = function(){

    for(var i = 0; i < 15; i++) {
        var hrlyCust = Math.floor(Math.random()* (this.maxCust-this.minCust) +this.minCust);
        
        var hrlySales = hrlyCust * this.avgCookieSales;
        
        this.sales.push(hrlySales);
        console.log('Sales' + this.sales);
        this.cust.push(hrlyCust);
        console.log('customers' + this.cust);
    }
    
};
Shop.prototype.showSales = function() {
    var tableRow = document.createElement('tr');
    var salesTable = document.getElementById('salesTable');
    salesTable.appendChild(tableRow);
    
    var tableData = document.createElement ('td');
    tableRow.appendChild(tableData);
    tableData.textContent = this.location;
    
    for(var i = 0; i < 15; i++) {
        tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.sales[i];
    }
    
};



var shops =  [ {
    location: "1st and Pike", 
    minCust: 23,
    maxCust:  65,
    avgCookieSales: 3,
    showSales: function() {
        var tableRow = document.createElement('tr');
        var salesTable = document.getElementById('salesTable');
        salesTable.appendChild(tableRow);
        
        var tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.location;
        
        for(var i = 0; i < 15; i++) {
            tableData = document.createElement ('td');
            tableRow.appendChild(tableData);
            tableData.textContent = this.sales[i];
        }
        
    },
    
    calcCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor(Math.random()* (this.maxCust-this.minCust)) + 1;
            
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
    showSales: function() {
        var tableRow = document.createElement('tr');
        var salesTable = document.getElementById('salesTable');
        salesTable.appendChild(tableRow);
        
        var tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.location;
        
        for(var i = 0; i < 15; i++) {
            tableData = document.createElement ('td');
            tableRow.appendChild(tableData);
            tableData.textContent = this.sales[i];
        }
        
    },
    
    calcCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor(Math.random() * (this.maxCust-this.minCust)) + 1;
            
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
    showSales: function() {
        var tableRow = document.createElement('tr');
        var salesTable = document.getElementById('salesTable');
        salesTable.appendChild(tableRow);
        
        var tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.location;
        
        for(var i = 0; i < 15; i++) {
            tableData = document.createElement ('td');
            tableRow.appendChild(tableData);
            tableData.textContent = this.sales[i];
        }
        
    },
    
    calcCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor(Math.random()* (this.maxCust-this.minCust)) + 1;
            
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
    showSales: function() {
        var tableRow = document.createElement('tr');
        var salesTable = document.getElementById('salesTable');
        salesTable.appendChild(tableRow);
        
        var tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.location;
        
        for(var i = 0; i < 15; i++) {
            tableData = document.createElement ('td');
            tableRow.appendChild(tableData);
            tableData.textContent = this.sales[i];
        }
        
    },
    
    calcCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor(Math.random()* (this.maxCust-this.minCust)) + 1;
            
            var hrlySales = hrlyCust * this.avgCookieSales;
            
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    }
},
{
    location: "Alki",
    minCust: 2, 
    maxCust: 16,
    avgCookieSales: 46,
    showSales: function() {
        var tableRow = document.createElement('tr');
        var salesTable = document.getElementById('salesTable');
        salesTable.appendChild(tableRow);
        
        var tableData = document.createElement ('td');
        tableRow.appendChild(tableData);
        tableData.textContent = this.location;
        
        for(var i = 0; i < 15; i++) {
            tableData = document.createElement ('td');
            tableRow.appendChild(tableData);
            tableData.textContent = this.sales[i];
        }
        
    },
    
    calcCustCount: function() {
        this.cust =[];
        this.sales = [];
        for(var i = 0; i < 15; i++) {
            var hrlyCust = Math.floor(Math.random()* (this.maxCust-this.minCust)) + 1;
            
            var hrlySales =Math.round (hrlyCust * this.avgCookieSales);
            
            this.sales.push(hrlySales);
            console.log('Sales' + this.sales);
            this.cust.push(hrlyCust);
            console.log('customers' + this.cust);
        }
    }
}
];

// function calcAndShowSales() {
//     for(var i = 0; i < shops.length; i++) {
//         shops[i].calcCustCount(); 
//         shops[i].showSales(); 
//     }
    
// }