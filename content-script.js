var config = {attributes: false, childList: true, characterData: false};

console.log("Hello, world!");


var htmlBody = $("body")[0];
var chatLoadedObserver = new MutationObserver(function (mutations, observer) {
    mutations.forEach(function (mutation) {
        var scrollPanels = $(".customScrollBar .scrollContainer");
        console.log(scrollPanels);
        // if (chatSelector.length > 0) {
        //     // Select the node element.
        //     var target = chatSelector[0];
        //
        //     // Pass in the target node, as well as the observer options
        //     bardFinder.observe(target, config);
        //
        //     // Unregister chatLoadedObserver. We don't need to check for the chat element anymore.
        //     observer.disconnect();
        // }
        observer.disconnect();
    })
});

chatLoadedObserver.observe(htmlBody, config);