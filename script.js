document.addEventListener('DOMContentLoaded', function() {
    // Мобильное меню
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const mainMenu = document.querySelector('.main-menu');
    
    mobileMenuBtn.addEventListener('click', function() {
        mainMenu.classList.toggle('active');
        this.querySelector('i').classList.toggle('fa-times');
        this.querySelector('i').classList.toggle('fa-bars');
    });
    
    // Слайдер
    const slider = document.querySelector('.slider-container');
    const slides = document.querySelectorAll('.slide');
    const dots = document.querySelectorAll('.dot');
    const prevBtn = document.querySelector('.slider-prev');
    const nextBtn = document.querySelector('.slider-next');
    
    let currentSlide = 0;
    let slideInterval;
    const slideDuration = 5000; // 5 секунд
    
    function showSlide(n) {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        currentSlide = (n + slides.length) % slides.length;
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }
    
    function nextSlide() {
        showSlide(currentSlide + 1);
    }
    
    function prevSlide() {
        showSlide(currentSlide - 1);
    }
    
    function startSlider() {
        slideInterval = setInterval(nextSlide, slideDuration);
    }
    
    function stopSlider() {
        clearInterval(slideInterval);
    }
    
    // Инициализация слайдера
    showSlide(0);
    startSlider();
    
    // Обработчики событий для слайдера
    slider.addEventListener('mouseenter', stopSlider);
    slider.addEventListener('mouseleave', startSlider);
    
    nextBtn.addEventListener('click', function() {
        stopSlider();
        nextSlide();
        startSlider();
    });
    
    prevBtn.addEventListener('click', function() {
        stopSlider();
        prevSlide();
        startSlider();
    });
    
    dots.forEach((dot, index) => {
        dot.addEventListener('click', function() {
            stopSlider();
            showSlide(index);
            startSlider();
        });
    });
    
    // Галерея
    const galleryContainer = document.querySelector('.gallery-container');
    const galleryImages = document.querySelectorAll('.gallery-img');
    const galleryPrev = document.querySelector('.gallery-prev');
    const galleryNext = document.querySelector('.gallery-next');
    
    let currentImage = 0;
    let galleryInterval;
    const galleryDuration = 4000; // 4 секунды
    
    function showImage(n) {
        galleryImages.forEach(img => img.classList.remove('active'));
        
        currentImage = (n + galleryImages.length) % galleryImages.length;
        galleryImages[currentImage].classList.add('active');
    }
    
    function nextImage() {
        showImage(currentImage + 1);
    }
    
    function prevImage() {
        showImage(currentImage - 1);
    }
    
    function startGallery() {
        galleryInterval = setInterval(nextImage, galleryDuration);
    }
    
    function stopGallery() {
        clearInterval(galleryInterval);
    }
    
    // Инициализация галереи
    showImage(0);
    startGallery();
    
    // Обработчики событий для галереи
    galleryContainer.addEventListener('mouseenter', stopGallery);
    galleryContainer.addEventListener('mouseleave', startGallery);
    
    galleryNext.addEventListener('click', function() {
        stopGallery();
        nextImage();
        startGallery();
    });
    
    galleryPrev.addEventListener('click', function() {
        stopGallery();
        prevImage();
        startGallery();
    });
    
    // Модальные окна для событий ВОВ
    const eventModal = document.getElementById('eventModal');
    const eventDetailsBtns = document.querySelectorAll('.btn-details');
    const eventModalClose = document.querySelector('#eventModal .modal-close');
    const modalTitle = document.getElementById('modalTitle');
    const modalDescription = document.getElementById('modalDescription');
    const eventVideo = document.getElementById('eventVideo');
    
    // Данные для модальных окон
    const eventData = {
        0: {
            title: "Битва за Москву (1941-1942)",
            description: "Битва за Москву стала первым крупным поражением немецких войск во Второй мировой войне. Несмотря на первоначальные успехи, немецкое наступление было остановлено в декабре 1941 года, а затем отброшено на 100-250 км от столицы. Эта победа имела огромное моральное значение, развеяв миф о непобедимости вермахта. Дети помогали строить укрепления и работали на заводах, заменяя ушедших на фронт взрослых.",
            video: "https://www.youtube.com/embed/ZxX6K4kqQ3Y"
        },
        1: {
            title: "Сталинградская битва (1942-1943)",
            description: "Сталинградская битва - одно из самых кровопролитных сражений в истории человечества. Оно продолжалось 200 дней и ночей и завершилось окружением и капитуляцией 6-й армии вермахта. Эта победа стала переломным моментом в войне, после которого стратегическая инициатива перешла к Красной Армии. Дети-разведчики внесли неоценимый вклад в победу, доставляя важные сведения через линию фронта.",
            video: "https://www.youtube.com/embed/8M9X4XyJk-4"
        },
        2: {
            title: "Курская битва (1943)",
            description: "Курская битва (5 июля - 23 августа 1943 года) - крупнейшее танковое сражение в истории, в котором с обеих сторон участвовало около 6 тысяч танков. После поражения под Курском немецкие войска окончательно потеряли стратегическую инициативу и перешли к обороне на всех фронтах. Подростки работали на заводах, производящих технику для фронта, по 12-14 часов в сутки.",
            video: "https://www.youtube.com/embed/KWQkGzB7nJ4"
        },
        3: {
            title: "Берлинская операция (1945)",
            description: "Берлинская операция (16 апреля - 8 мая 1945 года) - завершающая стратегическая наступательная операция советских войск. В ходе операции советские войска разгромили 70 пехотных, 12 танковых и 11 моторизованных дивизий противника, взяли в плен около 480 тысяч человек. 8 мая 1945 года был подписан акт о безоговорочной капитуляции Германии. Многие юные участники войны, начавшие воевать в 12-14 лет, дошли до Берлина.",
            video: "https://www.youtube.com/embed/6hDZl6qk3wY"
        }
    };
    
    eventDetailsBtns.forEach((btn, index) => {
        btn.addEventListener('click', function() {
            const data = eventData[index];
            modalTitle.textContent = data.title;
            modalDescription.textContent = data.description;
            eventVideo.src = data.video;
            eventModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Добавляем класс visited для ссылки
            this.classList.add('visited');
        });
    });
    
    eventModalClose.addEventListener('click', function() {
        eventModal.style.display = 'none';
        eventVideo.src = '';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === eventModal) {
            eventModal.style.display = 'none';
            eventVideo.src = '';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Модальное окно для регистрации
    const registerModal = document.getElementById('registerModal');
    const registerBtns = document.querySelectorAll('.btn-register');
    const registerModalClose = document.querySelector('#registerModal .modal-close');
    const registerForm = document.getElementById('registerForm');
    const eventNameInput = document.getElementById('eventName');
    
    registerBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const eventName = this.closest('.activity-card').querySelector('h3').textContent;
            eventNameInput.value = eventName;
            registerModal.style.display = 'block';
            document.body.style.overflow = 'hidden';
            
            // Добавляем класс visited для ссылки
            this.classList.add('visited');
        });
    });
    
    registerModalClose.addEventListener('click', function() {
        registerModal.style.display = 'none';
        document.body.style.overflow = 'auto';
    });
    
    window.addEventListener('click', function(event) {
        if (event.target === registerModal) {
            registerModal.style.display = 'none';
            document.body.style.overflow = 'auto';
        }
    });
    
    // Валидация формы регистрации
    registerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        const fullName = document.getElementById('fullName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const participants = document.getElementById('participants').value;
        
        if (!fullName || !email || !phone || !participants) {
            alert('Пожалуйста, заполните все обязательные поля');
            return;
        }
        
        if (!validateEmail(email)) {
            alert('Пожалуйста, введите корректный email');
            return;
        }
        
        if (!validatePhone(phone)) {
            alert('Пожалуйста, введите корректный номер телефона');
            return;
        }
        
        // Здесь должна быть отправка формы на сервер
        alert('Спасибо за регистрацию! Мы свяжемся с вами в ближайшее время.');
        registerModal.style.display = 'none';
        registerForm.reset();
        document.body.style.overflow = 'auto';
    });
    
    function validateEmail(email) {
        const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return re.test(email);
    }
    
    function validatePhone(phone) {
        const re = /^[\d\s\-\+\(\)]+$/;
        return re.test(phone);
    }
    
    // Кнопка "Наверх"
    const btnUp = document.querySelector('.btn-up');
    
    window.addEventListener('scroll', function() {
        if (window.pageYOffset > 300) {
            btnUp.classList.add('visible');
        } else {
            btnUp.classList.remove('visible');
        }
    });
    
    btnUp.addEventListener('click', function() {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
    
    // Плавная прокрутка для якорных ссылок
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 80,
                    behavior: 'smooth'
                });
                
                // Добавляем класс visited для ссылки
                this.classList.add('visited');
                
                // Закрываем мобильное меню, если оно открыто
                if (mainMenu.classList.contains('active')) {
                    mainMenu.classList.remove('active');
                    mobileMenuBtn.querySelector('i').classList.remove('fa-times');
                    mobileMenuBtn.querySelector('i').classList.add('fa-bars');
                }
            }
        });
    });
    
    // Отслеживание посещенных ссылок
    document.querySelectorAll('a.visited-link').forEach(link => {
        link.addEventListener('click', function() {
            this.classList.add('visited');
        });
    });
});