
export const basic={
    base: {
      display: 'flex',
      flexDir :"column"
    },
    variants: {
      visual: {
        solid: { bg: 'red.200', color: 'blue.200' },
        outline: { borderWidth: '1px', borderColor: 'blue.200' }
      },
      size: {
        sm: { padding: '4', fontSize: '12px' ,gap:1  },
        lg: { padding: '8', fontSize: '24px' ,gap:10}
      }

    }
}