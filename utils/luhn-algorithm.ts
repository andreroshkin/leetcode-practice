// simple checksum formula used to validate a variety of identification numbers, such as credit card numbers, IMEI numbers
function luhnAlgorithm(value) {
    value = value.replace(/\D/g, '');

    let nCheck = 0;
    let bEven = false;

    for (let n = value.length - 1; n >= 0; n--) {
        let nDigit = parseInt(value.charAt(n), 10);

        if (bEven && (nDigit *= 2) > 9) {
            nDigit -= 9;
        }

        nCheck += nDigit;
        bEven = !bEven;
    }

    return nCheck % 10 == 0;
}
