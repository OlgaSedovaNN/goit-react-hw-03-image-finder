import {Component} from "react"
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import {GalleryList} from "./ImageGallery.styled"
import {ImageGalleryItem} from "../ImageGalleryItem/ImageGalleryItem"


export class ImageGallery extends Component {
state = {
    page: 1,
    images: null,
    
}
componentDidUpdate(prevProps, prevState) {
    if (prevProps.pictureName !== this.props.pictureName) {
       this.fetchImages().then(images => {this.setState({images})})
    }
}
async fetchImages() {
    try {
        const MY_KEY = '25579746-a7ae080d785264dfa870330dc'
        const response = await fetch(`https://pixabay.com/api/?key=${MY_KEY}&q=${this.props.pictureName}&image_type=photo&orientation=horizontal&safesearch=true&per_page=12&page=${this.state.page}`)
        const images = await response.json()
        
        //  this.totalHits= await images.totalHits 
        //     if (this.totalHits === 0) {
        //      Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        //     } 
     
      this.incrementPage()
        return images.hits
        
    }
    catch (error) {
        Notify.failure("Sorry, there are no images matching your search query. Please try again.")
        
    }
}
incrementPage() {
    this.setState(prevState=> ({
      page: prevState.page+=1
    }))
  }
resetPage() {
    this.setState({page: 1}) 
  }
createImagesItems(images) {
    return images.map(({id, urlWeb, urlLarge})=> (
        <ImageGalleryItem key={id} urlWeb={urlWeb} urlLarge={urlLarge}></ImageGalleryItem>))
    
    }

render() { return (

    <GalleryList>
        {this.props.pictureName && <p>gallery is here</p>}
    </GalleryList>)
}


}
    
