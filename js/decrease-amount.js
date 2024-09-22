document.getElementById('btn-cash-out')
    .addEventListener('click', function(e){
        e.preventDefault();
        
        const inputAmount = document.getElementById('input-cash-out').value;
        const inputPin = document.getElementById('input-cash-out-pin').value;
        const inputNumber = parseFloat(inputAmount);

        if(inputPin === '1234'){
           const total = document.getElementById('total-blc').innerText;
            const totalNumber = parseFloat(total);
            const newMoney = totalNumber - inputNumber;

            document.getElementById('total-blc').innerText = newMoney;
        }
        else{
            alert('You are wrong pin! ')
        }
    })