import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Drawer,
  Toolbar,
  List,
  Typography,
  Divider,
  ListItem,
  ListItemButton,
  ListItemText,
  CssBaseline,
  IconButton,
  Grid,
  Card,
  CardContent,
} from '@mui/material';

import { XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, LineChart, Line, Legend } from 'recharts';

const customer = [
  {
    name: '2',
    "last month": 4000,
    "current month": 2400,
  },
  {
    name: '4',
    "last month": 3000,
    "current month": 1398,
  },
  {
    name: '6',
    "last month": 2000,
    "current month": 9800,
  },
  {
    name: '8',
    "last month": 2780,
    "current month": 3908,
  },
  {
    name: '10',
    "last month": 1890,
    "current month": 4800,
  },
  {
    name: '12',
    "last month": 2390,
    "current month": 3800,
  },
  {
    name: '14',
    "last month": 3490,
    "current month": 4300,
  },
  {
    name: '16',
    "last month": 1260,
    "current month": 3120,
  },
  {
    name: '18',
    "last month": 2790,
    "current month": 3890,
  },
  {
    name: '20',
    "last month": 2200,
    "current month": 4200,
  },
  {
    name: '22',
    "last month": 4650,
    "current month": 6290,
  },
  {
    name: '24',
    "last month": 3800,
    "current month": 4300,
  },
  {
    name: '26',
    "last month": 4000,
    "current month": 6800,
  },
  {
    name: '28',
    "last month": 4290,
    "current month": 7340,
  },
  {
    name: '30',
    "last month": 4510,
    "current month": 8000,
  },
];

export default function GrowthRate() {
  return (
    <Card sx={{ height: 350 }}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom: '10px', borderBottom: '1px solid #FF3737' }}>Growth Rate</Typography>

        <ResponsiveContainer width="100%" height={300}>
          <LineChart width={730} height={250} data={customer}
            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line type="monotone" dataKey="current month" stroke="#FF3737" activeDot={{ r: 8 }} />
            <Line type="monotone" dataKey="last month" stroke="#FF8139" />
          </LineChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  )
}