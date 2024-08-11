
# react-image-hovercard

A customizable React component that displays a card with a hover effect on the image, providing an immersive experience with tilt animations.




## Features

- Customizable Dimensions and Styles: Adjust the width, height, padding, border properties, and border radius of the card.
- Dynamic Scaling: Set the start and end scale values for a smooth scaling effect on hover.
- Image Customization: Specify the image content, width, and height.
- Customizable Content: Add a title, description, and random text to the card.
- Button Customization: Customize the button text, color, background color, size, and border radius.
- Immersive Tilt Effect: The image tilts in response to mouse movements, enhancing the user experience.
- Two Buttons: Supports two customizable buttons with individual click handlers.
- Subtitle: Optionally display a subtitle with customizable text.
- Customizable Styles: Configure the card's width, height, padding, borders, background colors, and box shadow.
- Tilt Effect: The component includes a tilt effect on hover, which will be customizable in future versions.
- Hover Scaling: Scale the card on hover with customizable start and end scales.


## Installation

Install my-project with npm

```bash
  npm i react-image-hovercard
```
    
## Usage/Examples

```javascript
import React from 'react';
import { HovCardV2 } from './components/HovCardV2';

const App = () => {
  return (
    <div>
      <HovCardV2
        cardWidth="400px"
        cardHeight="auto"
        cardPadding="10px"
        cardBorderWidth="3px"
        cardBorderColor="#333"
        cardBorderStyle="solid"
        cardBorderRadius="8px"
        cardEndScale="1.2"
        cardStartScale="1.0"
        cardImgContent="https://i.ibb.co/XbMzrd9/monster.png"
        cardImgWidth="250px"
        cardImgHeight="200px"
        cardTitle="Monster Card"
        cardTitleFontSize="28px"
        cardDescpriptionFontFamily="Arial"
        cardDescpription="This is a customizable hover card with two buttons."
        cardRandomText="Extra text here."
        cardBtnName1="First Button"
        cardBtnName2="Second Button"
        cardBtnColor1="white"
        cardBtnColor2="white"
        cardBtnBackgroundColor1="green"
        cardBtnBackgroundColor2="blue"
        cardBtnSize1="16px"
        cardBtnSize2="16px"
        cardBtnBorderRadius1="5px"
        cardBtnBorderRadius2="5px"
        onCustomClick1={() => alert('First button clicked!')}
        onCustomClick2={() => alert('Second button clicked!')}
        cardSubtitle="Optional Subtitle"
        cardSubtitleEnable={true}
        cardButton2Enabled={true}
        cardBackgroundColor="#f4f4f4"
        cardBackgroundBodyColor="#ffffff"
        cardDescpriptionFontSize="14px"
        cardSubtitleFontSize="18px"
        cardBoxShadow="0px 10px 15px rgba(0,0,0,0.3)"
      />
    </div>
  );
};

export default App;


```


## Props




| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `cardWidth` | `string` | Width of the card. |
| `cardHeight` | `string` | Height of the card. |
| `cardPadding` | `string` | Padding inside the card. |
| `link` | `string` | 	URL the button links to.|
| `cardBtnName` | `string` | Text displayed on the button. |


#### more property will be updated




## License

[MIT](https://choosealicense.com/licenses/mit/)


## Author

- [@TarunSK](https://github.com/Toxic-Whitelgnd)


