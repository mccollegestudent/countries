import React from'react';
import SimpleMap from '../containers/SimpleMap';
import { LoremIpsum } from 'react-lorem-ipsum';
import unknownFlag from './unknownFlag.jpg';
// import Table from 'react-bootstrap/Table';
import { Table } from 'react-bootstrap';

function infoTable() {
    return(
      <Table 
        striped bordered hover variant="dark"
        className='outline pa3 w-100'
      >
        <thead>
          <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
          </tr>
          {/* <tr>
            <td>3</td>
            <td colSpan={2}>Larry the Bird</td>
            <td>@twitter</td>
          </tr> */}
        </tbody>
      </Table>
    )
  }
const CountryInfo = () => {
    return(
        <div className='flex flex-column'>
            <div className='flex flex-column flex-row-l outline max-w-30 min-w-10 '> 
                <div className='flex flex-column pa3 mr2'>
                    <h1 className=''> America </h1>
                    <LoremIpsum p={1} />
                </div>

                <div className='flex flex-column'>
                    <img 
                        className='min-w-50 max-w-60'
                        src={unknownFlag} 
                        alt='flag'/>
                    <div>{infoTable()}</div>
                </div>
            </div>

            <div className='flex flex-column flex-row-l outline pa3 mr2'> 
                <SimpleMap/>
                <LoremIpsum p={1} />
            </div>

         
        
        </div>

    )
}

export default CountryInfo