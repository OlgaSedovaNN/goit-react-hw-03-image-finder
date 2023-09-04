import {ImageItem, ItemImg} from './ImageGalleryItem.styled'

export const ImageGalleryItem = ({id, urlWeb, urlLarge}) => {

    return (<ImageItem>
        
    <ItemImg key={id} urlWeb={urlWeb} urlLarge={urlLarge} src="" alt="" />
  </ImageItem>)
}