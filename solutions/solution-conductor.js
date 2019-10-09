/* 
Some helper functions for ice cream solutions.
All solutions should run correctly without these.
*/

// set some styles for console logging
var stylesInfo = [
    'color: #fff',
    'font-size: 14px',
    'padding: .5em 5% .5em .5em',
].join(';');

var stylesWarn = [
    'background: #d10707',
    'color: yellow',
    'font-size: 12px',
    'padding: .5em .5em .5em .5em',
    'width: 30em',
].join(';');

var stylesCode = [
    'display: table-cell',
    'background: #000000b6',
    'color: #13dffa',
    'font-family: monospace',
    'font-size: 14px',
    'padding: .25em .5em'
].join(';');

var stylesNetlify = [
    'display: table-cell',
    'background: #FFFFFF',
    'color: #00ad9e',
    'font-family: monospace',
    'font-size: 16px',
    'font-weight: bold',
    'padding: .25em .5em'
].join(';');



// write the list of available functions to the console
function theGoodSolutions() {
    console.log('%c You can also view this project on Netlify!', window.stylesNetlify);
    console.log('%c https://megatimes-ice-cream-challenge.netlify.com/', window.stylesNetlify);
    console.log('~~~');
    console.log('You look great today');
    
    //console.info('%c Available solution functions', window.stylesInfo+';background: #2453ee');
    var groupLabel = 'Available Function Names';
    console.group(groupLabel);
    console.info('%ctheGoodSolution1()', window.stylesCode);
    console.info('%ctheGoodSolution2()', window.stylesCode);
    console.info('%ctheGoodSolution2(\'supportLegacy\')', window.stylesCode);
    console.info('%ctheGoodSolution3()', window.stylesCode);
    console.info('%ctheGoodSolution4()', window.stylesCode);
    console.groupEnd();
    console.info('%c * You\'ll need to reload page between solution calls', window.stylesWarn);
}
window.theGoodSolutions();


function solutionSwitcher() {
    var functions = ['theGoodSolution1','theGoodSolution2', 'theGoodSolution3','theGoodSolution4', 'reset'];
    var footer = document.createElement('footer');
        
    footer.id = 'solution-switcher';
    document.body.append(footer);

    functions.forEach(function(functionName, index) {
        var link = document.createElement('a');
        var indexStepped = index + 1;
        link.innerHTML = 'solution ' + indexStepped;
        link.href = window.location.pathname + '#solution' + indexStepped;
        link.setAttribute('data-solution', functionName);
        footer.append(link);
    });

    // create a 'reset' link that doesn't include a hash solution
    var lastLink = document.querySelector('[data-solution=reset]');
    lastLink.innerHTML = 'reset';
    lastLink.href = window.location.pathname;
    
    // force a reload when hash changes
    $('#solution-switcher a').click(function(el) {
        window.location = this.href;
        window.location.reload();
    });
}


// if a solution is stated in the URL hash, run it on page load
function runSolutionFromUrlHash() {
    var hash,
        solutionHash,
        theGoodSolution = null;
        
    hash = document.location.hash;

    if (hash.length > 0 && hash.indexOf('solution') > -1) {
        solutionHash = hash.split('solution')[1];
        console.log('solution hash # '+solutionHash+' detected. Executing solution.');
        theGoodSolution = 'theGoodSolution'+solutionHash+'()';
        eval(theGoodSolution); // hello, eval
    }
}


$(document).ready(function() {
    runSolutionFromUrlHash();
    solutionSwitcher();
});








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