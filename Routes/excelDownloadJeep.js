const express = require('express');
const app = express.Router();
const ExcelJS = require('exceljs');
const User = require('../Module/CounsellingDB');
app.get('/', async (req, res) => {
    try {
      const users = await User.find().lean().sort({'jeep':1});
  
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Users');
  
      // Add column headers
      worksheet.columns = [
        { header: 'Jeep Rank', key: 'jeep', width: 5 },
        { header: 'Student Name', key: 'studentName', width: 25 },
        { header: 'Father Name', key: 'fatherName', width: 25 },
        { header: 'Mother Name', key: 'motherName', width: 25 },
        { header: 'DOB', key: 'dob', width: 12},
        { header: 'First Choice', key: 'firstChoice', width: 15 },
        { header: 'Second Choice', key: 'secondChoice', width: 15 },
        { header: 'Third Choice', key: 'thirdChoice', width: 15 },
        { header: 'Fourth Choice', key: 'fourthChoice', width: 15 },
        { header: 'Year', key: 'year', width: 6 },
        { header: 'Gender', key: 'gender', width: 16 },
        { header: 'category', key: 'category', width: 12 },
        { header: 'Mobile Number', key: 'mobileNumber', width: 14 },
        { header: 'Email', key: 'email', width: 50 },
        { header: 'Aadhar Number', key: 'adharNumber', width: 15 },
        { header: 'State', key: 'state', width: 20 },
        { header: 'District', key: 'district', width: 24 },
        { header: 'Pincode', key: 'pincode', width: 8 },
      ];
  
      // Add rows
      worksheet.addRows(users);
  
      // Set the response header to indicate a file attachment
      res.setHeader(
        'Content-Type',
        'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
      );
      res.setHeader(
        'Content-Disposition',
        'attachment; filename=' + 'Counselling.xlsx'
      );
  
      await workbook.xlsx.write(res);
      res.status(200).end();
      
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while exporting the data');
    }
  });
  
module.export = app;