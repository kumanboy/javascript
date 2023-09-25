window.addEventListener('DOMContentLoaded', () => {
    const tabParent = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent'),
      loader = document.querySelector('.loader');
    //tabContentlarimzni commentdan ochib olamiz

    //kodimiz rasvo chiqib qoldi shuning uchun endi biz 2ta function yaratishimiz kerak. 1chisi contentlarimizni yashiradigan
    // 2chisi tablarimizni nomi bosilgan korinadigan
//LOADER
    setTimeout(()=> {
        loader.style.opacity = '0'
        setTimeout(() =>{
            loader.style.display = 'none'
        },500)
    },2000)
    //TABS
    function hideTabContent(){
        tabContent.forEach(item => {
            item.style.display = 'none'
        })
        tabs.forEach(item => {
            item.classList.remove('tabheader__item_active')
        })
    }

    function showTabContent(i){
        tabContent[i].style.display = 'block'
        tabs[i].classList.add('tabheader__item_active')
    }

    hideTabContent()
    showTabContent(0)
//
    tabParent.addEventListener('click', (event) => {
        const target = event.target
        if (target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent()
                    showTabContent(i)
                }
            })
        }
    })
    //TIMER

    const deadline = '2023-09-23'

    function getTimeRemaining(endtime) {
        let days, hours, minutes, seconds
        const timer = Date.parse(endtime) - Date.parse(new Date())

        if (timer <= 0) {
            days = 0
            hours = 0
            minutes = 0
            seconds = 0
        } else {
            days = Math.floor(timer / (1000 * 60 * 60 * 24))
            hours = Math.floor((timer / (1000 * 60 * 60)) % 24)
            minutes = Math.floor((timer / 1000 / 60) % 60)
            seconds = Math.floor((timer / 1000) % 60)
        }

        return { timer, days, hours, minutes, seconds }
    }



    function setClock(selector, endtime) {
        const timer = document.querySelector(selector),
            days = timer.querySelector('#days'),
            hours = timer.querySelector('#hours'),
            minutes = timer.querySelector('#minutes'),
            seconds = timer.querySelector('#seconds'),
            timeInterval = setInterval(updateClock, 1000)

        updateClock()

        function updateClock() {
            const t = getTimeRemaining(endtime)

            days.innerHTML = getZero(t.days)
            hours.innerHTML = getZero(t.hours)
            minutes.innerHTML = getZero(t.minutes)
            seconds.innerHTML = getZero(t.seconds)

            if (t.timer <= 0) {
                clearInterval(timeInterval)
            }
        }
    }
    function getZero(num) {
        if (num >= 0 && num < 10) {
            return `0${num}`
        } else {
            return num
        }
    }

    setClock('.timer', deadline)

// Modal

    const modalTrigger = document.querySelectorAll('[data-modal]'),
        modal = document.querySelector('.modal'),
        modalCloseBtn = document.querySelector('[data-close]')

    function closeModal() {
        modal.classList.add('hide')
        modal.classList.remove('show')
        document.body.style.overflow = ''
    }

    function openModal() {
        modal.classList.add('show')
        modal.classList.remove('hide')
        document.body.style.overflow = 'hidden'
        clearInterval(modalTimerId)
    }

    modalTrigger.forEach((item) => {
        item.addEventListener('click', openModal)
    })

    modalCloseBtn.addEventListener('click', closeModal)

    modal.addEventListener('click', (e) => {
        if (e.target == modal) {
            closeModal()
        }
        // console.log(e.target)
    })

    document.addEventListener('keydown', (e) => {
        if (e.code === 'Enter' && modal.classList.contains('show')) {
            closeModal()
        }
    })

    const modalTimerId = setTimeout(openModal, 3000)

    function showModalByScroll() {
        if (
            window.pageYOffset + document.documentElement.clientHeight >=
            document.documentElement.scrollHeight - 1
        ) {
            openModal()
            window.removeEventListener('scroll', showModalByScroll)
        }
        // console.log(window.pageYOffset)
    }

    window.addEventListener('scroll', showModalByScroll)
// Class
    class MenuCard {
        constructor(src, alt, title, descr, price, parentSelector, ...classes) {
            this.src = src
            this.alt = alt
            this.title = title
            this.descr = descr
            this.price = price
            this.classes = classes
            this.parent = document.querySelector(parentSelector)
            this.transfer = 12000
            this.chageToUZS()
        }

        chageToUZS() {
            this.price = this.price * this.transfer
        }

        render() {
            const element = document.createElement('div')

            if (this.classes.length === 0) {
                this.element = 'menu__item'
                element.classList.add(this.element)
            } else {
                this.classes.forEach((classname) => element.classList.add(classname))
            }

            element.innerHTML = `
        <img src=${this.src} alt=${this.alt} />
        <h3 class="menu__item-subtitle">${this.title}</h3>
        <div class="menu__item-descr">${this.descr}</div>
        <div class="menu__item-divider"></div>
        <div class="menu__item-price">
          <div class="menu__item-cost">Price:</div>
          <div class="menu__item-total"><span>${this.price}</span> uzs/month</div>
        </div>
      `

            this.parent.append(element)
        }
    }

    new MenuCard(
        'img/tabs/1.png',
        'usual',
        'Plan "Usual"',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        10,
        '.menu .container'
    ).render()

    new MenuCard(
        'img/tabs/2.jpg',
        'plan',
        'Plan “Premium”',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        20,
        '.menu .container',
        'menu__item'
    ).render()

    new MenuCard(
        'img/tabs/3.jpg',
        'vip',
        'Plan VIP',
        'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fugit nesciunt facere, sequi exercitationem praesentium ab cupiditatebeatae debitis perspiciatis itaque quaerat id modi corporis delectus ratione nobis harum voluptatum in.',
        30,
        '.menu .container',
        'menu__item'
    ).render()

//     Rest Operator
//     function logger (a,b,...rest) {
//         console.log(a,b,rest)
//     }
//     logger(1,2,3,4,5,6,7,8,9)

// Default parameter

// function defaultParam(a, b ) { //b = 4
//     console.log(a * b)
// }
// defaultParam(2,4)

})





