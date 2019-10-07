
function theGoodSolution3() {
    var flavors,
        flavorsObject,
        flavorsUl,
        flavorEncoded,
        flavorLi,
        solutionTitle;

    // gather flavors and elements
    flavors = window.iceCreamFlavors;
    flavorsObject = {};
    flavorsUl = document.getElementsByClassName('ice-cream-list')[0];


    // Populate the flavor object with base64 encoded flavors
    flavors.forEach(function(flavor, index) {
        flavorsObject['flavor-' + index] = btoa(flavor);
    }); 
    //console.info(flavorsObject);


    // set local storage flavor items from flavor object
    for (let [flavorIndex, flavor] of Object.entries(flavorsObject)) {
        localStorage.setItem(flavorIndex, flavor);
    }
    console.info(localStorage)


    // get local storage flavor values to create <li>s with decoded text
    // add some data attributes in case we want to hook into them later
    for (let [flavorKey, flavorValue] of Object.entries(localStorage)) {
        flavorEncoded = localStorage.getItem(flavorKey);
        //console.info(flavorEncoded);
        flavorLi = document.createElement('li');
        flavorLi.className = 'ice-cream-flavor';
        flavorLi.innerText = atob(flavorEncoded);
        flavorLi.setAttribute('data-flavor-key',flavorKey);
        flavorLi.setAttribute('data-flavor-value',flavorEncoded);
        flavorsUl.appendChild(flavorLi);
        console.info(flavorLi);
    }

    // set page header
    solutionTitle = document.createElement('h2');
    solutionTitle.innerHTML = 'Solution 3<br>Super Convoluted Rube Goldberg Code Adventure';
    document.body.insertBefore(solutionTitle, flavorsUl);
    
    console.log(solutionTitle.innertext);
}

//window.theGoodSolution3();