
const setColorButton = (color) => {
  let colorRGB = '';

  switch(color){
    case 'red':
      colorRGB = '#FF0000';
      break;
    case 'orange':
      colorRGB = '#FF8C00';
      break;  
    case 'yellow':
      colorRGB = '#FFFF00';
      break;
    case 'green':
      colorRGB = '#008000';
      break;
    case 'blue':
      colorRGB = '#0000FF';
      break;
    case 'indigo':
      colorRGB = '#4B0082';
      break;
    case 'purple':
      colorRGB = '#800080';
      break;
    default:
      colorRGB = '#FF0000';
  }
  console.log(colorRGB);
  return colorRGB;
};

export default setColorButton;