window.addEventListener('DOMContentLoaded', () => {
    const tabParent = document.querySelector('.tabheader__items'),
      tabs = document.querySelectorAll('.tabheader__item'),
      tabContent = document.querySelectorAll('.tabcontent')

    //tabContentlarimzni commentdan ochib olamiz

    //kodimiz rasvo chiqib qoldi shuning uchun endi biz 2ta function yaratishimiz kerak. 1chisi contentlarimizni yashiradigan
    // 2chisi tablarimizni nomi bosilgan korinadigan

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
})

//funksiyalarimiz ichidagi tabsContentlarimizga cssda yozilgan codelarimizni beramiz
// hideTabContent() funksiyamiz codi item.classList.add('hide') item.classList.add('show', 'fade')
// showTabContent() funksiyamiz codi tabsContent.classList.remove('hide') tabsContent.classList.remove('show', 'fade')