import { Controller } from "@hotwired/stimulus"
import { patch } from '@rails/request.js'

export default class extends Controller {
    static targets = ["btn","toggleable"]

    connect() {
        console.log("Hello World!")
    }

    toggleVisibility(event){
        console.log("calling the toggleable method")
        event.preventDefault()
        this.toggleableTarget.classList.toggle('hidden')
        console.log('entering step 2')

        if(this.toggleableTarget.classList.contains('hidden')){
            this.btnTarget.textContent = "Show"
        } else{
            this.btnTarget.textContent = "Hide"
        }
    }

}
