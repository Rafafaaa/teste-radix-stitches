import { styled } from '../../styles/stitches.config'

export const LabelStyles = styled('div', {
  display: 'flex',
  padding: '0 20px',
  flexWrap: 'wrap',
  gap: 15,
  alignItems: 'center',

  '.Input': {
    color: 'red'
  }
})