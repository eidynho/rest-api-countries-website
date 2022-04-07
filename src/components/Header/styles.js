import { styled } from '@mui/system'



const HeaderBox = styled('div')(({ theme }) => ({
  height: '80px',
  background: theme.colors.primary,
  color: '#fff',
  display: 'flex',
  alignItems: 'center',
  padding: '0 30px',
}))




export {
  HeaderBox,
}