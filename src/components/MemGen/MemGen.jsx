import React, { Component } from "react";

class MemGen extends Component {
  constructor(props) {
    super(props);

    this.state = {
      memGen: [],
      currentImgIndex: 0,
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
      };
    });
  };

  handlePrev = () => {
    this.setState(prevValue => {
      return {
        currentImgIndex:
          (prevValue.currentImgIndex - 1 + this.state.memGen.length) %
          this.state.memGen.length,
      };
    });
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
          <div id="title" className="flex justify-center items-center gap-14 text-white text-5xl my-5">
            <h1>Meme Generator</h1>
            <h4 className="text-2xl">Made By Pratik Chaudhari</h4>
          </div>
          
          {currentImage && (
            <div id="flex" key={currentImage.id}>
              <img className="rounded-lg" src={currentImage.image} alt="" />
            </div>
          )}

          <div className="flex gap-6 m-5">
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
