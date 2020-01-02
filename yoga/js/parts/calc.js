function calc() {
    let persons = document.querySelectorAll('.counter-block-input')[0],
        restDays = document.querySelectorAll('.counter-block-input')[1],
        place = document.getElementById('select'),
        totalValue = document.getElementById('total'),
        personSum = 0,
        daySum = 0,
        total = 0;

    totalValue.textContent = 0;

    persons.addEventListener('change', function () {
        personSum = +this.value;
        total = (daySum + personSum) * 4000;

        if (restDays.value == '' || this.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });
    restDays.addEventListener('change', function () {
        daySum = +this.value;
        total = (daySum + personSum) * 4000;

        if (persons.value == '' || this.value == '') {
            totalValue.textContent = 0;
        } else {
            totalValue.textContent = total;
        }
    });

    place.addEventListener('change', function () {
        if (restDays.value == '' || persons.value == '') {
            totalValue.textContent = 0;
        } else {
            let a = total;
            totalValue.textContent = a * this.options[this.selectedIndex].value;
        }
    });
}

module.exports = calc;