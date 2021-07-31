import { createRequire } from 'module';
const require = createRequire(import.meta.url);
require('dotenv').config();

const http = require('http');
// Express configuration
const express = require('express');
const app = express();

// Routes to publish
import recommendRoutes from './services/recommend';
app.use(recommendRoutes);

// app.use((req, res, next) => {
//     console.log('Setting up firebase connection middleware');
//     next();
// });

const server = http.createServer(app);

server.listen(3000);
