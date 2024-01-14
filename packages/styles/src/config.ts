
export const spacing = {
    0: { value: '0rem' },
    0.5: { value: '0.125rem' },
    1: { value: '0.25rem' },
    1.5: { value: '0.375rem' },
    2: { value: '0.5rem' },
    2.5: { value: '0.625rem' },
    3: { value: '0.75rem' },
    3.5: { value: '0.875rem' },
    4: { value: '1rem' },
    4.5: { value: '1.125rem' },
    5: { value: '1.25rem' },
    6: { value: '1.5rem' },
    7: { value: '1.75rem' },
    8: { value: '2rem' },
    9: { value: '2.25rem' },
    10: { value: '2.5rem' },
    11: { value: '2.75rem' },
    12: { value: '3rem' },
    14: { value: '3.5rem' },
    16: { value: '4rem' },
    20: { value: '5rem' },
    24: { value: '6rem' },
    28: { value: '7rem' },
    32: { value: '8rem' },
    36: { value: '9rem' },
    40: { value: '10rem' },
    44: { value: '11rem' },
    48: { value: '12rem' },
    52: { value: '13rem' },
    56: { value: '14rem' },
    60: { value: '15rem' },
    64: { value: '16rem' },
    72: { value: '18rem' },
    80: { value: '20rem' },
    96: { value: '24rem' },
  }

const largeSizes = {
    '2xs': { value: '16rem' },
    xs: { value: '20rem' },
    sm: { value: '24rem' },
    md: { value: '28rem' },
    lg: { value: '32rem' },
    xl: { value: '36rem' },
    '2xl': { value: '42rem' },
    '3xl': { value: '48rem' },
    '4xl': { value: '56rem' },
    '5xl': { value: '64rem' },
    '6xl': { value: '72rem' },
    '7xl': { value: '80rem' },
    '8xl': { value: '90rem' },
  }
  
  export const fullSizes = {
    full: { value: '100%' },
    min: { value: 'min-content' },
    max: { value: 'max-content' },
    fit: { value: 'fit-content' },
  }

export const textStyles = {
    xs: { value: { fontSize: 'xs', lineHeight: '1.125rem' } },
    sm: { value: { fontSize: 'sm', lineHeight: '1.25rem' } },
    md: { value: { fontSize: 'md', lineHeight: '1.5rem' } },
    lg: { value: { fontSize: 'lg', lineHeight: '1.75rem' } },
    xl: { value: { fontSize: 'xl', lineHeight: '1.875rem' } },
    '2xl': { value: { fontSize: '2xl', lineHeight: '2rem' } },
    '3xl': { value: { fontSize: '3xl', lineHeight: '2.375rem' } },
    '4xl': { value: { fontSize: '4xl', lineHeight: '2.75rem', letterSpacing: '-0.02em' } },
    '5xl': { value: { fontSize: '5xl', lineHeight: '3.75rem', letterSpacing: '-0.02em' } },
    '6xl': { value: { fontSize: '6xl', lineHeight: '4.5rem', letterSpacing: '-0.02em' } },
    '7xl': { value: { fontSize: '7xl', lineHeight: '5.75rem', letterSpacing: '-0.02em' } },
  }

  export const breakpoints = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    '2xl': '1536px',
  }
  
  export const radii = {
    none: { value: '0' },
    '2xs': { value: '0.0625rem' },
    xs: { value: '0.125rem' },
    sm: { value: '0.25rem' },
    md: { value: '0.375rem' },
    lg: { value: '0.5rem' },
    xl: { value: '0.75rem' },
    '2xl': { value: '1rem' },
    '3xl': { value: '1.5rem' },
    full: { value: '9999px' },
  }


  export const fontSizes= {
    '2xs': { value: '0.5rem' },
    xs: { value: '0.75rem' },
    sm: { value: '0.875rem' },
    md: { value: '1rem' },
    lg: { value: '1.125rem' },
    xl: { value: '1.25rem' },
    '2xl': { value: '1.5rem' },
    '3xl': { value: '1.875rem' },
    '4xl': { value: '2.25rem' },
    '5xl': { value: '3rem' },
    '6xl': { value: '3.75rem' },
    '7xl': { value: '4.5rem' },
    '8xl': { value: '6rem' },
    '9xl': { value: '8rem' },
  }
  
  export const fontWeights = {
    thin: { value: '100' },
    extralight: { value: '200' },
    light: { value: '300' },
    normal: { value: '400' },
    medium: { value: '500' },
    semibold: { value: '600' },
    bold: { value: '700' },
    extrabold: { value: '800' },
    black: { value: '900' },
  }
  
  export const letterSpacings= {
    tighter: { value: '-0.05em' },
    tight: { value: '-0.025em' },
    normal: { value: '0em' },
    wide: { value: '0.025em' },
    wider: { value: '0.05em' },
    widest: { value: '0.1em' },
  }
  
  export const lineHeights= {
    none: { value: '1' },
    tight: { value: '1.25' },
    normal: { value: '1.5' },
    relaxed: { value: '1.75' },
    loose: { value: '2' },
  }
  
  export const fonts = {
    sans: {
      value: [
        'ui-sans-serif',
        'system-ui',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
    },
    serif: {
      value: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
    },
    mono: {
      value: [
        'ui-monospace',
        'SFMono-Regular',
        'Menlo',
        'Monaco',
        'Consolas',
        '"Liberation Mono"',
        '"Courier New"',
        'monospace',
      ],
    },
  }

  export const durations = {
    fastest: { value: '50ms' },
    faster: { value: '100ms' },
    fast: { value: '150ms' },
    normal: { value: '200ms' },
    slow: { value: '300ms' },
    slower: { value: '400ms' },
    slowest: { value: '500ms' },
  }


  export const input = {
    className: 'input',
    base: {
      appearance: 'none',
      background: 'none',
      borderColor: 'border.default',
      borderRadius: 'l2',
      borderWidth: '1px',
      colorPalette: 'accent',
      color: 'fg.default',
      outline: 0,
      position: 'relative',
      transitionDuration: 'normal',
      transitionProperty: 'box-shadow, border-color',
      transitionTimingFunction: 'default',
      width: 'full',
      _disabled: {
        opacity: 0.4,
        cursor: 'not-allowed',
      },
      _focus: {
        borderColor: 'colorPalette.default',
        boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
      },
    },
    defaultVariants: {
      size: 'md',
    },
    variants: {
      size: {
        '2xs': { px: '1.5', h: '7', minW: '7', fontSize: 'xs' },
        xs: { px: '2', h: '8', minW: '8', fontSize: 'xs' },
        sm: { px: '2.5', h: '9', minW: '9', fontSize: 'sm' },
        md: { px: '3', h: '10', minW: '10', fontSize: 'md' },
        lg: { px: '3.5', h: '11', minW: '11', fontSize: 'md' },
        xl: { px: '4', h: '12', minW: '12', fontSize: 'lg' },
        '2xl': { px: '2', h: '16', minW: '16', textStyle: '3xl' },
      },
    },
  }


//   export const button = defineRecipe({
//     className: 'button',
//     base: {
//       alignItems: 'center',
//       appearance: 'none',
//       borderRadius: 'l2',
//       cursor: 'pointer',
//       display: 'inline-flex',
//       fontWeight: 'semibold',
//       minWidth: '0',
//       justifyContent: 'center',
//       outline: 'none',
//       transitionDuration: 'normal',
//       transitionProperty: 'background, border-color, color, box-shadow',
//       transitionTimingFunction: 'default',
//       userSelect: 'none',
//       verticalAlign: 'middle',
//       whiteSpace: 'nowrap',
//       _hidden: {
//         display: 'none',
//       },
//     },
//     defaultVariants: {
//       variant: 'solid',
//       size: 'md',
//     },
//     variants: {
//       variant: {
//         solid: {
//           background: 'colorPalette.default',
//           color: 'colorPalette.fg',
//           colorPalette: 'accent',
//           _hover: {
//             background: 'colorPalette.emphasized',
//           },
//           _focusVisible: {
//             outline: '2px solid',
//             outlineColor: 'colorPalette.default',
//             outlineOffset: '2px',
//           },
//           _disabled: {
//             color: 'fg.disabled',
//             background: 'bg.disabled',
//             cursor: 'not-allowed',
//             _hover: {
//               color: 'fg.disabled',
//               background: 'bg.disabled',
//             },
//           },
//         },
//         outline: {
//           borderWidth: '1px',
//           borderColor: 'colorPalette.a8',
//           color: 'colorPalette.text',
//           colorPalette: 'gray',
//           _hover: {
//             background: 'colorPalette.a2',
//           },
//           _disabled: {
//             borderColor: 'border.disabled',
//             color: 'fg.disabled',
//             cursor: 'not-allowed',
//             _hover: {
//               background: 'transparent',
//               borderColor: 'border.disabled',
//               color: 'fg.disabled',
//             },
//           },
//           _focusVisible: {
//             outline: '2px solid',
//             outlineColor: 'colorPalette.default',
//             outlineOffset: '2px',
//           },
//           _selected: {
//             background: 'accent.default',
//             borderColor: 'accent.default',
//             color: 'accent.fg',
//             _hover: {
//               background: 'accent.emphasized',
//               borderColor: 'accent.emphasized',
//             },
//           },
//         },
//         ghost: {
//           color: 'colorPalette.text',
//           colorPalette: 'gray',
//           _hover: {
//             background: 'colorPalette.a3',
//           },
//           _selected: {
//             background: 'colorPalette.a3',
//           },
//           _disabled: {
//             color: 'fg.disabled',
//             cursor: 'not-allowed',
//             _hover: {
//               background: 'transparent',
//               color: 'fg.disabled',
//             },
//           },
//           _focusVisible: {
//             outline: '2px solid',
//             outlineColor: 'colorPalette.default',
//             outlineOffset: '2px',
//           },
//         },
//         link: {
//           verticalAlign: 'baseline',
//           _disabled: {
//             color: 'border.disabled',
//             cursor: 'not-allowed',
//             _hover: {
//               color: 'border.disabled',
//             },
//           },
//           height: 'auto!',
//           px: '0!',
//           minW: '0!',
//         },
//         subtle: {
//           background: 'colorPalette.a3',
//           color: 'colorPalette.text',
//           colorPalette: 'gray',
//           _hover: {
//             background: 'colorPalette.a4',
//           },
//           _focusVisible: {
//             outline: '2px solid',
//             outlineColor: 'colorPalette.default',
//             outlineOffset: '2px',
//           },
//           _disabled: {
//             background: 'bg.disabled',
//             color: 'fg.disabled',
//             cursor: 'not-allowed',
//             _hover: {
//               background: 'bg.disabled',
//               color: 'fg.disabled',
//             },
//           },
//         },
//       },
//       size: {
//         xs: {
//           h: '8',
//           minW: '8',
//           textStyle: 'xs',
//           px: '3',
//           gap: '2',
//           '& svg': {
//             fontSize: 'md',
//             width: '4',
//             height: '4',
//           },
//         },
//         sm: {
//           h: '9',
//           minW: '9',
//           textStyle: 'sm',
//           px: '3.5',
//           gap: '2',
//           '& svg': {
//             width: '4',
//             height: '4',
//           },
//         },
//         md: {
//           h: '10',
//           minW: '10',
//           textStyle: 'sm',
//           px: '4',
//           gap: '2',
//           '& svg': {
//             width: '5',
//             height: '5',
//           },
//         },
//         lg: {
//           h: '11',
//           minW: '11',
//           textStyle: 'md',
//           px: '4.5',
//           gap: '2',
//           '& svg': {
//             width: '5',
//             height: '5',
//           },
//         },
//         xl: {
//           h: '12',
//           minW: '12',
//           textStyle: 'md',
//           px: '5',
//           gap: '2.5',
//           '& svg': {
//             width: '5',
//             height: '5',
//           },
//         },
//         '2xl': {
//           h: '16',
//           minW: '16',
//           textStyle: 'lg',
//           px: '7',
//           gap: '3',
//           '& svg': {
//             width: '6',
//             height: '6',
//           },
//         },
//       },
//     },
//   })
  

//   export const card = defineSlotRecipe({
//     className: 'card',
//     slots: ['root', 'header', 'body', 'footer', 'title', 'description'],
//     base: {
//       root: {
//         bg: 'bg.default',
//         borderRadius: 'l3',
//         boxShadow: 'lg',
//         display: 'flex',
//         flexDirection: 'column',
//         position: 'relative',
//       },
//       header: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1',
//         p: '6',
//       },
//       body: {
//         display: 'flex',
//         flex: '1',
//         flexDirection: 'column',
//         pb: '6',
//         px: '6',
//       },
//       footer: {
//         display: 'flex',
//         justifyContent: 'flex-end',
//         pb: '6',
//         pt: '2',
//         px: '6',
//       },
//       title: {
//         color: 'fg.default',
//         textStyle: 'lg',
//         fontWeight: 'semibold',
//       },
//       description: {
//         color: 'fg.muted',
//         textStyle: 'sm',
//       },
//     },
//   })
  

//   export const textarea = defineRecipe({
//     className: 'textarea',
//     base: {
//       appearance: 'none',
//       background: 'none',
//       borderColor: 'border.default',
//       borderRadius: 'l2',
//       borderWidth: '1px',
//       colorPalette: 'accent',
//       minWidth: 0,
//       outline: 0,
//       position: 'relative',
//       transitionDuration: 'normal',
//       transitionProperty: 'border-color, box-shadow',
//       width: 'full',
//       _disabled: {
//         opacity: 0.4,
//         cursor: 'not-allowed',
//       },
//       _focus: {
//         borderColor: 'colorPalette.default',
//         boxShadow: '0 0 0 1px var(--colors-color-palette-default)',
//       },
//     },
//     defaultVariants: {
//       size: 'md',
//     },
//     variants: {
//       size: {
//         sm: { p: '2.5', fontSize: 'sm' },
//         md: { p: '3', fontSize: 'md' },
//         lg: { p: '3.5', fontSize: 'md' },
//         xl: { p: '4', fontSize: 'md' },
//       },
//     },
//   })
  