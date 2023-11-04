import * as React from 'react';
import {
  Typography,
  Card,
  CardContent,
} from '@mui/material';

import LinearProgress from '@mui/material/LinearProgress';

import { ResponsiveContainer, LineChart, Line } from 'recharts';

const sales = [
  {
    name: 'Page A',
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: 'Page B',
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: 'Page C',
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: 'Page D',
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: 'Page E',
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: 'Page F',
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: 'Page G',
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function CustomerCard() {
  return (
    <Card sx={{ height: 350 }}>
      <CardContent>
        <Typography variant='h5' sx={{ marginBottom: '10px', borderBottom: '1px solid #FF3737' }}>Customers</Typography>

        <Typography variant='h6' sx={{ fontSize: 14, marginTop: '16px' }} > Total Customers </Typography>
        <LinearProgress variant="determinate" value={100} />

        <Typography variant='h6' sx={{ fontSize: 14, marginTop: '16px' }} > New Customers </Typography>
        <LinearProgress variant="determinate" value={33} />

        <Typography variant='h6' sx={{ fontSize: 14, marginTop: '16px' }} > Old Customers </Typography>
        <LinearProgress variant="determinate" value={66} />
      </CardContent>

      <ResponsiveContainer width="100%" height={150}>
        <LineChart data={sales} margin={{ top: 20, right: 30, left: 30, bottom: 20 }}>
          <Line type="monotone" dataKey="amt" stroke="#FF3737" strokeWidth={2} />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  )
}