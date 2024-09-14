const accountId = 12345
var accountEmail = "ammara@google.com"
let accountPassword = "12345"
accountCity = "Islamabad"
let accountState;
/*
const is not change the value.
var variable is not used so far because is not working on scope 
    {

    }
    it changes all the values when variable name is same
 */

accountPassword = 88888
accountCity = "Lahore"
console.table ([
    accountId,
    accountEmail, 
    accountPassword,
    accountCity,
    accountState

])