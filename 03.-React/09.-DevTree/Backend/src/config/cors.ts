import { white } from 'colors';
import {CorsOptions} from 'cors';

// console.log(process.argv)

export const corsOptions: CorsOptions = {
    origin: function (origin, callback) {
        const whitelist = [process.env.FRONTEND_URL];
        whitelist.push()

        if(process.argv[2]==='--api'){
            whitelist.push(undefined)
        }
        
        if(whitelist.includes(origin)){
            callback(null, true);
       }
           else{
                callback(new Error('Error de CORS'));
              }
        
    }
};