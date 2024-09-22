// show tha cash out section
document.getElementById('cash-out-switch-btn')
    .addEventListener('click',function(){

        document.getElementById('cash-out-section').classList.remove('hidden');
        document.getElementById('add-money-section').classList.add('hidden');
})

// show tha add money section
document.getElementById('add-switch-btn')
    .addEventListener('click',function(){
        document.getElementById('add-money-section').classList.remove('hidden');
        document.getElementById('cash-out-section').classList.add('hidden')
})