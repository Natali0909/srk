// Таймер до дедлайну
const deadline = new Date("2024-12-14T23:59:59").getTime();
const timerDisplay = document.getElementById("timer-display");

function updateTimer() {
    const now = new Date().getTime();
    const distance = deadline - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    timerDisplay.innerHTML = `${days} дн. ${hours} год. ${minutes} хв. ${seconds} сек.`;

    if (distance < 0) {
        timerDisplay.innerHTML = "Дедлайн минув!";
    }
}


        // Tooltip initialization for enhanced UX
        const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]');
        const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl));
setInterval(updateTimer, 1000);

// Кнопка прокрутки наверх
const backToTopButton = document.getElementById("back-to-top");

window.addEventListener("scroll", () => {
    if (window.scrollY > 200) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
});

function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Показати спливаюче повідомлення при виході курсора за межі сторінки
document.addEventListener("mouseleave", (e) => {
    if (!e.relatedTarget && !e.toElement) {
        const exitMessage = document.getElementById("exit-message");
        exitMessage.style.display = "block";
        setTimeout(() => exitMessage.style.display = "none", 3000); // Сховати через 3 секунди
    }
});

// Анімація появи елементів при прокручуванні
document.addEventListener("DOMContentLoaded", function () {
    const fadeElements = document.querySelectorAll(".fade-in");
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });
    fadeElements.forEach(element => observer.observe(element));
});




        function calculateCost() {
            const numMonths = parseInt(document.getElementById("num-months").value);
            const pricePerSession = 150;
            const sessionsPerMonth = 4;
            let totalSessions = numMonths * sessionsPerMonth;
            let totalCost = totalSessions * pricePerSession;

            // Застосування знижок
            if (document.getElementById("friend-checkbox").checked) totalCost *= 0.95; // 5% знижка
            if (document.getElementById("military-checkbox").checked) totalCost *= 0.90; // 10% знижка
            if (document.getElementById("privilege-checkbox").checked) totalCost *= 0.85; // 15% знижка
            if (document.getElementById("pair-checkbox").checked) totalCost *= 0.93; // 7% знижка

            document.getElementById("calc-result").innerHTML = `Загальна вартість: ${totalCost.toFixed(2)} грн на ${totalSessions} занять.`;

            // Таймер до закінчення навчання
            const endDate = new Date();
            endDate.setDate(endDate.getDate() + (numMonths * 30)); // Розрахунок кінцевої дати
            startEndTimer(endDate);
        }

        // Функція для запуску таймера до закінчення навчання
        function startEndTimer(endDate) {
            setInterval(() => {
                const now = new Date().getTime();
                const distance = endDate - now;

                if (distance < 0) {
                    document.getElementById("timer-message").innerHTML = "Ваше навчання завершено.";
                    return;
                }

                const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                const seconds = Math.floor((distance % (1000 * 60)) / 1000);

                document.getElementById("timer-message").innerHTML = `До закінчення вашого навчання залишилось: ${days}д ${hours}г ${minutes}хв ${seconds}с`;
            }, 1000);
        }
		
		
		document.addEventListener("DOMContentLoaded", () => {
    const notif = document.getElementById("geoNotif");
    const closeBtn = document.getElementById("closeNotif");

    // Автоматичне закриття через 5 секунд
    setTimeout(() => {
        notif.style.display = "none";
    }, 5000);

    // Закриття при кліку на кнопку
    closeBtn.addEventListener("click", () => {
        notif.style.display = "none";
    });
});


        // Приховуємо анімацію завантаження та показуємо сайт після 5 секунд
        document.addEventListener("DOMContentLoaded", () => {
            setTimeout(() => {
                document.getElementById("loadingAnimation").style.display = "none";
                document.getElementById("mainContent").style.display = "block";
            }, 1000);
        });