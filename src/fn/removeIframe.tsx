export const removeIframe = () => {
  // Get the iframe element
  let iframe = document.querySelector('iframe[src="//remove.video/audio"]');

  // Remove the iframe element
  if (iframe && iframe.parentNode) {
    iframe.parentNode.removeChild(iframe);
  }
};
