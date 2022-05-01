chrome.action.onClicked.addListener((tab) => {
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['assets/content-script.js'],
  })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  if (message.type === 'preview') {
    const url = new URL(chrome.runtime.getURL('preview.html'))
    url.searchParams.set('content', message.content)

    chrome.windows.create({
      url: url.toString(),
      type: 'panel',
      width: 1280,
      height: 800,
    })
  }
})
