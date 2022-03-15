import { Dispatch, SetStateAction } from 'react';

import VirtualizedList from '../../organisms/VirtualizedList/VirtualizedList';

import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

import { IAd } from '../../../types/interfaces';

interface IHomePageTemplateProps {
  ads: Array<IAd>;
  checked: Array<number>;
  setChecked: Dispatch<SetStateAction<Array<number>>>;
  setShowMany: Dispatch<SetStateAction<boolean>>;
}

export default function HomePageTemplate({
  ads,
  checked,
  setChecked,
  setShowMany,
}: IHomePageTemplateProps) {

  const showMany = () => setShowMany(true);
  const showFew = () => setShowMany(false);

  return (
    <Box sx={{ padding: 2 }}>
      <Box sx={{ display: 'flex', paddingBottom: 2 }}>
        <Button
          variant='contained'
          onClick={showFew}
          sx={{ marginRight: 2 }}
        >
          Show 2 ads
        </Button>
        <Button variant='contained' onClick={showMany}>
          Show 10 000 ads
        </Button>
      </Box>
      <Typography variant='h6' sx={{ paddingBottom: 2 }}>
        Number of ads: {checked.length}
      </Typography>
      <VirtualizedList data={ads} checked={checked} setChecked={setChecked} />
    </Box>
  );
}
