import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = ["result","name"]

    connect() {
        console.log("Initializing greetings controller!")
    }

    sayHello(){
        this.resultTarget.innerText = `Hello  ${ this.nameTarget.value }`
    }

    update(){
      console.log("this is the update method")
    }


}
