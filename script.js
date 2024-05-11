 const btnRate = document.getElementById('btnRate')

 const output = document.getElementById('output')

 const btn = document.getElementById('countBtn')

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