import { Controller } from "@hotwired/stimulus"
import { patch } from '@rails/request.js'

export default class extends Controller {
    static targets = [ "slide" ]
    static values = { index: Number }

    connect() {
        console.log("Slideshow controller connected!")
    }

    initialize(){
        // this.index = 0
        this.showCurrentSlide()  
    }

    previous(){
        this.indexValue --
        // this.showCurrentSlide()  
    }

    next(){
        this.indexValue ++
        // this.showCurrentSlide()  
    }

    indexValueChanged(){
        this.showCurrentSlide()
    }

    showCurrentSlide(){
        this.slideTargets.forEach((element, index) =>{
            element.hidden = index != this.indexValue
        })
    }

}
