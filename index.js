document.addEventListener('keydown', function(e) {
    var key = document.querySelector('div[data-key="'+(e.keyCode)+'"]');
    var audio = document.querySelector('audio[data-key="'+(e.keyCode)+'"]');
    if (key) {
        audio.play();
        key.classList.add('playing');
        setTimeout(function() {
            key.classList.remove('playing');
        }, 100);
    }
});
