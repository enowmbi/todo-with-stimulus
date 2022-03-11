import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
    static targets = [ "source" ]

    connect(){
        console.log("Connected to the code controller !")
    }

    copy(event){
        event.preventDefault()
        navigator.clipboard.writeText(this.sourceTarget.value)
        console.log(`copied PIN with value ${ this.sourceTarget.value }`) 
    }

}
