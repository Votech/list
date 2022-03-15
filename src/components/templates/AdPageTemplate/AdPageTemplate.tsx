import { NavigateFunction } from 'react-router-dom';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import { Typography } from '@mui/material';

import { IAd } from '../../../types/interfaces';

interface AdPageTemplateProps {
  state: IAd;
  navigate: NavigateFunction;
}

export default function AdPageTemplate({
  state,
  navigate,
}: AdPageTemplateProps) {
  return (
    <Box sx={{ padding: 2 }}>
      <Button variant='contained' onClick={() => navigate('/')}>
        Go Back
      </Button>
      {!!state &&
        Object.entries(state).map((ad, index) => (
          <ListItem key={index}>
            <ListItemText
              primary={
                <Typography>
                  <span style={{ fontWeight: '600' }}>{`${ad[0]}: `}</span>
                  {`${ad[1]}`}
                </Typography>
              }
            />
          </ListItem>
        ))}
    </Box>
  );
}
