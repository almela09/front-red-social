import React, { useState } from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Collapse from '@mui/material/Collapse';

const ExpandableCard = () => {
  const [expanded, setExpanded] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        component="img"
        height="140"
        image="https://source.unsplash.com/random"
        alt="random"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Expandable Card
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Click below to expand the card and read more about it.
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" onClick={handleExpandClick}>
          {expanded ? 'Less' : 'More'}
        </Button>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Here's more detailed information that becomes visible when the card is expanded.
            You can include any additional content or information here.
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default ExpandableCard;
