import { CSSProperties } from 'react';
import { HovCardH2Props } from '../models/HoverCardH2props';

export const getHovCardStyles = (props: HovCardH2Props): CSSProperties => ({
    display: 'flex',
    alignItems: 'center',
    width: props.cardWidth || '600px',
    height: props.cardHeight || 'auto',
    padding: props.cardPadding || '3px',
    borderWidth: props.cardBorderWidth || '4px',
    borderColor: props.cardBorderColor || '#00bfff',
    borderStyle: props.cardBorderStyle || 'solid',
    borderRadius: props.cardBorderRadius || '5px',
    boxShadow: props.cardBoxShadow || 'rgb(38, 57, 77) 0px 20px 30px -10px',
    backgroundColor: props.cardBackgroundColor || '#00bfff',
});

export const getHovCardImageStyles = (props: HovCardH2Props, isHover: boolean): CSSProperties => ({
    transform: `scale(${isHover ? (props.cardEndScale || '1.5') : (props.cardStartScale || '1.1')})`,
    transition: '0.6s',
    marginRight: '20px',
});

export const getButtonStyles = (
    color: string | undefined, 
    backgroundColor: string | undefined, 
    fontSize: string | undefined, 
    borderRadius: string | undefined, 
    height?: string | undefined, 
    width?: string | undefined,
    display: string | undefined = 'flex'
): CSSProperties => ({
    color: color || 'white',
    backgroundColor: backgroundColor || 'black',
    fontSize: fontSize || '18px',
    padding: '8px',
    borderRadius: borderRadius || '10px',
    textDecoration: 'none',
    textTransform: 'capitalize',
    height: height || '28px',
    width: width || '80px',
    display: display,
    justifyContent: 'center',
    alignItems: 'center',
});

export const getContainerStyles = (props: HovCardH2Props): CSSProperties => ({
    flex: 1,
    backgroundColor: props.cardBackgroundBodyColor || '#00bfff',
    padding: '10px',
});

export const getHeaderStyles = (props: HovCardH2Props): CSSProperties => ({
    fontSize: props.cardTitleFontSize || '32px',
});

export const getSubtitleStyles = (props: HovCardH2Props): CSSProperties => ({
    fontSize: props.cardSubtitleFontSize || '20px',
    lineHeight: '0px',
    textAlign: 'left',
    marginLeft: '12px',
    display: props.cardSubtitleEnable ? 'block' : 'none',
});

export const getBodyStyles = (): CSSProperties => ({
    margin: '3px',
    maxWidth: '300px',
});

export const getDescriptionStyles = (props: HovCardH2Props): CSSProperties => ({
    fontFamily: props.cardDescpriptionFontFamily || 'Roboto',
    fontSize: props.cardDescpriptionFontSize || '16px',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    maxWidth: '100%',
});

export const getButtonContainerStyles = (): CSSProperties => ({
    marginTop: '20px',
    display: 'flex',
    justifyContent: 'space-evenly',
});
