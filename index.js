// Write your solution in this file!
var customerName = 'bob';

function upperCaseCustomerName() {
    return customerName = customerName.toUpperCase();
}

var bestCustomer;

function setBestCustomer() {
    bestCustomer = 'not bob';
    return bestCustomer;
}

function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
    return bestCustomer;
}

const leastFavoriteCustomer = 'seth';

function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'aaron';
    return leastFavoriteCustomer;
}