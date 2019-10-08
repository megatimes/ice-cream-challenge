// if we're in the global namespace, at least try for a unique function name
function theGoodSolution2(supportLegacy) {
    var useOldLoop = (supportLegacy === 'supportLegacy' ? true : false),
        flavors = window.iceCreamFlavors,
        flavorsList = document.getElementsByClassName('ice-cream-list')[0],
        solutionTitle = document.createElement('h2');
    
    // set header
    solutionTitle.innerHTML = 'Solution 2<br>Vanilla JS <code>for || forEach</code>';
    document.body.insertBefore(solutionTitle, flavorsList);
    //console.log(solutionTitle.innertext);

    // create list items using one of two looping methods
    if (!useOldLoop) { 
        // newer forEach method
        flavors.forEach(function(flavor) {
            flavorItem = document.createElement('li');
            flavorItem.className = "ice-cream-flavor";
            flavorItem.innerHTML = flavor;
            flavorsList.appendChild(flavorItem);
        });
        console.info('No Legacy support specified. Used "forEach" method');
        return;
    } else { 
        // old for loop method for legacy browses 
        for(i=0; i < flavors.length; i++) {
            var flavorItem = document.createElement('li');
            flavorItem.className = "ice-cream-flavor";
            flavorItem.innerText = flavors[i];
            flavorsList.appendChild(flavorItem);
        }
        console.warn('Legacy support enabled. Used "for" method');
    }
}

//window.theGoodSolution2();
//window.theGoodSolution2('supportLegacy');