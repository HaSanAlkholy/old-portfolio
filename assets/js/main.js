let gradients = ['linear-gradient(to right, #43cea2, #185a9d)', 'linear-gradient(to right, #d38312, #a83279)', 'linear-gradient(to right, #fdfc47, #24fe41)', 'linear-gradient(to right, #fe8c00, #f83600)', 'linear-gradient(to right, #00c6ff, #0072ff)', 'linear-gradient(to right, #70e1f5, #ffd194)', 'linear-gradient(to right, #556270, #ff6b6b)', 'linear-gradient(to right, #9d50bb, #6e48aa)', ' linear-gradient(to right, #000000, #e74c3c)', 'linear-gradient(to right, #ff4e50, #f9d423)', 'linear-gradient(to right, #add100, #7b920a)', 'linear-gradient(to right, #870000, #190a05)', 'linear-gradient(to right, #d3959b, #bfe6ba)', 'linear-gradient(to right, #f2709c, #ff9472)', 'linear-gradient(to right, #215f00, #e4e4d9)', 'linear-gradient(to right, #c21500, #ffc500)', 'linear-gradient(to right, #666600, #999966)', 'linear-gradient(to right, #de6262, #ffb88c)', 'linear-gradient(to right, #4b6cb7, #182848)', 'linear-gradient(to right, #fc354c, #0abfbc)', 'linear-gradient(to right, #dc2424, #4a569d)', 'linear-gradient(to right, #3d7eaa, #ffe47a)', 'linear-gradient(to right, #134e5e, #71b280)'];

function gradient() {
    let grad = [...gradients];
    let el = document.querySelectorAll('.grad');

    el.forEach(e => {

        let num = Math.floor(Math.random() * gradients.length);
        e.style.backgroundImage = grad[num];
        grad.splice(num, 1);

    });

};

gradient();

setInterval(gradient, 10000);

// aos

AOS.init({
    duration: 700,
    mirror: true,
    once: true,
    offset: 70,
    disable: function () {
      var maxWidth = 992;
      return window.innerWidth < maxWidth;
    },
    easing: 'ease-in-out'
  });


document.addEventListener('aos:in:progressWidthAdd', ({ detail }) => {
    document.querySelectorAll('.progress-bar').forEach(el => {
        el.classList.add('progress-width');
    })
});
document.addEventListener('aos:in:progressWidth', ({ detail }) => {

    document.querySelectorAll('.progress-bar').forEach(el => {
        el.classList.remove('progress-width');
    })
});

function sendMail(){
    window.open('mailto:test@example.com?subject=subject&body=body');
}


// particles

particlesJS.load('particles-js', './assets/js/vendor/particles.json', function() {

});