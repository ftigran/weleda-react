import React from 'react';

import Grid from '@material-ui/core/Grid';

//import Checkbox from '../../components/Checkbox/Checkbox';
import Button from '@material-ui/core/Button';
//import CheckRequirementsModal from '../../components/Modal/CheckRequirementsModal/CheckRequirementsModal'

//import {verify} from '../../components/Modal/SimpleModal/SimpleModal'
//import Form from '../../../../dist/components/Form/Form'
import './Tabs.scss'






import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}


export default function SimpleTabs() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const ColumnsTasks = [
    { 
        id: 'date',
        label: 'Дата отправки',
        params: {width: 237}
        },
      { 
        id: 'task',
        label: 'Задание',
        params: {width: 250}
     },
      {
        id: 'stat',
        label: 'Статус',
        params: {width: 257}
        
      },{
        id: 'points',
        label: 'Баллы',
        params: {width: 230}
      },
  ]
  const ColumnsPrizi = [
    
      { 
        id: 'date',
        label: 'Дата',
        params: {width: 240}
     },
     { 
      id: 'name',
      label: 'Приз',
      params: {width: 572}
      },
      {
        id: 'points',
        label: 'Баллы',
      params: {width: 248}
      },
  ]
  const rowsPrizi = [
    createDataPrizi('17.04.2021', 'промокод на скидку 10%', 3),
    createDataPrizi('26.04.2021', 'многоразовая бутылка для воды', 9),
  ]
  function createDataPrizi(date, name, points){    
    return {date,name, points}
}
  function createData(date, task, stat, points){
      if (stat===true){
        stat='Принят'
      } else if (stat===false){
        stat='Отклонен'
      } else {
        stat='на модерации I'
      }

      return {date,task, stat, points}
  }
  const rowsTasks = [
    createData('15.04.2021', 'Задание №1', true, 3),
    createData('25.04.2021', 'Задание №2',),
  ]
  return (
    <div className='tabpage'>
      <AppBar position="static" className="TabBar">
        <Tabs value={value} onChange={handleChange} aria-label="simple tabs example">
          <Tab label="Выполненные задания" {...a11yProps(0)} />
          <Tab label="Призы" {...a11yProps(1)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Table 
        columns={ColumnsTasks} 
        rows={rowsTasks}
        rowsPerPage={5}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Table 
          columns={ColumnsPrizi} 
          rows={rowsPrizi}
          rowsPerPage={5}
          />
      </TabPanel>
    </div>
  );
}


import Table from '../Table/Table'