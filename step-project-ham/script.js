let myUl = document.querySelector('.services-list');
let myTabs = document.querySelector('.services-content')
let myButton = document.querySelector('.load-more');
let newElements = document.querySelectorAll('.elements-second-part');
let loadWrapp = document.querySelector('.load-wrapp');
let containerPictures = document.querySelector('.swiper-pagination');
let bigPicture = document.querySelector('.person-big-img');
let allQuotes = document.querySelectorAll('.quote-text');
let allNames = document.querySelectorAll('.about-name');
let swiperWrapper = document.querySelector('.swiper-wrapper');
let swiperPagination = document.querySelector('.swiper-pagination');
let nextButton = document.querySelector('.swiper-button-next');
let prevButton = document.querySelector('.swiper-button-prev')
let counter = 1;


myUl.addEventListener('click', function(event) {
    myUl.querySelectorAll('.active').forEach(li => li.classList.remove('active'));
    
    event.target.classList.add('active');

    let targetTab = myUl.querySelector('.active');
    let dTitle = targetTab.getAttribute('data-title'); 

    let allTextData = myTabs.querySelectorAll('.services-wrapper');
    allTextData.forEach(function (div) {
        if (dTitle === div.getAttribute('data-content')) {
            div.style.display = 'flex';
        } else {
            div.style.display = 'none';
        }
    })
})


myButton.addEventListener('click', function() {
    setTimeout(function() {
        newElements.forEach(function(elem) {
            elem.style.display = 'grid';
            elem.setAttribute('data-item', elem.lastChild.lastChild.previousElementSibling.innerText);
        })
        myButton.style.opacity = 0;
        myButton.style.cursor = 'default';
    }, 2000);

    if (myButton.style.opacity !== 0) {
        loadWrapp.style.display = 'inline-block'
    } else {
        loadWrapp.style.display = 'none';
    }
})

let workTabs = document.querySelector('.filter-list');
let workContent = document.querySelectorAll('.services-element');
workTabs.addEventListener('click', function(event) {
    workTabs.querySelectorAll('.active-work').forEach(li => li.classList.remove('active-work'));
    event.target.classList.add('active-work');

    workContent.forEach(function(elem) {
        if (event.target.getAttribute('data-name') === elem.getAttribute('data-item')) {
            elem.style.display = 'grid';
        } else if (event.target.getAttribute('data-name') === 'All' && elem.getAttribute('data-item') !== null) {
            elem.style.display = 'grid';
        } else {
            elem.style.display = 'none';
        }
    })
})



swiperPagination.addEventListener('click', function(event) {
    if (event.target.textContent === '1') {
        
        allQuotes.forEach(p => p.classList.remove('active-text'));
        allQuotes.forEach(function (e) {
            if (e.getAttribute('data-quote') === 'Lara') {
                e.classList.add('active-text');
                counter = 1;
                
            }
        })
        
        allNames.forEach(p => p.classList.remove('active-person'));
        allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Lara') {
                    e.classList.add('active-person');
                }
            })
        } else if (event.target.textContent === '2') {
            allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'David') {
                    e.classList.add('active-text');
                    counter = 2;
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'David') {
                    e.classList.add('active-person');
                }
            })
        } else if (event.target.textContent === '3') {
            allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Hasan') {
                    e.classList.add('active-text');
                    counter = 3;
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Hasan') {
                    e.classList.add('active-person');
                }
            })
        } else if (event.target.textContent === '4') {
            allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Emma') {
                    e.classList.add('active-text');
                    counter = 4;
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Emma') {
                    e.classList.add('active-person');
                }
            })
        } 
        
    }) 
    
nextButton.addEventListener('click', function() {
    if(counter === 1) {
        counter += 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'David') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'David') {
                    e.classList.add('active-person');
                }
            })
    } else if (counter === 2) {
        counter += 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Hasan') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Hasan') {
                    e.classList.add('active-person');
                }
            })
    } else if (counter === 3) {
        counter += 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Emma') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Emma') {
                    e.classList.add('active-person');
                }
            })
    }
})

prevButton.addEventListener('click', function() {
    if (counter === 4) {
        counter -= 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Hasan') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Hasan') {
                    e.classList.add('active-person');
                }
            })
    } else if (counter === 3) {
        counter -= 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'David') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'David') {
                    e.classList.add('active-person');
                }
            })
    } else if (counter === 2) {
        counter -= 1
        allQuotes.forEach(p => p.classList.remove('active-text'));
            allQuotes.forEach(function (e) {
                if (e.getAttribute('data-quote') === 'Lara') {
                    e.classList.add('active-text');
                }
            })
            
            allNames.forEach(p => p.classList.remove('active-person'));
            allNames.forEach(function (e) {
                if (e.getAttribute('data-person') === 'Lara') {
                    e.classList.add('active-person');
                }
            })
    }
})


const swiper = new Swiper(".mySwiper", {
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + className + '">' + (index + 1) + "</span>";
        }
    },
    navigation: {
        nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
});
