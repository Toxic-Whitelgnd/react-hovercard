import { CSSProperties } from 'react';

export const HovCardStyle = (props: any): CSSProperties => ({
    width: props.cardWidth || '300px',
    height: props.cardHeight || 'auto',
    padding: props.cardPadding || '3px',
    borderWidth: props.cardBorderWidth || '4px',
    borderColor: props.cardBorderColor || 'black',
    borderStyle: props.cardBorderStyle || 'solid',
    borderRadius: props.cardBorderRadius || '5px',
    boxShadow: props.cardBoxShadow || 'rgb(38, 57, 77) 0px 20px 30px -10px',
    backgroundColor: props.cardBackgroundColor || '#00bfff',
});

export const HovcardStyleonHover = (isHover: boolean, props: any): CSSProperties => ({
    transform: `scale(${isHover ? (props.cardEndScale || '1.5') : (props.cardStartScale || '1.1')})`,
    transition: '0.6s',
    marginBottom: '5px',
    marginTop: '3px',
});

export const BtnStyle1 = (props: any): CSSProperties => ({
    color: props.cardBtnColor1 || 'white',
    backgroundColor: props.cardBtnBackgroundColor1 || 'black',
    fontSize: props.cardBtnSize1 || '18px',
    padding: '8px',
    borderRadius: props.cardBtnBorderRadius1 || '10px',
    textDecoration: 'none',
    textTransform: 'capitalize' as CSSProperties['textTransform'],
});

export const BtnStyle2 = (props: any): CSSProperties => ({
    color: props.cardBtnColor2 || 'white',
    backgroundColor: props.cardBtnBackgroundColor2 || 'blue',
    fontSize: props.cardBtnSize2 || '18px',
    padding: '8px',
    borderRadius: props.cardBtnBorderRadius2 || '10px',
    textDecoration: 'none',
    textTransform: 'capitalize' as CSSProperties['textTransform'],
    display: props.cardButton2Enabled ? 'block' : 'none',
});

export const containerStyle = (props:any): React.CSSProperties =>( {
    backgroundColor: props.cardBackgroundBodyColor || '#00bfff',
});

export const headerStyle = (props:any): React.CSSProperties =>( {
    fontSize: props.cardTitleFontSize || '32px',
});

export const subtitleStyle = (props:any): React.CSSProperties =>( {
    fontSize: props.cardSubtitleFontSize || '20px',
    lineHeight: '0px',
    textAlign: 'left',
    marginLeft: '12px',
    display: props.cardSubtitleEnable ? 'block' : 'none',
});

export const bodyStyle = (props:any): React.CSSProperties =>( {
    margin: '3px',
});

export const descriptionStyle = (props:any): React.CSSProperties =>( {
    fontFamily: props.cardDescpriptionFontFamily || 'Roboto',
    fontSize: props.cardDescpriptionFontSize || '16px',
});

export const buttonContainerStyle = (props:any): React.CSSProperties =>( {
    marginBottom: '0px',
    display: 'flex',
    justifyContent: 'space-evenly',
});