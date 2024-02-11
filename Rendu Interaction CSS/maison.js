let tabItems = document.querySelectorAll('li')
tabItems.forEach(function(tabItem) {
    tabItem.addEventListener('click', function(){
        document.querySelector('.tab-active').classList.remove('.tab-active')
        tabItem.classList.add('.tab-active')
    })
})

if (this.classList.contains('tab-gryf'));