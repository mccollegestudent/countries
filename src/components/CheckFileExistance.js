import React from 'react';  

  const CheckFileExistance = async (filePath) =>{
    try {
        const response = await fetch(filePath.flag);
    
        if (response.status === 404) {
        //   console.log(`File not found: ${filePath}`);
          return false;
        } else if (!response.ok) {
        //   console.error(`Error checking file existence. Status: ${response.status}`);
          return false;
        } else {
        //   console.log(`File exists: ${filePath}`);
          return true;
        }
      } catch (error) {
        // console.error('Error checking file existence:', error);
        return false;
      }
  }
export default CheckFileExistance;
