async function getCurrentTab() {
    let queryOptions = { active: true, lastFocusedWindow: true };
    // tab will either be a tabs.Tab instance or undefined.
    let [tab] = await chrome.tabs.query(queryOptions);
    chrome.pageCapture.saveAsMHTML(
        {tabId: tab.id},
        function(blob) {
            console.log(blob);
        }
    )
    console.log(tab);
    return tab;
}

getCurrentTab();

