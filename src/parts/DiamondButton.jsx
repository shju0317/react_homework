function DiamondButton({color}) {

  let colorRGB = '';

  const setColorButton = () => {
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

    return colorRGB;
  };

  return (
    <button type="button">
    <svg width="174" height="173" viewBox="0 0 174 173" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path fillRule="evenodd" clipRule="evenodd" d="M86.6216 0C88.0023 0 89.1216 1.11929 89.1216 2.5V25.3035C89.1216 26.6842 88.0023 27.8035 86.6216 27.8035C85.2408 27.8035 84.1216 26.6842 84.1216 25.3035V2.5C84.1216 1.11929 85.2408 0 86.6216 0ZM0.500153 35.5607C1.32858 34.4561 2.89559 34.2322 4.00015 35.0607L22.2429 48.7429C23.3475 49.5713 23.5713 51.1383 22.7429 52.2429C21.9145 53.3474 20.3475 53.5713 19.2429 52.7429L1.00014 39.0607C-0.104429 38.2322 -0.328279 36.6652 0.500153 35.5607ZM20.3109 90.5607L42.6435 60.5552L53.9287 90.5607H20.3109ZM86.5094 162.984L61.1512 95.5607H111.868L86.5094 162.984ZM114.499 88.5639L91.8938 58.5607H125.783L114.499 88.5639ZM109.743 90.5607H63.5138L86.6285 59.8812L109.743 90.5607ZM93.3744 158.934L117.209 95.5607H152.578L93.3744 158.934ZM130.455 60.3443L119.09 90.5607H152.944L130.455 60.3443ZM88.4651 171.607C88.5476 171.502 88.6206 171.393 88.6841 171.279L159.425 95.5564C159.653 95.3118 159.823 95.0334 159.935 94.7387C160.29 94.3038 160.481 93.7683 160.495 93.2241C160.498 93.1701 160.5 93.1156 160.5 93.0607C160.5 92.2985 160.159 91.616 159.621 91.1574L132.837 55.1714C132.479 54.2297 131.568 53.5607 130.5 53.5607H43.0002C42.183 53.5607 41.4574 53.9527 41.0012 54.559C40.8132 54.7 40.6421 54.8699 40.4946 55.068L13.0969 91.8787C12.399 92.8165 12.4565 94.083 13.1628 94.9497C13.2748 95.2444 13.4448 95.5227 13.6733 95.7673L84.6334 171.725C84.7343 171.838 84.8446 171.941 84.9626 172.032C85.5497 172.491 86.2987 172.653 87.0005 172.51C87.2885 172.452 87.5685 172.342 87.8262 172.181C88.075 172.025 88.2898 171.83 88.4651 171.607ZM58.599 88.7749L81.3631 58.5607H47.2353L58.599 88.7749ZM20.3227 95.5607H55.8092L79.7236 159.145L20.3227 95.5607ZM42.728 9.9264C42.1016 8.69598 40.5963 8.20634 39.3659 8.83277C38.1355 9.4592 37.6458 10.9645 38.2723 12.1949L48.6182 32.5163C49.2447 33.7468 50.75 34.2364 51.9804 33.61C53.2108 32.9835 53.7004 31.4783 53.074 30.2478L42.728 9.9264ZM172.846 35.5607C172.018 34.4561 170.451 34.2322 169.346 35.0607L151.103 48.7429C149.999 49.5713 149.775 51.1383 150.603 52.2429C151.432 53.3474 152.999 53.5713 154.103 52.7429L172.346 39.0607C173.451 38.2322 173.675 36.6652 172.846 35.5607ZM130.618 9.9264C131.245 8.69598 132.75 8.20634 133.98 8.83277C135.211 9.4592 135.7 10.9645 135.074 12.1949L124.728 32.5163C124.102 33.7468 122.596 34.2364 121.366 33.61C120.135 32.9835 119.646 31.4783 120.272 30.2478L130.618 9.9264Z" fill={setColorButton()}/>
    </svg>
    </button>
  ); 
}

export default DiamondButton