import * as React from 'react';
import {
    Typography,
    Card,
    CardContent,
} from '@mui/material';

import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Label} from 'recharts';

const salesPerMonth = [
    {
        "name": "2",
        "sales": 6140,
    },
    {
        "name": "4",
        "sales": 9370,
    },
    {
        "name": "6",
        "sales": 18230,
    },
    {
        "name": "8",
        "sales": 9070,
    },
    {
        "name": "10",
        "sales": 3180,
    },
    {
        "name": "12",
        "sales": 9520,
    },
    {
        "name": "14",
        "sales": 6490,
    },
    {
        "name": "16",
        "sales": 16870,
    },
    {
        "name": "18",
        "sales": 8990,
    },
    {
        "name": "20",
        "sales": 19500,
    },
    {
        "name": "22",
        "sales": 10200,
    },
    {
        "name": "24",
        "sales": 5200,
    },
    {
        "name": "26",
        "sales": 13500,
    },
    {
        "name": "28",
        "sales": 9200,
    },
    {
        "name": "30",
        "sales": 19200,
    },
];

export default function MonthlySales() {
    return (
        <div>
            <Card sx={{ height: 375 }}>
                <CardContent>
                    <Typography variant='h5' sx={{ marginBottom: '10px', borderBottom: '1px solid #FF3737' }}>Monthly Sales</Typography>

                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart width={730} height={250} data={salesPerMonth}
                            margin={{ top: 10, right: 20, left: 0, bottom: 20 }}>
                            <defs>
                                <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#FF3737" stopOpacity={0.8} />
                                    <stop offset="95%" stopColor="#FF3737" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" >
                                <Label value="Date" offset={0} position="bottom" />
                            </XAxis>
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="sales" stroke="#FF3737" fillOpacity={1} fill="url(#colorPv)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </CardContent>
            </Card>
        </div>
    )
}