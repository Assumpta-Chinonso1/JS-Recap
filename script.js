 const btnRate = document.getElementById('btnRate')

 const output = document.getElementById('output')

 btnRate.addEventListener('click', () => {
    const rates = document.getElementsByName('rate')

    rates.forEach((rate) => {
        if (rate.checked) {
            output.innerText = ` You Selected:  ${rate.value} `
            
        }
    })
 })