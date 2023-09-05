const app = document.getElementById
('typewriter');

const typewriter = new Typewriter(app, {
    loop: true,
    delay: 75

});

typewriter
.typeString('La capital del sol')
.pauseFor(200)
.start();


