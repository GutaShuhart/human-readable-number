module.exports = function toReadable (number) {
    const units = ['','one','two','three','four', 'five','six','seven','eight','nine','ten',
    'eleven','twelve', 'thirteen','fourteen','fifteen','sixteen','seventeen','eighteen','nineteen'];
    const tens = ['', 'ten', 'twenty', 'thirty', 'forty', 'fifty', 'sixty', 'seventy', 'eighty', 'ninety'];


    if(number === 0) {
      return 'zero'

    }
    else if(number <= 19) {
      return units[number]
    } 
    else if (number > 19 && number <= 99) {

        var digits = [];
        while (number) {
          digits.push(number % 10);
          number = parseInt(number / 10);
        }
        const separateFigure = digits.reverse();
         if (units[separateFigure[1]] === '') {
           return tens[separateFigure[0]]
        }

        return tens[separateFigure[0]] + ' ' + units[separateFigure[1]]
    }

    else if (number > 99 && number <= 999) {

        var digitsA = [];
        var digitsB = [];
        let numberA = number;
        let numberB = number;

        while (numberA) {
          digitsA.push(numberA % 10);
          numberA = parseInt(numberA / 10);
        }

        while (numberB) {
          digitsB.push(numberB % 100);
          numberB = parseInt(numberB / 100);  
        }

        const separateFigureA = digitsA.reverse();
        const separateFigureB = digitsB.reverse();
    
      
          if(units[separateFigureB[1]] === '') {
            return `${units[separateFigureA[0]]} hundred`
          } else if (units[separateFigureA[1]] === '') {
            return `${units[separateFigureA[0]]} hundred ${units[separateFigureA[2]]}`
          }else if (units[separateFigureA[2]] === '' ) {
            return `${units[separateFigureA[0]]} hundred ${tens[separateFigureA[1]]}`
          } else if (separateFigureB[1] < 20 && separateFigureB[1] > 9 ) {
            return `${units[separateFigureB[0]]} hundred ${units[separateFigureB[1]]}`
          }
          return `${units[separateFigureA[0]]} hundred ${tens[separateFigureA[1]]} ${units[separateFigureA[2]]}`
    }
}
