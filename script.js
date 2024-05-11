 const btnRate = document.getElementById('btnRate')

 const output = document.getElementById('output')

 const btn = document.getElementById('countBtn')

 const myStack = document.getElementById('myStack')

 const menu = document.getElementById('logo')

 /*const element = document.querySelector('a')

 const note = document.querySelector('.menu-item')*/

 const note = document.querySelector('.note')

 btnRate.addEventListener('click', () => {
    const rates = document.getElementsByName('rate')

    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = ` You Selected:  ${rate.value} `
            
        }
    })
 })

   btn.addEventListener('click', () =>{
    const headings = document.getElementsByTagName('h2')
    alert(`The number of H2 Tags: ${headings.length}`)
   })


    const stacks = myStack.getElementsByClassName('stack')

    const data = [].map.call(stacks, stack => stack.textContent)

    console.log(data);

    /*element.addEventListener('click', () =>{
        const headings1 = document.querySelector('h1')
        const headings2 =document.querySelector('h2')
        if (items.clicked ) {
         headings2.className.innerText = ` You clicked: ${headings1.value}`
        }
    })*/

    console.log(note.parentNode);

   const firstChild = menu.firstChild.nodeName;

   const children = menu.children

   console.log(menu.lastElementChild);

   console.log(firstChild);

   console.log(children);

 const div = document.createElement('div')
 
 div.id = 'content'

 div.innerHTML = '<p> Hello CreateElement </p>'

 document.body.appendChild(div)

 const h2 = document.createElement('h2')

 h2.textContent = 'Add h2 to the list'

 div.appendChild(h2)

 document.body.appendChild(h2)