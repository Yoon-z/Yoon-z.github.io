// Initialize the state to keep track of the current displayed element
let isImageVisible = true;

// Button listeners for switching between iframe and image
document.getElementById('next-btn').addEventListener('click', function () {
    // Switch visibility between iframe and image
    if (isImageVisible) {
        document.getElementById('crop-change-map').style.display = 'block';
        document.getElementById('crop-change-class').style.display = 'block';
        document.getElementById('crop-change-image').style.display = 'none';

        document.getElementById('para2').style.display = 'block';
        document.getElementById('para1').style.display = 'none';

        isImageVisible = false;
    } else {
        document.getElementById('crop-change-map').style.display = 'none';
        document.getElementById('crop-change-class').style.display = 'none';
        document.getElementById('crop-change-image').style.display = 'block';

        document.getElementById('para2').style.display = 'none';
        document.getElementById('para1').style.display = 'block';

        isImageVisible = true;
    }
});

document.getElementById('prev-btn').addEventListener('click', function () {
    // Reverse the action for "Previous" button
    if (isImageVisible) {
        document.getElementById('crop-change-map').style.display = 'block';
        document.getElementById('crop-change-class').style.display = 'block';
        document.getElementById('crop-change-image').style.display = 'none';

        document.getElementById('para1').style.display = 'none';
        document.getElementById('para2').style.display = 'block';

        isImageVisible = false;
    } else {
        document.getElementById('crop-change-map').style.display = 'none';
        document.getElementById('crop-change-class').style.display = 'none';
        document.getElementById('crop-change-image').style.display = 'block';

        document.getElementById('para1').style.display = 'block';
        document.getElementById('para2').style.display = 'none';

        isImageVisible = true;
    }
});
