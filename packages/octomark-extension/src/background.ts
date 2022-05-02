chrome.action.onClicked.addListener((tab) => {
  if (!tab.id) return

  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    files: ['assets/content-script.js'],
  })
})

chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  console.log(message)

  if (message.type === 'preview') {
    const url = new URL(chrome.runtime.getURL('preview.html'))
    Object.entries(message.data).forEach(([key, value]) => {
      url.searchParams.set(key, value as string)
    })

    chrome.windows.create({
      url: url.toString(),
      type: 'panel',
      width: 1280,
      height: 800,
    })
  }
})
