//prime numbers

function findPrime(...primeNumbers) {

    for (let i = 0; i < primeNumbers.length; i++) {
        let primeTool = true
        if (primeNumbers[i] == 1) {
            primeTool = false
        }
        for (let index = 2; index < primeNumbers[i]; index++) {

            if (primeNumbers[i] % index == 0 && primeNumbers[i] != 2) {
                primeTool = false
            }
        }
        if (primeTool) {
            console.log(primeNumbers[i], " Sayı asaldır")
        }
        else {
            console.log(primeNumbers[i], " Sayı asal değildir")
        }
    }
}

findPrime(2, 4, 1, 5, 6, 8, 7, 13, 29, 45, 3)




//friend numbers

function findFriendNumbers(number1, number2) {
    let sum1 = 0;
    let sum2 = 0;

    for (let i = 0; i < number1; i++) {
        if (number1 % i == 0) {
            sum1 += i;
        }
        if (number2 % i == 0) {
            sum2 += i;
        }

    }
    if (sum1 == number2 && sum2 == number1) {
        console.log(number1 + " and " + number2 + " are friend numbers")

    }
    else {
        console.log("there is no friend numbers")
    }


}
findFriendNumbers(214, 284)


//perfect numbers to 1000

for (let i = 1; i < 1000; i++) {
    let sum = 0;
    for (let index = 0; index < i; index++) {
        if (i % index == 0) {
            sum += index;
        }
    }
    if (sum == i) {
        console.log(i);
    }

}

//prime numbers to 1000

for (let i = 2; i < 1000; i++) {
    let sum = 0;
    for (let index = 2; index < i; index++) {
        if (i % index == 0 && i != 2) {
            sum++;
        }
    }
    if (sum == 0) {
        console.log(i + " : asal sayıdır");
    }

}


