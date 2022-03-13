import { Controller } from "@hotwired/stimulus"
import { get } from '@rails/request.js'

export default class extends Controller {
    static targets = [ "todos" ]
    static values = { url: String }

    connect() {
        console.log("external resource controller connnected !")
        this.load()
    }

    // load(){
        // fetch(this.urlValue).
            // then(response => response.data()).
            // then(html =>this.todosTarget.innerText = html)
            // then(json =>this.todosTarget.innerText = json)
   async load () {
   const response =  await get(this.urlValue, {
            responseKind: "json"
        })
       console.log(response)

       if (response.ok) {
           console.log(response.contentType)
           console.log(response.json)
       }else{
           console.warn("An error occured")
       }
    }
}
