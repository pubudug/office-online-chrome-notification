const config = {attributes: false, childList: true, characterData: false, subtree: true};

const htmlBody = $("body")[0];
const chatLoadedObserver = new MutationObserver(function (mutations, observer) {
    const scrollPanels = $(".customScrollBar .scrollContainer");
    if (scrollPanels.length > 1) {
        //we found the Inbox area panel. So we can monitor only that part fromm now on
        observer.disconnect();

        const inboxAreaObserver = new MutationObserver(function (mutations, observer) {
            mutations.forEach(function (mutation) {
                mutation.addedNodes.forEach(function (addedNode) {
                    $(addedNode)
                        .find('div.ms-fcl-tp:has(span)')
                        .each(function () {
                            chrome.runtime.sendMessage({message: $(this).text()}, function (response) {
                            });

                        });
                });
            });
        });

        inboxAreaObserver.observe(scrollPanels[1], config)
    }
});

chatLoadedObserver.observe(htmlBody, config);