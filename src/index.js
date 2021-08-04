module.exports = function toReadable (number) {
    const simpleNumber = ['zero', 'one', 'two', 'three', 'four','five', 'six', 'seven', 'eight', 'nine', 'ten',
     'eleven', 'twelve', 'thirteen', 'fourteen', 'fifteen', 'sixteen','seventeen', 'eighteen', 'nineteen'];
    
    const dozens = [ {2: 'twenty'}, {3: 'thirty'}, {4: 'forty'}, {5: 'fifty'}, {6: 'sixty'}, {7: 'seventy'}, {8: 'eighty'}, {9: 'ninety'} ];
    
    if (number > 0 && number < 20) {
        return simpleNumber[number];
    } else {
        const dozen = Math.trunc( number / 10 ); // 1-9 dozens

        if(dozen < 10) {                        // dozens    
            const units = number - dozen*10;

            const dozenString = dozens.filter( (el) => {
                const elIndex = +Object.keys(el);
                if (elIndex == dozen) {
                    return elIndex;
                }

            } );

            if (units) {
                return `${dozenString[0][dozen]} ${simpleNumber[units]}`;
            } else {
                return `${dozenString[0][dozen]}`;
            }           
            
        } else {                                             
            const hundreds = Math.trunc( number / 100 );
            const unitsOfhundreds = number - hundreds*100;
            const dozenOfHundreds = toReadable (unitsOfhundreds);
            debugger;
            if (unitsOfhundreds) {
                return `${simpleNumber[hundreds]} hundred ${dozenOfHundreds}`;
            } else {
                return `${simpleNumber[hundreds]} hundred` ;
            }  

            
        }
    }
}

