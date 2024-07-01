$(document).ready(function () {

    const progress = $(".input-range");

    progress.on('input', function () {
        let value = (this.value - this.min) / (this.max - this.min)*100;
        let value2 = $(this).val();
        $(this).parent().parent().find(".hero_calc--item-change span").text(value2);
        this.style.background = 'linear-gradient(to right, #F54B49 0%, #F54B49 ' + value + '%, #6174E3 ' + value + '%, #6174E3 100%)';

        calculateLoan()
    });

    function calculateLoan(){
        let sum = +parseInt($('input[name=sum]').val());
        let percent = +parseInt($('input[name=bet]').val());
        let days = +parseInt($('input[name=limitation]').val());

        let overPayment = (sum * percent) * days / 365;
        let totalPayment = sum + overPayment;
        // let months = (days / 365) / 12;
        let perDay = totalPayment / days;
        // let annuetPercent = sum * (p + ((p / ((1 + p) ** months) - 1)));
        // let everyMonthsPayments = totalPayment * (days / 365);

        $('.everyMonthsPrice span').text(
            perDay.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
        )

        $('.overPayment span').text(
            overPayment.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
        )

        $('.totalPayments span').text(
            totalPayment.toLocaleString("en-US", {
                minimumFractionDigits: 0,
                maximumFractionDigits: 0
            })
        )

        // console.log(sum,percent,days)
    }
});