
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
        
        var hrlySales = Math.floor(hrlyCust * this.avgCookieSales);
        
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



var shops =  [
    new Shop('1st and Pike', 23, 65, 3),
    new Shop('Seatac Airport', 3, 24, 1.2),
    new Shop('Seattle Center', 11, 38, 3.7),
    new Shop('Capitol Hill', 20, 38, 2.3),
    new Shop('Alki', 2, 16, 46)
];

function calcAndShowSales() {
    for(var i = 0; i < shops.length; i++) {
        shops[i].calcCustCount(); 
        shops[i].showSales(); 
    }
    
}
calcAndShowSales();