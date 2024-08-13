import * as React from "react";
import { useState } from 'react';
import  Tilt from "react-parallax-tilt";
import { HovCardProps } from "../models/HoverCardV1props";
import { HovcardStyleonHover,HovCardStyle,BtnStyle } from "../styles/HoverCardV1Styles";

/**
 * In V1, it is normal card,
 * the button is added with links
 * Mostly depricated
 */

const HovCard: React.FC<HovCardProps> = ({
    cardWidth,
    cardHeight,
    cardPadding,
    cardBorderWidth,
    cardBorderColor,
    cardBorderStyle,
    cardBorderRadius,
    cardEndScale,
    cardStartScale,
    cardImgContent,
    cardImgWidth,
    cardImgHeight,
    cardTitle,
    cardTitleFontSize,
    cardDescpriptionFontFamily,
    cardDescpription,
    cardRandomText,
    link,
    cardBtnName,
    cardBtnColor,
    cardBtnBackgroundColor,
    cardBtnSize,
    cardBtnBorderRadius
}) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => {
        setIsHover(true);
    };
    const handleMouseLeave = () => {
        setIsHover(false);
    };

    

    return (
        <div className='hov-card-container'>
            <div>
                <div className='hov-card' style={HovCardStyle(cardWidth, cardHeight, cardPadding, cardBorderWidth, cardBorderColor, cardBorderStyle, cardBorderRadius)}>
                    <div className='hov-card-style' style={HovcardStyleonHover(isHover, cardEndScale, cardStartScale)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Tilt>
                            <img src={cardImgContent ? cardImgContent : "https://i.ibb.co/XbMzrd9/monster.png"} alt="imgpls"
                                width={cardImgWidth ? cardImgWidth : '300px'}
                                height={cardImgHeight ? cardImgHeight : '200px'} />
                        </Tilt>
                    </div>
                    <div>
                        <h1 style={{ fontSize: cardTitleFontSize ? cardTitleFontSize : '32px' }}>
                            {cardTitle ? cardTitle : 'Title'}
                        </h1>
                        <p style={{ fontFamily: cardDescpriptionFontFamily ? cardDescpriptionFontFamily : 'Roboto' }}>
                            {cardDescpription ? cardDescpription : 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.'}
                        </p>
                        <h6>{cardRandomText}</h6>
                    </div>
                    <div className='hov-card-btn' style={{ marginBottom: '10px' }}>
                        <a href={link ? link : 'https://www.youtube.com/'} style={BtnStyle(cardBtnColor, cardBtnBackgroundColor, cardBtnSize, cardBtnBorderRadius)}>
                            {cardBtnName ? cardBtnName : 'click me'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export  {HovCard};
