chrome.contextMenus.removeAll();
chrome.contextMenus.create({
      title: "MyMenu",
      contexts: ["browser_action"],
      onclick: function() {
        alert('my custom menu');
      }
});