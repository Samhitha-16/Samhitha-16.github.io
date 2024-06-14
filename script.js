document.addEventListener("DOMContentLoaded", () => {
    const counters = document.querySelectorAll('.num');
    const speed = 200; // The lower the speed, the faster the count-up

    counters.forEach(counter => {
        const updateCount = () => {
            const target = +counter.getAttribute('data-val');
            const count = +counter.innerText;

            // Lower inc to slow and higher to fast
            const inc = target / speed;

            // Check if target is reached
            if (count < target) {
                // Add inc to count and output in counter
                counter.innerText = Math.ceil(count + inc);
                // Call function every 1 ms
                setTimeout(updateCount, 1);
            } else {
                counter.innerText = target;
            }
        };

        updateCount();
    });
});
