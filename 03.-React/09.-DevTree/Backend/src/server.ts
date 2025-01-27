// const express = require('express');  // CommonJS

import express from 'express'; // ES6
import 'dotenv/config';
import router from './router';
import { connectDB } from './config/db';

const app = express();

// leer datos formularios
app.use(express.json());

connectDB();

// Routing
app.use('/api',router);


export default app;