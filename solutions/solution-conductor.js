/* 
Some helper functions for ice cream solutions.
All solutions should run correctly without these.
*/

function theGoodSafetyCheck(solution) {
    // check we're good to run our solutions.

    if (!Array.isArray(window.iceCreamFlavors)) {
        console.error('TG error: No ice cream flavor array found. Aborting');
        return false;
    }

    if (typeof jQuery !== 'function') {
        console.warn('TG error: JQuery not loaded. Retrying');
        // load jquery locally from /lib/jQuery file
        return false;
    }

    return true;
}