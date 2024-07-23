function customRender(reactElement, container) {
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute()
}


const reactElement = {
    type: 'a',
    props: {
        href: "https://Google.com",
        target: '_blank'
    },
    children: 'click me to visit Google.com'
}
const maincontainer = document.querySelector('#root');

customRender(reactElement, maincontainer)