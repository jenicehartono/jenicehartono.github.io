const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

const projects = document.querySelectorAll('.projects img');

let currentIndex = 0;

function showImage(index) {
    projects.forEach(image => {
        image.style.display = 'none';
    });
    projects[index].style.display = 'block';
}

showImage(currentIndex);

prevBtn.addEventListener('click', function() {
    currentIndex = (currentIndex - 1 + projects.length) % projects.length;
    showImage(currentIndex);
});

nextBtn.addEventListener('click', function() {
    currentIndex = (currentIndex + 1) % projects.length;
    showImage(currentIndex);
});
