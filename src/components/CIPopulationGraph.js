import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const CIPopulationGraph = ({ population}) => {
    return(
        <div className='tc ma3 pa3' style={{minWidth: '60%', height:'250px', alignItems: 'center', justifyContent: 'center' }}>
            <h2>Population</h2>
            <ResponsiveContainer>
                <LineChart
                    width='100%'
                    height='100%'
                    data={population}
                    margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
                >
                    <XAxis dataKey="year" />
                    <YAxis />
                    <CartesianGrid strokeDasharray="3 3" />
                    <Tooltip />
                    <Legend />
                    <Line type="monotone" dataKey="value" stroke="#8884d8" activeDot={{ r: 8 }} />
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}
export default CIPopulationGraph;