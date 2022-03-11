import { Controller } from "@hotwired/stimulus"
import { post } from '@rails/request.js'

export default class extends Controller {
    static targets = ["searchResult","field"]

    connect() {
        console.log("Initializing search controller!")
    }

    search(){
      console.log("this is the search method")
    }

}
