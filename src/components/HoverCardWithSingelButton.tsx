import * as React from "react";
import { useState } from 'react';
import  Tilt from "react-parallax-tilt";

interface HovCardProps {
    cardWidth?: string;
    cardHeight?: string;
    cardPadding?: string;
    cardBorderWidth?: string;
    cardBorderColor?: string;
    cardBorderStyle?: string;
    cardBorderRadius?: string;
    cardEndScale?: string;
    cardStartScale?: string;
    cardImgContent?: string;
    cardImgWidth?: string;
    cardImgHeight?: string;
    cardTitle?: string;
    cardTitleFontSize?: string;
    cardDescpriptionFontFamily?: string;
    cardDescpription?: string;
    cardRandomText?: string;
    link?: string;
    cardBtnName?: string;
    cardBtnColor?: string;
    cardBtnBackgroundColor?: string;
    cardBtnSize?: string;
    cardBtnBorderRadius?: string;
}

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

    const HovCardStyle: React.CSSProperties = {
        width: cardWidth ? cardWidth : '300px',
        height: cardHeight ? cardHeight : 'auto',
        padding: cardPadding ? cardPadding : '3px',
        borderWidth: cardBorderWidth ? cardBorderWidth : '4px',
        borderColor: cardBorderColor ? cardBorderColor : 'black',
        borderStyle: cardBorderStyle ? cardBorderStyle : 'solid',
        borderRadius: cardBorderRadius ? cardBorderRadius : '5px',
        boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
    };

    const hovcardStyle: React.CSSProperties = {
        transform: `scale(${isHover ? (cardEndScale ? cardEndScale : '1.5') : (cardStartScale ? cardStartScale : '1.1')})`,
        transition: '0.6s',
        marginBottom: '5px',
        marginTop: '3px',
    };

    const btnStyle: React.CSSProperties = {
        color: cardBtnColor ? cardBtnColor : 'white',
        backgroundColor: cardBtnBackgroundColor ? cardBtnBackgroundColor : 'black',
        fontSize: cardBtnSize ? cardBtnSize : '18px',
        padding: '8px',
        borderRadius: cardBtnBorderRadius ? cardBtnBorderRadius : '10px',
        textDecoration: 'none',
        textTransform: 'capitalize' as React.CSSProperties['textTransform'],
    };

    return (
        <div className='hov-card-container'>
            <div>
                <div className='hov-card' style={HovCardStyle}>
                    <div className='hov-card-style' style={hovcardStyle}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Tilt>
                            <img src={cardImgContent ? cardImgContent : "https://png.pngtree.com/png-vector/20201212/ourmid/pngtree-hello-world-quote-lettering-typography-png-image_2553040.jpg"} alt="imgpls"
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
                        <a href={link ? link : 'https://www.youtube.com/'} style={btnStyle}>
                            {cardBtnName ? cardBtnName : 'click me'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export  {HovCard};
