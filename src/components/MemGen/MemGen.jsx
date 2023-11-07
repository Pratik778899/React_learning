import React, { Component } from "react";
import Loader from "./Loader";

class MemGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memGen: [],
      currentImgIndex: 0,
      Loading: false,
    };
  }

  async componentDidMount() {
    const url = "https://programming-memes-images.p.rapidapi.com/v1/memes";
    const options = {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "3e1d743838mshcedfd136be6186fp14230ajsn79060f8599f1",
        "X-RapidAPI-Host": "programming-memes-images.p.rapidapi.com",
      },
    };

    try {
      const response = await fetch(url, options);
      if (response.ok) {
        const data = await response.json();
        this.setState({ memGen: data });
        console.log(data);
      }
    } catch (error) {
      console.error(error);
    }
  }

  handleNext = () => {
    this.setState(prevValue => {
      return {
        currentImgIndex:
          (prevValue.currentImgIndex + 1) % this.state.memGen.length,
        Loading: true,
      };
    });
  };

  handlePrev = () => {
    this.setState(prevValue => {
      return {
        currentImgIndex:
          (prevValue.currentImgIndex - 1 + this.state.memGen.length) %
          this.state.memGen.length,
        Loading: true,
      };
    });
  };

  handleImageLoad = () => {
    this.setState({ Loading: false });
  };

  render() {
    const { memGen, currentImgIndex } = this.state;
    const currentImage = memGen[currentImgIndex];

    return (
      <>
        <div
          id="main-container"
          className="flex justify-center items-center flex-col h-screen"
          style={{
            background:
              "linear-gradient(180deg, rgba(0,14,19,1) 0%, rgba(6,0,79,1) 100%)",
          }}
        >
          <div
            id="title"
            style={{fontSize:"5vh"}}
            className="flex justify-center items-center gap-14 text-white text-5xl m-5"
          >
            <h1>Meme Generator</h1>
            <h4 style={{fontSize:"2vh"}}>Made By Pratik Chaudhari</h4>
          </div>
          {this.state.Loading && <Loader />}
          {currentImage && (
            <div id="flex" key={currentImage.id}>
              <img
              style={{height:"300px"}}
                className="rounded-lg" 
                src={currentImage.image}
                alt=""
                onLoad={this.handleImageLoad}
              />
            </div>
          )}

          <div className="flex gap-4 m-5">
            <button
              onClick={this.handlePrev}
              className="border-2 border-solid border-white px-8 py-2 text-white"
            >
              Previous
            </button>
            <button
              onClick={this.handleNext}
              className="border-2 border-solid border-white px-12 py-2 text-white"
            >
              Next
            </button>
          </div>
        </div>
      </>
    );
  }
}
export default MemGen;
