const ProductVideo = document.getElementById("product-video");

const showProducts = () => {
  ProductVideo.style.top = "50%";
  ProductVideo.play();

  // run the function after 5 seconds
  setTimeout(redirectToProductPage, 5000);
};

const redirectToProductPage = () => {
  window.location.href = "https://appopener.com/yt/peivkp0dc";
};

const stop = () => {
  ProductVideo.pause();
  ProductVideo.style.top = "";
};
