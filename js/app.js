var left = document.querySelector('.left'),
    right = document.querySelector('.right');


function checkEventType(event) {

    switch (event.target.className) {

        case "left":
            if (event.type == 'mouseenter') {
                left.style.width = '75%';
                left.firstElementChild.classList.add('grayscale-off');
                right.style.width = '25%';
            }

            if (event.type == 'mouseleave') {
                left.style.width = '50%';
                left.firstElementChild.classList.remove('grayscale-off');
                right.style.width = '50%';
            }
            break;

        case "right":
            if (event.type == 'mouseenter') {
                right.style.width = '75%';
                right.firstElementChild.classList.add('grayscale-off');
                left.style.width = '25%';
            }

            if (event.type == 'mouseleave') {
                right.style.width = '50%';
                right.firstElementChild.classList.remove('grayscale-off');
                left.style.width = '50%';
            }
            break;

    }

}

left.addEventListener('mouseenter', checkEventType, false);
left.addEventListener('mouseleave', checkEventType, false);
right.addEventListener('mouseenter', checkEventType, false);
right.addEventListener('mouseleave', checkEventType, false);
