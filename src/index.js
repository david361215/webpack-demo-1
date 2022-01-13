import x from './x.js'
import jpg from './assets/stylus.jpg'

// console.log(jpg)
// aaa
const div = document.getElementById('app')
// div.innerHTML = `
//    <img src="${jpg}">
// `

const button = document.createElement('button')
button.innerText = '懒加载'
button.onclick = ()=>{
    const promise = import('./lazy')
    promise.then((module)=>{
        const fn = module.default
        fn()
    },()=>{})
}

div.appendChild(button)