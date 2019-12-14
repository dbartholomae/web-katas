function getElement (selector) {
  const element = document.querySelector(selector)
  if (element == null) {
    throw new Error(`Element for selector "${selector}" not found`)
  }
  return element
}

function dispatchEvent (element, eventType) {
  const event = document.createEvent('HTMLEvents')
  event.initEvent(eventType, true, false)
  return element.dispatchEvent(event)
}

function click (selector) {
  const element = getElement(selector)
  dispatchEvent(element, 'click')
}

module.exports = {
  getElement, dispatchEvent, click
}
