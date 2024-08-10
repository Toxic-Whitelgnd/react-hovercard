import React from "react";

export  const HovCardStyle = (
    cardWidth?: string,
    cardHeight?: string,
    cardPadding?: string,
    cardBorderWidth?: string,
    cardBorderColor?: string,
    cardBorderStyle?: string,
    cardBorderRadius?: string
): React.CSSProperties => ({
    width: cardWidth ? cardWidth : '300px',
    height: cardHeight ? cardHeight : 'auto',
    padding: cardPadding ? cardPadding : '3px',
    borderWidth: cardBorderWidth ? cardBorderWidth : '4px',
    borderColor: cardBorderColor ? cardBorderColor : 'black',
    borderStyle: cardBorderStyle ? cardBorderStyle : 'solid',
    borderRadius: cardBorderRadius ? cardBorderRadius : '5px',
    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px',
});

export const HovcardStyleonHover = (
    isHover: boolean,
    cardEndScale?: string,
    cardStartScale?: string
): React.CSSProperties => ({
    transform: `scale(${isHover ? (cardEndScale || '1.5') : (cardStartScale || '1.1')})`,
    transition: '0.6s',
    marginBottom: '5px',
    marginTop: '3px',
});

export const BtnStyle = (
    cardBtnColor?: string,
    cardBtnBackgroundColor?: string,
    cardBtnSize?: string,
    cardBtnBorderRadius?: string,
    marginTop?: string
): React.CSSProperties => ({
    color: cardBtnColor || 'white',
    backgroundColor: cardBtnBackgroundColor || 'black',
    fontSize: cardBtnSize || '18px',
    padding: '8px',
    borderRadius: cardBtnBorderRadius || '10px',
    textDecoration: 'none',
    textTransform: 'capitalize' as React.CSSProperties['textTransform'],
    marginTop: marginTop || '0px',
});