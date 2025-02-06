// const express = require('express');  // CommonJS

import express from 'express'; // ES6
import cors from 'cors';
import 'dotenv/config';
import router from './router';
import { connectDB } from './config/db';
import { corsOptions } from './config/cors';

connectDB();

const app = express();

// Cors
app.use(cors(corsOptions));

// leer datos formularios
app.use(express.json());


// Routing
app.use('/',router);


export default app;