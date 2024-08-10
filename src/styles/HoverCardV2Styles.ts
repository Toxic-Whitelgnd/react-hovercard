import { CSSProperties } from 'react';

export const HovCardStyle = (props: any): CSSProperties => ({
    width: props.cardWidth || '300px',
    height: props.cardHeight || 'auto',
    padding: props.cardPadding || '3px',
    borderWidth: props.cardBorderWidth || '4px',
    borderColor: props.cardBorderColor || 'black',
    borderStyle: props.cardBorderStyle || 'solid',
    borderRadius: props.cardBorderRadius || '5px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
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
});
