require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const fs = require('fs');
const multer = require('multer');

const upload = multer(); // Initialize multer

/* enable cors on localhost */
app.use(cors());

// Read the contents of the "api" folder
const apiPath = path.join(__dirname, 'mocks');
const apiFolders = fs.readdirSync(apiPath);

// Dynamically create routes for each folder
apiFolders.forEach(folder => {
  const route = folder.toLowerCase();
  const jsonPath = path.join(apiPath, folder, 'index.json');

  app.get(`/mocks/${route}`, (req, res) => {
    try {
      const jsonData = require(jsonPath);
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: { message: 'Unable to parse the response. Reject code:[200]' } });
    }
  });

  app.post(`/api/${route}`, upload.none(), (req, res) => {
    try {

      /* check if the url is firebase, then require token  */
      if (req.originalUrl === "/api/getFirebaseAuth/") {
        if (req.body.token === "123456789") {
          console.log("lalu sini tak");
          const jsonData = require(jsonPath);
          return res.json(jsonData);
        } else {
          return res.json({ error: { title: res.statusCode ,message: "token missing" } })
        }
      }

      // If the conditions are not met, continue with the default logic
      const jsonData = require(jsonPath);
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: { message: `Unable to parse the response. Reject code:[${res.statusCode}]` } });
    }
  });



});

// Read the contents of the "api/pages" directory
const pagePath = path.join(__dirname, 'mcoks/pages');
const pageFolders = fs.readdirSync(pagePath);

// Dynamically create routes for each page folder
pageFolders.forEach(folder => {
  const route = folder.toLowerCase();
  const jsonPath = path.join(pagePath, folder, 'index.json');

  app.get(`/mocks/pages/${route}`, (req, res) => {
    try {
      const jsonData = require(jsonPath);
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: { message: 'Unable to parse the response. Reject code:[200]' } });
    }
  });
});

/* Admin Path */
const adminPath = path.join(__dirname, 'mocks/admin');
const adminFolders = fs.readdirSync(adminPath);

// Dynamically create routes for each page folder
adminFolders.forEach(folder => {
  const route = folder.toLowerCase();
  const jsonPath = path.join(adminPath, folder, 'index.json');

  app.get(`/mocks/admin/${route}`, (req, res) => {
    try {
      const jsonData = require(jsonPath);
      res.json(jsonData);
    } catch (error) {
      res.status(500).json({ error: { message: 'Unable to parse the response. Reject code:[200]' } });
    }
  });
});

const port = process.env.PORT || 3000;


app.listen(port, () => {
  console.log(`/////////////////////////////////////////////////`);
  console.log(`Server Initated. Goodluck ;)`);
  console.log(`Server Port : [${port}]`);
  console.log(`/////////////////////////////////////////////////`);
});
