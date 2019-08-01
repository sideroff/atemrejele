export const primaryBackgroundColor = '#140E0E'

export const white = '#F1F1F1'
export const black = primaryBackgroundColor
export const primaryColorHex = '#DE523D'
export const primaryColorLightHex = '#ff8369'
export const primaryColorDarkHex = '#a61c14'

export const accentColor = '#03E7C6'
export const spinnerColor = white

export const primaryBlackColor = 'rgba(20, 14, 14, 1)'

export const primaryColor = 'rgba(222, 83, 61,1)'
export const primaryColorLight1 = 'rgba(248,121,101,1)'
export const primaryColorLight2 = 'rgba(255,160,145,1)'

export const primaryColorDark1 = 'rgba(191, 50, 28,1)'
export const primaryColorDark2 = 'rgba(152, 27,  7,1)'

export const primaryColorWithOpacity = opacity => `rgba(222, 83, 61, ${opacity})`

const lightTheme = {
  primaryColor: 'rgba(222, 83, 61, 1)'
}

export const themes = {
  default: lightTheme,

  light: lightTheme,
  dark: {
    primaryColor: 'gray'
  },
  contrast: {
    primaryColor: 'purple'
  }
}

export const forPhone = '@media (max-width: 599px)'

export const fromTabletPortraitUp = '@media (min-width: 600px)'

export const fromTabletLandscapeUp = '@media (min-width: 900px)'

export const fromDesktopDown = '@media (max-width: 1199px)'
export const fromDesktopUp = '@media (min-width: 1200px)'

export const fromBigDesktopDown = '@media (min-width: 1799px)'
export const fromBigDesktopUp = '@media (min-width: 1800px)'
