#!/bin/bash
npm install        
npm run build       
pm2 restart deriv
