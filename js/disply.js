document.getElementById('btn-add-money')
    .addEventListener('click', function(e){
        e.preventDefault();
        
        const inputAmount = document.getElementById('input-balance').value;
        // console.log(inputAmount);
        const inputPin = document.getElementById('input-pin').value;
        // console.log(inputPin);
        const inputNumber = parseFloat(inputAmount);

        if(inputPin === '1234'){
           const total = document.getElementById('total-blc').innerText;
            const totalNumber = parseFloat(total);
            const newMoney = totalNumber + inputNumber;

            document.getElementById('total-blc').innerText = newMoney;
        }
        else{
            alert('You are wrong pin! ')
        }
    })