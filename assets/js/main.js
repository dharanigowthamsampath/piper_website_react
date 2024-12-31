document.addEventListener("DOMContentLoaded", function () {
  // Horizontal scroll functionality
  const container = document.querySelector(".horizontal-scroll-container");
  if (container) {
    let isScrolling = false;
    let startX;
    let scrollLeft;

    container.addEventListener("wheel", (e) => {
      e.preventDefault();
      container.scrollLeft += e.deltaY;
    });

    container.addEventListener("touchstart", (e) => {
      isScrolling = true;
      startX = e.touches[0].pageX - container.offsetLeft;
      scrollLeft = container.scrollLeft;
    });

    container.addEventListener("touchmove", (e) => {
      if (!isScrolling) return;
      e.preventDefault();
      const x = e.touches[0].pageX - container.offsetLeft;
      const walk = (x - startX) * 2;
      container.scrollLeft = scrollLeft - walk;
    });

    container.addEventListener("touchend", () => {
      isScrolling = false;
    });
  }

  // Keyboard navigation
  document.addEventListener("keydown", (e) => {
    const container = document.querySelector(".horizontal-scroll-container");
    if (container) {
      if (e.key === "ArrowRight") {
        container.scrollBy({ left: window.innerWidth, behavior: "smooth" });
      } else if (e.key === "ArrowLeft") {
        container.scrollBy({ left: -window.innerWidth, behavior: "smooth" });
      }
    }
  });

  // Carousel Functionality
  const track = document.querySelector(".carousel-track");
  const slides = Array.from(document.querySelectorAll(".carousel-slide"));
  const nextButton = document.querySelector(".carousel-button.next");
  const prevButton = document.querySelector(".carousel-button.prev");
  const carouselIndicators = document.querySelectorAll(".indicator");

  if (track && slides.length > 0) {
    let currentIndex = 0;
    let interval;

    function moveToSlide(index) {
      slides.forEach((slide) => slide.classList.remove("active"));
      carouselIndicators.forEach((indicator) =>
        indicator.classList.remove("active")
      );
      slides[index].classList.add("active");
      carouselIndicators[index].classList.add("active");
      currentIndex = index;
    }

    function moveToNextSlide() {
      const nextIndex = (currentIndex + 1) % slides.length;
      moveToSlide(nextIndex);
    }

    function moveToPrevSlide() {
      const prevIndex = (currentIndex - 1 + slides.length) % slides.length;
      moveToSlide(prevIndex);
    }

    if (nextButton) {
      nextButton.addEventListener("click", moveToNextSlide);
    }

    if (prevButton) {
      prevButton.addEventListener("click", moveToPrevSlide);
    }

    carouselIndicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => moveToSlide(index));
    });

    // Auto-advance slides
    setInterval(moveToNextSlide, 5000);
  }

  // Mobile Menu Toggle
  const mobileMenuBtn = document.querySelector(".mobile-menu-btn");
  const navLinks = document.querySelector(".nav-links");

  if (mobileMenuBtn && navLinks) {
    mobileMenuBtn.addEventListener("click", () => {
      navLinks.classList.toggle("active");
      mobileMenuBtn.classList.toggle("active");
    });
  }

  // Course Filtering
  const courseFilterButtons = document.querySelectorAll(".filter-btn");
  const courseCards = document.querySelectorAll(".course-card");

  if (courseFilterButtons.length > 0 && courseCards.length > 0) {
    courseFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        courseFilterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const filter = button.getAttribute("data-filter");

        courseCards.forEach((card) => {
          if (
            filter === "all" ||
            card.getAttribute("data-category") === filter
          ) {
            card.style.display = "block";
            setTimeout(() => {
              card.style.opacity = "1";
              card.style.transform = "translateY(0)";
            }, 10);
          } else {
            card.style.opacity = "0";
            card.style.transform = "translateY(20px)";
            setTimeout(() => {
              card.style.display = "none";
            }, 300);
          }
        });
      });
    });
  }

  // Blog Category Filtering
  const blogFilterButtons = document.querySelectorAll(
    ".blog-categories .filter-btn"
  );
  const blogPosts = document.querySelectorAll(".blog-post");

  if (blogFilterButtons.length > 0 && blogPosts.length > 0) {
    blogFilterButtons.forEach((button) => {
      button.addEventListener("click", () => {
        blogFilterButtons.forEach((btn) => btn.classList.remove("active"));
        button.classList.add("active");

        const category = button.getAttribute("data-filter");

        blogPosts.forEach((post) => {
          const postCategory = post
            .querySelector(".post-category")
            ?.textContent.toLowerCase();

          if (
            category === "all" ||
            (postCategory && postCategory.includes(category.toLowerCase()))
          ) {
            post.style.display = "block";
            if (post.classList.contains("featured")) {
              post.style.display = "grid";
            }
          } else {
            post.style.display = "none";
          }
        });
      });
    });
  }

  // Pop-up Form Functions
  function openPopup() {
    const popup = document.getElementById("enquiryPopup");
    popup.classList.add("active");
    document.body.style.overflow = "hidden";

    // Add animation to the content
    setTimeout(() => {
      popup.querySelector(".popup-content").style.opacity = "1";
      popup.querySelector(".popup-content").style.transform = "translateY(0)";
    }, 10);
  }

  function closePopup() {
    const popup = document.getElementById("enquiryPopup");
    popup.querySelector(".popup-content").style.opacity = "0";
    popup.querySelector(".popup-content").style.transform = "translateY(-50px)";

    setTimeout(() => {
      popup.classList.remove("active");
      document.body.style.overflow = "";
    }, 300);
  }

  function submitEnquiryForm(event) {
    event.preventDefault();

    // Get form data
    const form = event.target;
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);

    // Here you would typically send the data to your server
    console.log("Form submitted:", data);

    // Show success message
    alert("Thank you for your enquiry! We will get back to you shortly.");

    // Reset form and close popup
    form.reset();
    closePopup();
  }

  // Event Listeners
  document.addEventListener("DOMContentLoaded", function () {
    // Add click event to all request buttons
    const requestButtons = document.querySelectorAll(".request-btn");
    requestButtons.forEach((button) => {
      button.addEventListener("click", openPopup);
    });

    // Close popup when clicking outside
    const popup = document.getElementById("enquiryPopup");
    popup.addEventListener("click", function (e) {
      if (e.target === this) {
        closePopup();
      }
    });

    // Close popup with Escape key
    document.addEventListener("keydown", function (e) {
      if (e.key === "Escape" && popup.classList.contains("active")) {
        closePopup();
      }
    });
  });

  // Achievement Counter Animation
  function startCounterAnimation() {
    const achievementNumbers = document.querySelectorAll(".achievement-number");
    const options = {
      threshold: 0.5,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const target = entry.target;
          const value = target.innerText;
          let startValue = 0;
          let endValue = parseInt(value);
          if (value.includes("+")) {
            endValue = parseInt(value);
          } else if (value.includes("%")) {
            endValue = parseInt(value);
          }
          const duration = 2000;
          const increment = (endValue / duration) * 10;

          function updateCounter() {
            startValue += increment;
            if (startValue < endValue) {
              target.innerText =
                Math.ceil(startValue) +
                (value.includes("+") ? "+" : value.includes("%") ? "%" : "");
              setTimeout(updateCounter, 10);
            } else {
              target.innerText = value;
            }
          }

          target.classList.add("animate");
          updateCounter();
          observer.unobserve(target);
        }
      });
    }, options);

    achievementNumbers.forEach((number) => {
      observer.observe(number);
    });
  }

  // Initialize counter animation when DOM is loaded
  document.addEventListener("DOMContentLoaded", () => {
    startCounterAnimation();
  });

  // Header Scroll Behavior
  let lastScroll = 0;
  const header = document.querySelector(".header");
  const topBar = document.querySelector(".top-bar");
  const topBarHeight = topBar ? topBar.offsetHeight : 0;

  window.addEventListener("scroll", () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > lastScroll && currentScroll > topBarHeight) {
      // Scrolling down & past top bar
      header.classList.add("scrolled");
      topBar.style.transform = `translateY(-${topBarHeight}px)`;
    } else {
      // Scrolling up or at top
      header.classList.remove("scrolled");
      topBar.style.transform = "translateY(0)";
    }

    lastScroll = currentScroll;
  });

  // Reviews Slider Functionality
  const reviewsTrack = document.getElementById("reviewsTrack");
  const prevBtn = document.getElementById("reviewPrev");
  const nextBtn = document.getElementById("reviewNext");
  const indicators = document.querySelectorAll("#reviewIndicators .indicator");
  let currentSlide = 0;
  let autoSlideInterval;

  if (reviewsTrack && prevBtn && nextBtn) {
    const reviewCards = reviewsTrack.children;
    const totalSlides = reviewCards.length;

    function showSlide(index) {
      // Hide all slides
      Array.from(reviewCards).forEach((card, i) => {
        card.classList.remove("active");
        card.style.transform = `translateX(${100 * (i - index)}%)`;
      });

      // Remove active class from all indicators
      indicators.forEach((indicator) => {
        indicator.classList.remove("active");
      });

      // Show current slide and update indicator
      reviewCards[index].classList.add("active");
      if (indicators[index]) {
        indicators[index].classList.add("active");
      }
    }

    function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
    }

    function prevSlide() {
      currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
      showSlide(currentSlide);
    }

    // Event listeners
    nextBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      nextSlide();
      startAutoSlide();
    });

    prevBtn.addEventListener("click", () => {
      clearInterval(autoSlideInterval);
      prevSlide();
      startAutoSlide();
    });

    // Indicator clicks
    indicators.forEach((indicator, index) => {
      indicator.addEventListener("click", () => {
        clearInterval(autoSlideInterval);
        currentSlide = index;
        showSlide(currentSlide);
        startAutoSlide();
      });
    });

    function startAutoSlide() {
      autoSlideInterval = setInterval(nextSlide, 5000);
    }

    // Initialize slider
    showSlide(0);
    startAutoSlide();
  }
});
