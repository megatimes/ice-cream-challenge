// if we're in the global namespace, at least try for a unique function name
function theGoodSolution1() {
    var flavors = window.iceCreamFlavors;

    $('.ice-cream-list').before('<h2>Solution 1<br>Basic <code>jQuery append()</code></h2>');
    console.info('Solution 1 - Basic jQuery append');

    for (flavor in flavors) {
        $('.ice-cream-list').append('<li class="ice-cream-flavor">'+flavors[flavor]+'</li>');
    }
}

//window.theGoodSolution1();