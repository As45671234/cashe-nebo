document.addEventListener('DOMContentLoaded', () => {
    // 1. Мобильное меню (Эмуляция, так как нет дизайна открытого меню, 
    // просто переключаем видимость или выводим алерт для демонстрации)
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.nav');
    const headerContact = document.querySelector('.header__contact');
    
    if (burger && nav) {
        burger.addEventListener('click', () => {
            burger.classList.toggle('active');
            nav.classList.toggle('active');
            if (headerContact) headerContact.classList.toggle('active');
        });
    }

    // 2. Плавный скролл к якорям
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Учитываем высоту фиксированного хедера
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // 3. Обработка кнопок "По запросу" и "Заказать расчет"
    const modalButtons = document.querySelectorAll('.btn--primary, .card__btn');
    
    modalButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Если это ссылка внутри кнопки (как в карточках)
            if(e.target.tagName !== 'A') {
                // e.preventDefault(); // Если нужно предотвратить переход
            }
            // Здесь может быть логика открытия модального окна
            console.log('Button clicked:', btn.textContent.trim());
        });
    });
});