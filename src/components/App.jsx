import React, { Component } from "react";

import { Searchbar } from "./Searchbar/Searchbar";
import {ImageGallery} from "./ImageGallery/ImageGallery"

export class App extends Component {
  state = {
    pictureName: ''
  }

  componentDidMount() {
    
  }

  formSubmit = (e) => {
    e.preventDefault()
  const inputValue = e.target.elements.input.value
  if (inputValue.trim() === '' || !inputValue) {
    alert(`введите корректное имя поиска`)
    return
  }
  this.setState({
    pictureName: inputValue
    })
  }


  render() { 
    return (
      <div>
    <Searchbar onSubmit= {this.formSubmit}/>
    <ImageGallery pictureName={this.state.pictureName}/>
      </div>
    
  )}
};
