import {scaleFont} from './metrics';
import {Colors} from './Color';

export const FONT_REGULAR = 'DMSans-Regular';
export const FONT_MEDIUM = 'DMSans-Medium';
export const FONT_MEDIUM_ITALIC = 'DMSans-MediumItalic';
export const FONT_BOLD = 'DMSans-Bold';
export const FONT_BOLD_ITALIC = 'DMSans-BoldItalic';
export const FONT_ITALIC = 'DMSans-Italic';

export const regular = {
  fontFamily: FONT_REGULAR,
};
export const medium = {
  fontFamily: FONT_MEDIUM,
};
export const mediumItalic = {
  fontFamily: FONT_MEDIUM_ITALIC,
};
export const bold = {
  fontFamily: FONT_BOLD,
};
export const boldItalic = {
  fontFamily: FONT_BOLD_ITALIC,
};
export const italic = {
  fontFamily: FONT_ITALIC,
};

export const defaultTexts = {
  largeTitle: {
    ...bold,
    color: Colors.primaryText,
    fontSize: scaleFont(24),
    lineHeight: scaleFont(39),
    letterSpacing: 0,
  },
  bodyBold: {
    ...bold,
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  body: {
    ...medium,
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
  bodySubtitle: {
    ...medium,
    color: Colors.primaryText,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
  paragraph: {
    ...regular,
    color: Colors.primaryText,
    fontSize: scaleFont(14),
    lineHeight: scaleFont(16),
    letterSpacing: 0,
  },
  caption: {
    ...regular,
    color: Colors.primaryText,
    fontSize: scaleFont(12),
    lineHeight: scaleFont(14),
    letterSpacing: 0,
  },
  smallText: {
    ...medium,
    color: Colors.primaryText,
    fontSize: scaleFont(9),
    lineHeight: scaleFont(10),
    letterSpacing: 0,
  },
  input: {
    ...medium,
    color: Colors.primaryText,
    fontSize: scaleFont(16),
    lineHeight: scaleFont(19),
    letterSpacing: 0,
  },
};
