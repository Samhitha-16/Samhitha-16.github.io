document.addEventListener("DOMContentLoaded", function() {
    const readMoreBtn = document.querySelector(".read-more-btn");
    const moreText = document.querySelector(".more-text");

    readMoreBtn.addEventListener("click", function() {
        moreText.style.display = moreText.style.display === "none" ? "inline" : "none";
        readMoreBtn.textContent = readMoreBtn.textContent === "Read More" ? "Read Less" : "Read More";
    });
});
