import React from 'react'
import cors from 'cors'

const allowCrossDomain = (req, res, next) => {
    res.header(`Access-Control-Allow-Origin`, `example.com`);
    res.header(`Access-Control-Allow-Methods`, `GET,PUT,POST,DELETE`);
    res.header(`Access-Control-Allow-Headers`, `Content-Type`);
    next();
  };

  
export default allowCrossDomain