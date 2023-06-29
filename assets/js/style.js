function time() {
    let today = new Date();
    let month = today.getUTCMonth();
    let months;

    months = (month === 0 ? "Jan" : month === 1 ? "Feb" : month === 2 ? "March" : month === 3 ? "April" : month === 4 ? "May" : month === 5 ? "June" : month === 6 ? "July" : month === 7 ? "Aug" : month === 8 ? "Sept" : month === 9 ? "Oct" : month === 10 ? "Nov" : "other month")
    let x = today.getDate() + " " + months + " ," + today.getFullYear();
    document.getElementById("demo").innerHTML = x;
    document.getElementById("demo1").innerHTML = x;
    document.getElementById("demo2").innerHTML = x;
    console.log(x);
} time();

window.addEventListener('scroll', function () {

    let nav = document.getElementById('navbar');


    if (window.pageYOffset >= 500) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
});

window.addEventListener('scroll', function () {

    let nav = document.getElementById('back-to-top');

    if (window.pageYOffset <= 400) {
        nav.classList.add('top');
    } else {
        nav.classList.remove('top');
    }
});