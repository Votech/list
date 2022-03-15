import { Dispatch, SetStateAction, MouseEvent  } from 'react';

import { useNavigate } from 'react-router-dom';
import { FixedSizeList, ListChildComponentProps } from 'react-window';

import Box from '@mui/material/Box';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import Checkbox from '@mui/material/Checkbox';

import { IAd } from '../../../types/interfaces';

interface IVirtualizedListProps {
  data: Array<IAd>;
  checked: Array<number>;
  setChecked: Dispatch<SetStateAction<Array<number>>>;
}

function renderRow(props: ListChildComponentProps) {
  const {
    index,
    style,
    data: { data, handleToggle, checked, navigate },
  } = props;

  const id = data[index].id;

  const handleClick = (e: MouseEvent ) => e.stopPropagation();
  const isChecked = checked.indexOf(id) !== -1;

  return (
    <ListItem
      onClick={() => {
        navigate(`/ads/${id}`, { replace: true, state: data[index] });
      }}
      secondaryAction={
        <Checkbox
          data-testid={`checkbox-${id}`}
          edge='end'
          onChange={handleToggle(id)}
          onClick={handleClick}
          checked={isChecked}
        />
      }
      style={style}
      key={index}
      component='div'
      disablePadding
    >
      <ListItemButton>
        <ListItemText primary={data[index].subject} />
      </ListItemButton>
    </ListItem>
  );
}

export default function VirtualizedList({
  data,
  checked,
  setChecked,
}: IVirtualizedListProps) {
  let navigate = useNavigate();

  const handleToggle = (value: number) => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };
  return (
    <Box
      sx={{
        width: '100%',
        height: 400,
        maxWidth: 360,
        bgcolor: 'background.paper',
      }}
    >
      <FixedSizeList
        height={400}
        width={360}
        itemSize={46}
        itemCount={data.length}
        itemData={{
          data: data,
          handleToggle: handleToggle,
          checked: checked,
          navigate: navigate,
        }}
        overscanCount={5}
      >
        {renderRow}
      </FixedSizeList>
    </Box>
  );
}
