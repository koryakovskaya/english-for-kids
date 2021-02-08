const cardsInfo = [
    [
        {enWord: 'Mother', ruWord: 'Мама', imgLink: './assets/images/mother.png', audioLink: './assets/audio/mother.mp3',},
        {enWord: 'Father', ruWord: 'Отец', imgLink: './assets/images/father.png', audioLink: './assets/audio/father.mp3',},
        {enWord: 'Family', ruWord: 'Семья', imgLink: './assets/images/all_family.png', audioLink: './assets/audio/family.mp3',},
        {enWord: 'Grandmother', ruWord: 'Бабушка', imgLink: './assets/images/grandmother.png', audioLink: './assets/audio/grandmother.mp3',},
        {enWord: 'Grandfather', ruWord: 'Дедушка', imgLink: './assets/images/grandfather.png', audioLink: './assets/audio/grandfather.mp3',},
        {enWord: 'Children', ruWord: 'Дети', imgLink: './assets/images/Children.png', audioLink: './assets/audio/children.mp3',},
        {enWord: 'Groom', ruWord: 'Жених', imgLink: './assets/images/groom.png', audioLink: './assets/audio/groom.mp3',},
        {enWord: 'Bride', ruWord: 'Невеста', imgLink: './assets/images/bride.png', audioLink: './assets/audio/bride.mp3'},
    ],
    [
        {enWord: 'Room', ruWord: 'Комната', imgLink: './assets/images/room.png', audioLink: './assets/audio/room.mp3',},
        {enWord: 'Bathroom', ruWord: 'Ванная комната', imgLink: './assets/images/bath.png', audioLink: './assets/audio/bath.mp3',},
        {enWord: 'Balcony', ruWord: 'Балкон', imgLink: './assets/images/balcony.png', audioLink: './assets/audio/balcony.mp3',},
        {enWord: 'Door', ruWord: 'Дверь', imgLink: './assets/images/door.png', audioLink: './assets/audio/door.mp3',},
        {enWord: 'Window', ruWord: 'Окно', imgLink: './assets/images/window.png', audioLink: './assets/audio/window.mp3',},
        {enWord: 'Bedroom', ruWord: 'Спальня', imgLink: './assets/images/bedroom.png', audioLink: './assets/audio/bedroom.mp3',},
        {enWord: 'Kitchen', ruWord: 'Кухня', imgLink: './assets/images/kitchen.png', audioLink: './assets/audio/kitchen.mp3',},
        {enWord: 'Hallway', ruWord: 'Коридор', imgLink: './assets/images/hall.png', audioLink: './assets/audio/hall.mp3'},
    ],
    [
        {enWord: 'Pizza', ruWord: 'Пицца', imgLink: './assets/images/pizza.png', audioLink: './assets/audio/pizza.mp3',},
        {enWord: 'Noodles', ruWord: 'Лапша', imgLink: './assets/images/noodles.png', audioLink: './assets/audio/noodles.mp3',},
        {enWord: 'Fast food', ruWord: 'Быстрая еда', imgLink: './assets/images/fast.png', audioLink: './assets/audio/fast.mp3',},
        {enWord: 'Sandwich', ruWord: 'Бутерброд', imgLink: './assets/images/sandwich.png', audioLink: './assets/audio/sandwich.mp3',},
        {enWord: 'Chicken', ruWord: 'Курица', imgLink: './assets/images/chicken.png', audioLink: './assets/audio/chicken.mp3',},
        {enWord: 'Egg', ruWord: 'Яйцо', imgLink: './assets/images/egg.png', audioLink: './assets/audio/egg.mp3',},
        {enWord: 'Cake', ruWord: 'Торт', imgLink: './assets/images/cake.png', audioLink: './assets/audio/cake.mp3',},
        {enWord: 'Breakfast', ruWord: 'Завтрак', imgLink: './assets/images/breakfast.png', audioLink: './assets/audio/breakfast.mp3'},
    ],
    [
        {enWord: 'Dog', ruWord: 'Собака', imgLink: './assets/images/dog.png', audioLink: './assets/audio/dog.mp3',},
        {enWord: 'Cat', ruWord: 'Кот', imgLink: './assets/images/cat.png', audioLink: './assets/audio/cat.mp3',},
        {enWord: 'Hare', ruWord: 'Заяц', imgLink: './assets/images/hare.png', audioLink: './assets/audio/hare.mp3',},
        {enWord: 'Mouse', ruWord: 'Мышь', imgLink: './assets/images/mouse.png', audioLink: './assets/audio/mouse.mp3',},
        {enWord: 'Donkey', ruWord: 'Осёл', imgLink: './assets/images/donkey.png', audioLink: './assets/audio/donkey.mp3',},
        {enWord: 'Horse', ruWord: 'Лошадь', imgLink: './assets/images/horse.png', audioLink: './assets/audio/horse.mp3',},
        {enWord: 'Cock', ruWord: 'Петух', imgLink: './assets/images/cock.png', audioLink: './assets/audio/cock.mp3',},
        {enWord: 'Cow', ruWord: 'Корова', imgLink: './assets/images/cow.png', audioLink: './assets/audio/cow.mp3'},
    ],
    [
        {enWord: 'Cry', ruWord: 'Плакать', imgLink: './assets/images/crying.png', audioLink: './assets/audio/cry.mp3',},
        {enWord: 'Jolly', ruWord: 'Весёлый', imgLink: './assets/images/jolly.png', audioLink: './assets/audio/jolly.mp3',},
        {enWord: 'Angry', ruWord: 'Злой', imgLink: './assets/images/angry.png', audioLink: './assets/audio/angry.mp3',},
        {enWord: 'Funny', ruWord: 'Смешной', imgLink: './assets/images/funny.png', audioLink: './assets/audio/funny.mp3',},
        {enWord: 'Astonished', ruWord: 'Удивлённый', imgLink: './assets/images/astonished.png', audioLink: './assets/audio/astonisheed.mp3',},
        {enWord: 'Thoughtful', ruWord: 'Задумчивый', imgLink: './assets/images/thoughtful.png', audioLink: './assets/audio/thougtful.mp3',},
        {enWord: 'Enamored', ruWord: 'Влюблённый', imgLink: './assets/images/enamored.png', audioLink: './assets/audio/enamored.mp3',},
        {enWord: 'Laughing', ruWord: 'Смеяться', imgLink: './assets/images/laughing.png', audioLink: './assets/audio/laughing.mp3'},
    ],
    [
        {enWord: 'Entrepreneur', ruWord: 'Предприниматель', imgLink: './assets/images/entrepreneurs.png', audioLink: './assets/audio/entrepreneur.mp3',},
        {enWord: 'Chemist', ruWord: 'Химик', imgLink: './assets/images/chemist.png', audioLink: './assets/audio/chemist.mp3',},
        {enWord: 'Pilot', ruWord: 'Пилот', imgLink: './assets/images/pilot1.png', audioLink: './assets/audio/pilot.mp3',},
        {enWord: 'Driver', ruWord: 'Водитель', imgLink: './assets/images/driver.png', audioLink: './assets/audio/driwer.mp3',},
        {enWord: 'Lawyer', ruWord: 'Адвокат', imgLink: './assets/images/lawyer.png', audioLink: './assets/audio/lawyer.mp3',},
        {enWord: 'Accountant', ruWord: 'Бухгалтер', imgLink: './assets/images/accountant.png', audioLink: './assets/audio/accountant.mp3',},
        {enWord: 'Analyst', ruWord: 'Аналитик', imgLink: './assets/images/analyst.png', audioLink: './assets/audio/analyst.mp3',},
        {enWord: 'Military', ruWord: 'Военный', imgLink: './assets/images/military.png', audioLink: './assets/audio/military.mp3'},
    ],
    [
        {enWord: 'Apple', ruWord: 'Яблоко', imgLink: './assets/images/apple.png', audioLink: './assets/audio/apple.mp3',},
        {enWord: 'Pear', ruWord: 'Груша', imgLink: './assets/images/pear.png', audioLink: './assets/audio/pear.mp3',},
        {enWord: 'Banana', ruWord: 'Банан', imgLink: './assets/images/banana.png', audioLink: './assets/audio/banana.mp3',},
        {enWord: 'Avocado', ruWord: 'Авокадо', imgLink: './assets/images/avocado.png', audioLink: './assets/audio/avocado.mp3',},
        {enWord: 'Strawberry', ruWord: 'Клубника', imgLink: './assets/images/strawberry.png', audioLink: './assets/audio/strawberry.mp3',},
        {enWord: 'Pineapple', ruWord: 'Ананас', imgLink: './assets/images/pineapple.png', audioLink: './assets/audio/pineapple.mp3',},
        {enWord: 'Watermelon', ruWord: 'Арбуз', imgLink: './assets/images/watermelon.png', audioLink: './assets/audio/watermelon.mp3',},
        {enWord: 'Lemon', ruWord: 'Лимон', imgLink: './assets/images/lemon.png', audioLink: './assets/audio/lemon.mp3'},
    ],
    [
        {enWord: 'Swimming', ruWord: 'Плавание', imgLink: './assets/images/swimming.png', audioLink: './assets/audio/swimming.mp3',},
        {enWord: 'Hockey', ruWord: 'Хоккей', imgLink: './assets/images/hockey.png', audioLink: './assets/audio/hockey.mp3',},
        {enWord: 'Soccer', ruWord: 'Футбол', imgLink: './assets/images/soccer.png', audioLink: './assets/audio/soccer.mp3',},
        {enWord: 'Fitness', ruWord: 'Фитнес', imgLink: './assets/images/fitness.png', audioLink: './assets/audio/fitness.mp3',},
        {enWord: 'Jogging', ruWord: 'Бег трусцой', imgLink: './assets/images/jogging.png', audioLink: './assets/audio/jogging.mp3',},
        {enWord: 'Basketball', ruWord: 'Баскетбол', imgLink: './assets/images/basketball.png', audioLink: './assets/audio/basketball.mp3',},
        {enWord: 'Diving', ruWord: 'Подводное плавание', imgLink: './assets/images/diving.png', audioLink: './assets/audio/diving.mp3',},
        {enWord: 'Yoga', ruWord: 'Йога', imgLink: './assets/images/yoga.png', audioLink: './assets/audio/yoga.mp3'},
    ],
];

const main = document.querySelector('#main'),
      mainSection = document.querySelector('#main__section'),
      cardsSection = document.querySelector('#cards__section'),
      cardList = document.querySelector('#card__list'),
      burgerMenuSection = document.querySelector('#burger-menu__section'),
      burgerMenu = document.querySelector('#burger-menu'),
      closeBurgerMenu = document.querySelector('#burger-menu_vertical'),
      burgerMenuSlide = document.querySelector('#burger-menu_slider'),
      burgerMenuList = document.querySelector('#burger-menu_list'),
      burgerCards = document.querySelector('#burger-menu_cards'),
      sliderMode = document.querySelector('#slider-mode'),
      sliderModeSwitcher = document.querySelector('#train-mode'),
      sliderAnimation = document.querySelector('#slider-animation'),
      checkBox = document.querySelector('#check-box'),
      playMode = document.querySelector('#play-mode'),
      mainCards = document.querySelector('#main__section_cards'),
      startGame = document.querySelector('#start-game'),
      gameButton = document.querySelector('#game-button'),
      repeatButton = document.querySelector('#repeat-button'),
      gameOver = document.querySelector('#game-over'),
      endGameWin = gameOver.firstElementChild,
      endGameLoose = gameOver.lastElementChild,
      achievements = document.querySelector('#achievements');

const routingConfig = {
    '' : mainSection,
    '/cards' : cardsSection
};

const cardArray = [...cardsSection.firstElementChild.children],
      arrayFromCards = [...cardList.children];

let elementIndex = 0;
let allCardsInfo = cardsInfo[elementIndex];
let cardLeft = cardArray.slice();
let isGameOn = false;
let cardInGame;
let countErrors = 0;
let randomIndex;

const correctAudio = './assets/audio/correct.mp3',
      wrongAudio = './assets/audio/wrong.mp3',
      winSound = './assets/audio/win.mp3',
      looseGameSound = './assers/audio/loose.mp3';

window.addEventListener('popstate', (e) => {
    main.innerHTML = '';
    main.appendChild(routingConfig[e.target.location.hash.split('#').pop()]);
});

burgerCards.addEventListener('click', makingPage);
burgerCards.addEventListener('click', (e) => {
    reset();
    cardArray.forEach((e) => {
        e.classList.remove('correct');
    })
    if (checkBox.checked) {
        gameButton.classList.remove('hidden');
    } else {
        gameButton.classList.add('hidden');
    }
});

burgerMenu.addEventListener ('click', (e) => {
    burgerMenuSection.classList.toggle('close__menu');
});

closeBurgerMenu.addEventListener('click', (e) => {
    burgerMenuSection.classList.toggle('close__menu');
});

burgerMenuList.addEventListener('click', (e) => {
    burgerMenuSection.classList.toggle('close__menu');
});

sliderMode.addEventListener('click', (element) => {
    const isTrainMode = checkBox.checked;

    sliderModeSwitcher.classList.toggle('hidden');
    sliderMode.classList.toggle('yellow');
    playMode.classList.toggle('hidden');
    sliderAnimation.classList.toggle('slider-animation');
    burgerMenuSlide.classList.toggle('yellow');
    mainCards.querySelectorAll('a').forEach((e) => {
        e.classList.toggle('yellow_cards')
    })
    gameButton.classList.toggle('hidden');

    arrayFromCards.forEach((e) => {
        const cardFront = e.querySelector('.front');
        const cardBack = e.querySelector('.back');
        const cardRotate = e.querySelector('.rotate--button');
        isTrainMode ? cardFront.classList.add('card--off') : cardFront.classList.remove('card--off');
        isTrainMode ? cardFront.firstElementChild.classList.add('none') :  cardFront.firstElementChild.classList.remove('none');
        isTrainMode ? cardBack.classList.add('card--off') : cardBack.classList.remove('card--off');
        isTrainMode ? cardBack.firstElementChild.classList.add('none') : cardBack.firstElementChild.classList.remove('none');
        isTrainMode ? cardRotate.classList.add('none') : cardRotate.classList.remove('none');
        if (!isTrainMode) {
            reset();
            gameButton.classList.add('hidden');
            e.classList.remove('correct')
        }
    });
});

cardArray.forEach((e) => {
    e.addEventListener('click', onCardClickAudio);
    e.addEventListener('click', onCardClick);
    e.addEventListener('mouseleave', onCardLeave);
    e.lastElementChild.addEventListener('click', (event) => {
        event.stopImmediatePropagation();
        e.classList.add('translate');   
    });
});

function makingPage (e) {
    elementIndex = getAroundIndex(e.target);
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function getAroundIndex(e) {
    let i = 0;
    while((e = e.previousElementSibling)!=null) ++i;
    return i;
};

const familyCard = document.querySelector('.main-page__cards-family'),
      homeCard = document.querySelector('.main-page__cards-home'),
      foodCard = document.querySelector('.main-page__cards-food'),
      animalCard = document.querySelector('.main-page__cards-animal'),
      emotionCard = document.querySelector('.main-page__cards-emotion'),
      professionsCars = document.querySelector('.main-page__cards-professions'),
      fruitCard = document.querySelector('.main-page__cards-fruit'),
      sportCard = document.querySelector('.main-page__cards-sport');

familyCard.addEventListener('click', makingPage);
homeCard.addEventListener('click', makingPageHome);
foodCard.addEventListener('click', makingPageFood);
animalCard.addEventListener('click', makingPageAnimal);
emotionCard.addEventListener('click', makingPageEmotion);
professionsCars.addEventListener('click', makingPageProfessions);
fruitCard.addEventListener('click', makingPageFruit);
sportCard.addEventListener('click', makingPageSport);

function makingPageHome (e) {
    elementIndex = 1;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageFood (e) {
    elementIndex = 2;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageAnimal (e) {
    elementIndex = 3;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageEmotion (e) {
    elementIndex = 4;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageProfessions (e) {
    elementIndex = 5;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageFruit (e) {
    elementIndex = 6;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function makingPageSport (e) {
    elementIndex = 7;
    allCardsInfo = cardsInfo[elementIndex];
    cardsSection.classList.remove('hidden');

    cardArray.forEach((e, i) => {
        const cardConfig = allCardsInfo[i];
        const cardFront  = e.querySelector('.front');
        const cardBack   = e.querySelector('.back');

        cardFront.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardBack.setAttribute('style', `background-image: url(${cardConfig.imgLink});`);
        cardFront.firstElementChild.innerText = cardConfig.enWord;
        cardBack.firstElementChild.innerText = cardConfig.ruWord;
        e.dataset.audioLink = cardConfig.audioLink;
    });
};

function nextTurn() {
    randomIndex = Math.floor(Math.random() * cardLeft.length);
    cardInGame  = cardLeft[randomIndex];

    if (cardLeft.length) {
        let randomSound = cardInGame.dataset.audioLink;
        cardLeft.splice(randomIndex, 1);
        playSound(randomSound);
    } else {
        if (countErrors === 0) {
            playSound(winSound);
            gameOver.classList.remove('hidden');
            endGameWin.classList.remove('hidden');
            setTimeout(endGame, 5000);
        } else {
            playSound(looseGameSound);
            gameOver.classList.remove('hidden')
            endGameLoose.classList.remove('hidden');
            endGameLoose.classList.add('flex');
            endGameLoose.lastElementChild.innerText = `You loose, you have ${countErrors} error`;
            setTimeout(endGame, 5000);
        };
    };
};

gameButton.addEventListener('click', (e) => {
    isGameOn = !isGameOn;
    
    gameButton.classList.add('hidden');
    repeatButton.classList.remove('hidden');
    nextTurn();
});

repeatButton.addEventListener('click' , (e) => {
    playSound(cardInGame.dataset.audioLink);
});

function onCardClick(e) {
    const card = e.currentTarget;
    if (isGameOn) {
        if (cardInGame === card) {
            playSound(correctAudio);
            card.classList.add('correct');
            const star = document.createElement('div');  
            star.classList.add('star-correct');
            achievements.classList.remove('invisibility')
            achievements.appendChild(star);
            setTimeout(nextTurn, 1000);
        } else if (cardInGame !== card) {
            playSound(wrongAudio);
            countErrors++;
            const star = document.createElement('div');
            star.classList.add('star-wrong');
            achievements.classList.remove('invisibility')
            achievements.appendChild(star);
        };
    };
};

function playSound(e) {
    const sound = new Audio();

    sound.src = e;
    sound.play();
};

function onCardClickAudio (e) {
    if (checkBox.checked) {
        return;
    }
    const card = e.currentTarget;
    const sound = new Audio();
    sound.src = card.dataset.audioLink;
    sound.play();
};

function onCardLeave(e) {
    e.currentTarget.classList.remove('translate');
};

function endGame() {
    let mainCardsArray = [...mainCards.children];
    cardLeft = cardArray.slice();
    window.location.hash = '';
    isGameOn = false;
    checkBox.checked = false;
    sliderModeSwitcher.classList.remove('hidden');
    sliderMode.classList.remove('yellow_cards');
    sliderMode.classList.remove('yellow');
    sliderAnimation.classList.remove('slider-animation');
    burgerMenuSlide.classList.remove('yellow')
    playMode.classList.add('hidden');
    countErrors = 0;
    gameOver.classList.add('hidden')
    repeatButton.classList.add('hidden');
    gameButton.classList.add('hidden');
    achievements.classList.add('invisibility');
    achievements.innerHTML = '';

    cardArray.forEach((e) => {
        e.classList.remove('correct');
    })

    arrayFromCards.forEach((e) => {
        let frontCard = e.querySelector('.front');
        let backCard  = e.querySelector('.back');
        let rotate    = e.querySelector('.rotate--button');

        frontCard.firstElementChild.classList.remove('none')
        frontCard.classList.remove('card--off');
        backCard.classList.remove('card--off');
        backCard.firstElementChild.classList.remove('none')
        rotate.classList.remove('none');
    })
    
    mainCardsArray.forEach((e) => {
        e.classList.remove('yellow_cards');
    })
};

function reset () {
    cardLeft = cardArray.slice();
    isGameOn = false;
    countErrors = 0;
    repeatButton.classList.add('hidden');
    achievements.classList.add('invisibility');
    achievements.innerHTML = '';
}