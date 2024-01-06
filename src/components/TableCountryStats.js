import React from 'react';
import { Table } from 'react-bootstrap';

const TableCountryStats = ({ cityPopData }) => {
    const renderTableRows = () => {
      if (cityPopData && cityPopData.length > 0) {
        return cityPopData.map((data, index) => (
          <tr key={index}>
            <td>{data.city}</td>
            <td>
              <ul>
                {data.populationCounts.map((count, countIndex) => (
                  <li key={countIndex}>
                     {count.year + ' -> ' + count.value + ' ' +count.sex},
                  </li>
                ))}
              </ul>
            </td>
          </tr>
        ));
      } else {
        return (
          <tr>
            <td colSpan="4">No data available</td>
          </tr>
        );
      }
    };
  
    return (
      <div className='pa2 ma2'>
        <Table striped bordered hover variant="dark" className='outline pa3 w-100 fw9 light-red'>
          <thead>
            <tr>
              <th>City</th>
              <th>Population Counts</th>
            </tr>
          </thead>
          <tbody>
            {renderTableRows()}
          </tbody>
        </Table>
      </div>
    );
  };
  
  export default TableCountryStats;
  
{/* 
        <div className='tc' style={{width:"100%", height:'300' }}>
            <ResponsiveContainer width="100%" height="100%">
                    <PieChart width={400} height={400}>
                    <Pie
                        dataKey="value"
                        startAngle={180}
                        endAngle={0}
                        data={data}
                        cx="50%"
                        cy="50%"
                        outerRadius={80}
                        fill="#8884d8"
                        label
                    />
                    </PieChart>
                </ResponsiveContainer>
        </div> */}