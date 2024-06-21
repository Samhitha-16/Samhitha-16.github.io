const galleryContainer = document.querySelector('.gallery-container')
const galleryControlsContainer = document.querySelector('.gallery-controls')
const galleryControls = ['previous', 'next']
const galleryItems = document.querySelectorAll('.gallery-item')

class Carousel {
    constructor(container, items, controls) {
        this.carouselContainer = container
        this.carouselControls = controls
        this.carouselArray = [...items]
    }
    updateGallery() {
        this.carouselArray.forEach(el => {
            for(let i=1;i<=10;i++){
                el.classList.remove(`gallery-item-${i}`)
            }
            // el.classList.remove('gallery-item-1')
            // el.classList.remove('gallery-item-2')
            // el.classList.remove('gallery-item-3')
            // el.classList.remove('gallery-item-4')
            // el.classList.remove('gallery-item-5')
            // el.classList.remove('gallery-item-6')
            // el.classList.remove('gallery-item-7')
            // el.classList.remove('gallery-item-8')
            // el.classList.remove('gallery-item-9')
            // el.classList.remove('gallery-item-10')

        })
        this.carouselArray.slice(0, 5).forEach((el, i) => {
            el.classList.add(`gallery-item-${i + 1}`)
        })
    }
    setCurrentState(direction) {
        if (direction.className == 'gallery-controls-previous') {
            this.carouselArray.unshift(this.carouselArray.pop())

        } else {
            this.carouselArray.push(this.carouselArray.shift())
        }
        this.updateGallery()
    }
    // setControls() {
    //     this.carouselControls.forEach(control => {
    //         galleryControlsContainer.appendChild(document.createElement('button')).className = `gallery-controls-${control}`
    //         document.querySelectorAll(`.gallery-control-${control}`).innerText = control
    //     })
    // }
    setControls() {
        this.carouselControls.forEach(control => {
            let button = document.createElement('button')
            button.className = `gallery-controls-${control}`
            button.innerText = control
            galleryControlsContainer.appendChild(button)
        })
    }
    useControls() {
        const triggers = [...galleryControlsContainer.childNodes]
        triggers.forEach(control => {
            control.addEventListener('click', e => {
                e.preventDefault()
                this.setCurrentState(control)
            })
        })
    }
}
const exampleCarousel = new Carousel(galleryContainer, galleryItems, galleryControls)
exampleCarousel.setControls()
exampleCarousel.useControls()