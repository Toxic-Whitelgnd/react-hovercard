import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { HovCardV2Props } from '../models/HoverCardV2props';
import { HovCardStyle, HovcardStyleonHover, BtnStyle1, BtnStyle2 , containerStyle, descriptionStyle , bodyStyle , buttonContainerStyle, subtitleStyle, headerStyle} from '../styles/HoverCardV2Styles';
import { useCustomButtonClick } from '../hooks/CustomHooks';

/**
 * In V2, The code in one level above V1,
 
 * Added 2 buttons, with custom button clicks
 * which can be used as single or double buttons by enabling and disabling buttons
 
 * Added sub title , with custom subtitle
 * which can be enabled and disabled 
 
 * V2.1 
 * Added Customizable BoxShadow,
 * Added background color for entire card and body
 * code moved to 1.1 level up
 
 * V2.2 (soon)
 * will be adding the customizable properties of the tilt
 * adding isHover and tilt required
 
 */

const HovCardV2: React.FC<HovCardV2Props> = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const handleButtonClick1 = useCustomButtonClick(props.onCustomClick1 || (() => {}));
    const handleButtonClick2 = useCustomButtonClick(props.onCustomClick2 || (() => {}));
    props.isHoverEnabled = props.isHoverEnabled ? true : false;

    return (
        <div className='hov-card-container'>
            <div>
                <div className='hov-card' style={HovCardStyle(props)}>
                    <div className='hov-card-style' style={HovcardStyleonHover(isHover, props)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        {props.isHoverEnabled ? (
                        <Tilt>
                            <img
                            src={props.cardImgContent || "https://i.ibb.co/XbMzrd9/monster.png"}
                            alt="imgpls"
                            width={props.cardImgWidth || '250px'}
                            height={props.cardImgHeight || '200px'}
                        />
                        </Tilt>
                        ) : (
                            <img
                            src={props.cardImgContent || "https://i.ibb.co/XbMzrd9/monster.png"}
                            alt="imgpls"
                            width={props.cardImgWidth || '250px'}
                            height={props.cardImgHeight || '200px'}
                        />
                        )}
                       
                    </div>
                    <div style={containerStyle(props)}>
                        <div className="hov-card-header">
                            <h1 style={headerStyle(props)}>
                                {props.cardTitle || 'Monster'}
                            </h1>
                            <h5 style={subtitleStyle(props)}>
                                {props.cardSubtitle || 'Funny Monster'} 
                            </h5>
                        </div>
                        <div className="hov-card-body" style={bodyStyle(props)}>
                            <p style={descriptionStyle(props)}>
                                {props.cardDescpription || "A person who is very cruel and evil, or who provokes or elicits horror by their wickedness. For example, The man is a monster; he terrifies me"}
                            </p>
                            <h6>{props.cardRandomText}</h6>
                        </div>
                        <div className='hov-card-btn' style={buttonContainerStyle(props)}>
                            <a style={BtnStyle1(props)} onClick={handleButtonClick1}>
                                {props.cardBtnName1 || 'Button 1'}
                            </a>
                            <a style={BtnStyle2(props)} onClick={handleButtonClick2}>
                                {props.cardBtnName2 || 'Button 2'}
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export { HovCardV2 };
