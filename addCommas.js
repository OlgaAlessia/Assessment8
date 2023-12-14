/**
 * Turn a number in a string formatted with commas added for readability.
 * 
| Input               | Expected Output |
|                     |                 |
| 1234                | 1,234           |
| 1000000             | 1,000,000       |
| 9876543210          | 9,876,543,210   |
| 6                   | 6               |
| -10                 | -10             |
| -440                | -440            |
| -5678               | -5,678          |
| (bonus) 12345.678   | 12,345.678      |
| (bonus) -3141592.65 | 3,141,592.65    |

*/



function addCommas(amount) {

    let isNegative = false;
    let isDecimale = false;
    let valDecimale = '';

    if (amount < 0) {
        isNegative = true;
        amount = amount.toString().substring(1);
    }
    else
        amount = amount.toString();

    let posDec = amount.indexOf(".")
    if (posDec !== -1) {
        isDecimale = true;
        valDecimale = amount.substring(posDec);
        amount = amount.slice(0, posDec);
    }

    if (amount.length <= 3) return isNegative ? ('-' + amount + valDecimale) : (amount + valDecimale);

    let arr = amount.split('');

    let l = amount.length;
    let resAmount = '';

    for (let i = l - 1; i >= 0; i--) {

        if (l - 3 === i) {
            resAmount = ',' + arr[i] + resAmount;
            l = l - 3;
        }
        else
            resAmount = arr[i] + resAmount;
    }

    return isNegative ? ('-' + resAmount + valDecimale) : (resAmount + valDecimale);
}

module.exports = addCommas;