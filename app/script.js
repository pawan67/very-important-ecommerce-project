const ProductVideo = document.getElementById("product-video");

const showProducts = () => {
  ProductVideo.style.top = "50%";
  ProductVideo.play();
};

const stop = () => {
  ProductVideo.pause();
  ProductVideo.style.top = "";
};
