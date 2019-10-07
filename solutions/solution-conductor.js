/* 
Some helper functions for ice cream solutions.
All solutions should run correctly without these.
*/

function theGoodSolutions() {
    var functions = ['theGoodSolution1','theGoodSolution2', 'theGoodSolution3','theGoodSolution4', ];
    console.log('Available solution functions. (Reload page between solution calls)');
    console.log('theGoodSolution1()');
    console.log('theGoodSolution2()');
    console.log('theGoodSolution2(\'supportLegacy\')');
    console.log('theGoodSolution3()');
    console.log('theGoodSolution4()');
}

window.theGoodSolutions();




/* 
function theGoodSafetyCheck(solution) {
    // check we're good to run our solutions.

    if (!Array.isArray(window.iceCreamFlavors)) {
        console.error('TG error: No ice cream flavor array found. Aborting');
        return false;
    }

    if (typeof jQuery !== 'function') {
        console.warn('TG error: JQuery not loaded. Retrying');
        // load jquery locally from /lib/jQuery file here
        return false;
    }

    return true;
}
*/