import React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';

const MenuList = ({ items }) => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        aria-label="Navigation Tabs"
        centered
      >
        {items.map((item, index) => (
          
          <Tab
            key={index}
            label={
              <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
                <img src={item.icon} alt={item.label} className="w-5 h-5" />
                <span>{item.label}</span>
              </Box>
            }
            sx={{
              marginTop: '0px',  
              paddingTop: '0',               
            }}
            component={Link}
            to={item.link}   
          />
        
        ))}
      </Tabs>
    </Box>
  );
};

export default MenuList;
