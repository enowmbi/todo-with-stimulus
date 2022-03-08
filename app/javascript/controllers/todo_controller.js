import { Controller } from "@hotwired/stimulus"
import { patch } from '@rails/request.js'

export default class extends Controller {
  // connect() {
    // console.log("Hello World!")
  // }
    static values = {
       url: String
    }

    toggle(){
        patch(this.urlValue, {
            responseKind: "turbo-stream"
        })

    }
}
