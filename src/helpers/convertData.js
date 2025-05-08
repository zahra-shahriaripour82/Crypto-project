const convertData=(data,type)=>{
    const convertedData=data[type].map(item =>{
        return {
          data:item[0],
          [type]:item[1],

        };
    });
    console.log(convertedData);
    
       return convertedData
   
    
}

export {convertData};