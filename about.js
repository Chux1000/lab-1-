const track = document.getElementById('track');
    const slides = document.querySelectorAll('.slide');
    let index = 0;

    function showSlide() {
      track.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      index = (index + 1) % slides.length;
      showSlide();
    }

    function prevSlide() {
      index = (index - 1 + slides.length) % slides.length;
      showSlide();
    }

    // Auto-play every 4 seconds
    setInterval(() => {
      nextSlide();
    }, 4000);