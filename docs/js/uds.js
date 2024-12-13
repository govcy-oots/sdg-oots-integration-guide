const uds_search_area = document.querySelector('.govcy-header-search-area')

function resizeIframe(obj) {
    obj.style.height = obj.contentWindow.document.documentElement.scrollHeight + 'px';
}

function focusOnSearchAreaOpen(mutationsList, observer) {
    // console.log('Mutations:', mutationsList)
    // console.log('Observer:', observer)
    mutationsList.forEach(mutation => {
        if (mutation.attributeName === 'class') {
            if (uds_search_area.classList.contains("open")) {
                // console.log('is open');
                document.querySelector('.govcy-header-search-area input').focus();
            } else {
                // console.log('is closed');
            }
        }
    })
}

const mutationObserver = new MutationObserver(focusOnSearchAreaOpen)

mutationObserver.observe(uds_search_area, { attributes: true })
