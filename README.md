
# react-image-hovercard

A customizable React component that displays a card with a hover effect on the image, providing an immersive experience with tilt animations.




## Features

- Customizable Dimensions and Styles: Adjust the width, height, padding, border properties, and border radius of the card.
- Dynamic Scaling: Set the start and end scale values for a smooth scaling effect on hover.
- Image Customization: Specify the image content, width, and height.
- Customizable Content: Add a title, description, and random text to the card.
- Button Customization: Customize the button text, color, background color, size, and border radius.
- Immersive Tilt Effect: The image tilts in response to mouse movements, enhancing the user experience.


## Installation

Install my-project with npm

```bash
  npm i react-image-hovercard
```
    
## Usage/Examples

```javascript
import React from 'react';
import {HovCard} from 'react-image-hovercard';

const App = () => {
    return (
        <HovCard
            cardWidth="350px"
            cardHeight="auto"
            cardPadding="10px"
            cardBorderWidth="2px"
            cardBorderColor="gray"
            cardBorderStyle="solid"
            cardBorderRadius="10px"
            cardEndScale="1.5"
            cardStartScale="1.1"
            cardImgContent="https://example.com/image.png"
            cardImgWidth="100%"
            cardImgHeight="200px"
            cardTitle="Sample Title"
            cardTitleFontSize="24px"
            cardDescpriptionFontFamily="Arial"
            cardDescpription="This is a sample description for the card."
            cardRandomText="Random text"
            link="https://example.com"
            cardBtnName="Click Me"
            cardBtnColor="white"
            cardBtnBackgroundColor="blue"
            cardBtnSize="16px"
            cardBtnBorderRadius="5px"
        />
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

