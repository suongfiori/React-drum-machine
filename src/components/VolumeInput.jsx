import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import Slider from '@mui/material/Slider';
import VolumeDown from '@mui/icons-material/VolumeDown';
import VolumeUp from '@mui/icons-material/VolumeUp';
import { styled } from '@mui/material/styles';

const CustomSlider = styled(Slider)(({ theme }) => ({
  color: '#b25244',
  '& .MuiSlider-thumb': {
    backgroundColor: '#5e1912',
  },
}))

const VolumeInput = ({ volume, onVolumeChange, setMessage, powerState }) => {
  const handleChange = (event, newValue) => {
    onVolumeChange(newValue)
    setMessage(`Volume: ${Math.round(newValue * 100).toString()}`)
    setTimeout(() => setMessage(""), 1000)
  }
  return (
    <Box sx={{ width: 160 }}>
      <Stack spacing={1} direction="row" sx={{ mb: 1 }} alignItems="center">
        <VolumeDown />
        <CustomSlider
          aria-label="Volume"
          value={volume}
          onChange={handleChange}
          min={0}
          max={1}
          step={0.02}
          disabled={powerState}
        />
        <VolumeUp />
      </Stack>
    </Box>
  )
}

export default VolumeInput
