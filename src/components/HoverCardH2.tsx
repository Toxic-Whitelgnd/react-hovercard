import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { HovCardH2Props } from "../models/HoverCardH2props";
import {
    getHovCardStyles,
    getHovCardImageStyles,
    getButtonStyles,
    getContainerStyles,
    getHeaderStyles,
    getSubtitleStyles,
    getBodyStyles,
    getDescriptionStyles,
    getButtonContainerStyles,
} from "../styles/HoverCardH2Styles";
import { useCustomButtonClick } from '../hooks/CustomHooks';
/**
 * 
 * In H2,
 * Added Hover options for the image
 * @property isHoverEnabled
 * 
 * IN H2.1
 * will be adding the customizable properties of the tilt
 * 
 * **/ 

const HovCardH2: React.FC<HovCardH2Props> = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const handleButtonClick1 = useCustomButtonClick(props.onCustomClick1 || (() => {}));
    const handleButtonClick2 = useCustomButtonClick(props.onCustomClick2 || (() => {}));

    const isHoverEnabled =  Boolean(props.isHoverEnabled ?? true);
    
    return (
        <div className='hov-card-container'>
            <div className='hov-card' style={getHovCardStyles(props)}>
                <div
                    className='hov-card-image'
                    style={getHovCardImageStyles(props, isHover)}
                    onMouseEnter={isHoverEnabled ? handleMouseEnter : handleMouseLeave}
                    onMouseLeave={isHoverEnabled ? handleMouseLeave : handleMouseLeave}
                >
                    {isHoverEnabled ? (
                        <Tilt>
                            <img
                            src={props.cardImgContent || "https://i.ibb.co/XbMzrd9/monster.png"}
                            alt="Provide a Image"
                            width={props.cardImgWidth || '250px'}
                            height={props.cardImgHeight || '200px'}
                        />
                        </Tilt>
                    ) : (
                        <img
                        src={props.cardImgContent || "https://i.ibb.co/XbMzrd9/monster.png"}
                        alt="Provide a Image"
                        width={props.cardImgWidth || '250px'}
                        height={props.cardImgHeight || '200px'}
                    />
                    )}
                </div>
                <div style={getContainerStyles(props)}>
                    <div className="hov-card-header">
                        <h1 style={getHeaderStyles(props)}>
                            {props.cardTitle || 'Monster'}
                        </h1>
                        <h5 style={getSubtitleStyles(props)}>
                            {props.cardSubtitle || 'Funny Monster'}
                        </h5>
                    </div>
                    <div className="hov-card-body" style={getBodyStyles()}>
                        <p style={getDescriptionStyles(props)} title={props.cardDescpription}>
                            {props.cardDescpription || "A person who is very cruel and evil, or who provokes or elicits horror by their wickedness."}
                        </p>
                        <h6>{props.cardRandomText}</h6>
                    </div>
                    <div className="hov-card-btn" style={getButtonContainerStyles()}>
                        <a className="hov-card-btn1" style={getButtonStyles(
                            props.cardBtnColor1,
                            props.cardBtnBackgroundColor1,
                            props.cardBtnSize1,
                            props.cardBtnBorderRadius1,
                            props.cardBtnHeight1,
                            props.cardBtnWidth1
                        )} onClick={handleButtonClick1}>
                            {props.cardBtnName1 || 'Button 1'}
                        </a>
                        <a className="hov-card-btn2" style={getButtonStyles(
                            props.cardBtnColor2,
                            props.cardBtnBackgroundColor2,
                            props.cardBtnSize2,
                            props.cardBtnBorderRadius2,
                            undefined,
                            undefined,
                            props.cardButton2Enabled ? 'block' : 'none'
                        )} onClick={handleButtonClick2}>
                            {props.cardBtnName2 || 'Button 2'}
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HovCardH2 };
