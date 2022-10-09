async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // tab will either be a tabs.Tab instance or undefined.
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.pageCapture.saveAsMHTML(
        {tabId: tab.id},
        function(blob) {
            var url = URL.createObjectURL(blob);
            chrome.downloads.download({
                url: url,
                filename: 'testing_capture.mhtml'
            });
            console.log("downloaded");
        }
    )
    console.log(tab);
    return tab;
}

getCurrentTab();

