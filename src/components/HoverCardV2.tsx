import React, { useState } from "react";
import Tilt from "react-parallax-tilt";
import { HovCard2BtnProps } from '../models/HoverCardV2props';
import { HovCardStyle, HovcardStyleonHover, BtnStyle1, BtnStyle2 } from '../styles/HoverCardV2Styles';
import { useCustomButtonClick } from '../hooks/CustomHooks';

/**
 * In V2, The code in one level above V1,
 
 * Added 2 buttons, with custom button clicks
 * which can be used as single or double buttons by enabling and disabling buttons
 
 * Added sub title , with custom subtitle
 * which can be enabled and disabled 
 
 */

const HovCardV2: React.FC<HovCard2BtnProps> = (props) => {
    const [isHover, setIsHover] = useState(false);

    const handleMouseEnter = () => setIsHover(true);
    const handleMouseLeave = () => setIsHover(false);

    const handleButtonClick1 = useCustomButtonClick(props.onCustomClick1 || (() => {}));
    const handleButtonClick2 = useCustomButtonClick(props.onCustomClick2 || (() => {}));

    return (
        <div className='hov-card-container'>
            <div>
                <div className='hov-card' style={HovCardStyle(props)}>
                    <div className='hov-card-style' style={HovcardStyleonHover(isHover, props)}
                        onMouseEnter={handleMouseEnter}
                        onMouseLeave={handleMouseLeave}
                    >
                        <Tilt>
                            <img 
                                src={props.cardImgContent || "https://i.ibb.co/XbMzrd9/monster.png"} 
                                alt="imgpls"
                                width={props.cardImgWidth || '250px'}
                                height={props.cardImgHeight || '200px'} 
                            />
                        </Tilt>
                    </div>
                    <div className="hov-card-header">
                        <h1 style={{ fontSize: props.cardTitleFontSize || '32px' }}>
                            {props.cardTitle || 'Monster'}
                        </h1>
                        <h5 style={{fontSize: props.cardSubtitle || '20px',lineHeight:'0px',textAlign:'left',marginLeft:'12px',display:props.cardSubtitleEnable || 'none'}}>
                            {props.cardSubtitle || 'Funny Monster'} 
                        </h5>
                    </div>
                    <div className="hov-card-body" style={{margin:'3px'}}>
                        <p style={{ fontFamily: props.cardDescpriptionFontFamily || 'Roboto' }}>
                            {props.cardDescpription || "A person who is very cruel and evil, or who provokes or elicits horror by their wickedness. For example, The man is a monster; he terrifies me"}
                        </p>
                        <h6>{props.cardRandomText}</h6>
                    </div>
                    <div className='hov-card-btn' style={{ marginBottom: '10px',display:'flex',justifyContent:'space-evenly' }}>
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
    );
};

export { HovCardV2 };
