document.addEventListener("DOMContentLoaded", function () {
    var videos = document.querySelectorAll('.phone-video');
    var buttons = document.querySelectorAll('.play-button');

    buttons.forEach(function (button, index) {
        var video = videos[index];

        button.addEventListener('click', function () {
            videos.forEach(function (v, i) {
                if (i !== index) {
                    v.pause();
                    buttons[i].style.display = 'flex'; 
                }
            });

            if (video.paused) {
                video.play();
                video.currentTime = 0;
                button.style.display = 'none'; 
            } else {
                video.pause();
                button.style.display = 'flex';
            }
        });

        video.addEventListener('click', function () {
            if (!video.paused) {
                video.pause();
                button.style.display = 'flex';
            }
        });
    });
});