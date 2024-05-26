const express = require('express');
const app = express();
const path=require('path');
const  bcrypt = require('bcrypt');
const ExcelJS = require('exceljs');
const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.json());
app.use(express.urlencoded({extended:false}));


// Set -- Template  Engine:--------------------------------------------[Start]---
app.set('view engine','hbs');
app.set('/views','./teachersLogin');
app.set('/views','./StudentRegistration');
app.set('/views','./Counselling');
app.set('/views','./HomePages');
// app.set('views', path.join(__dirname, 'views'));




// Static Folder and File Access-----------------------------------------[Start]----
app.use('/Public',express.static('Public'));

app.use('/Public/Style',express.static('Styles'));
app.use('/Public/Images',express.static('Images'));
app.use('/Public/Scripts',express.static('Scripts'));
app.use('/Public/FontFamilys',express.static('FontFamilys'));


// Counselling website Home & Teachers Page ----------------------------[Start]---
app.get('/',(req,resp)=>{
    resp.render('HomePages/home');
})

// const  sizeDB = require('./Module/');
app.get('/TeacherPage', async (req,reps)=>{
    // const  totalDocuments = 34;
    resp.render('HomePages/teachersHomePage');
})


// Teachers Login & Sign Up---------------------------------------------[Start]----

app.get('/SignIn',(req,res)=>{
    res.render('teachersLogin/signIn');
})
app.get('/LogIn',(req,res)=>{
    res.render('teachersLogin/login');
})

// teachers login & signIn routes:-----------

const teacherSignIn = require('./Routes/TeacherSignIn');
app.use('/',teacherSignIn);

const teacherLogIn = require('./Routes/TeacherLogin');
app.use('/',teacherLogIn);






// Student Details:[Start]--------------------------------------------------------

app.get('/StuDetails',(req,res)=>{
    res.render('StudentRegistration/StudentRegistrationForm');
})

const StuDetails = require('./Routes/StudentDetails');
app.use('/',StuDetails);


// Profile Searching: ------------------------------

const studentDB =require('./Module/StuRegData');

app.get('/ProfileSearch',(req,reps)=>{
    reps.render('StudentRegistration/ProfileSearch');
});
app.post('/Profiles',async (req,res)=>{
    const items = await studentDB.find({branch:req.body.branch,year:req.body.year});
    res.render('StudentRegistration/showStudentDetails', { items });
})

// Profile Search According to there Gender and Category:
app.get('/ProfileSearchGn',(req,reps)=>{
    reps.render('StudentRegistration/ProfileSearchGn');
});
app.post('/ProfilesGn',async (req,res)=>{
    const items = await studentDB.find({branch:req.body.branch,year:req.body.year,gender:req.body.gender,category:req.body.category});
    if(items){
        res.render('StudentRegistration/showStudentDetails', { items });
    }
})

// Show All Register Students----------------------------

app.get('/showStudentDetails', async (req, res) => {
    const items = await studentDB.find({}).sort({ "rollNumber":1});
    res.render('StudentRegistration/showStudentDetails', { items });
});



// Counselling-----------------------------------------------------[Start]---
const counsellingSt = require('./Routes/CounsellingDB');
app.use('/',counsellingSt);
app.get('/counsellingForm',(req,resp)=>{
    resp.render('Counselling/counsellingForm');
})

const counselling12DB = require('./Routes/counselling12DB');
app.use('/',counselling12DB);



// Show Counselling Student Application:---------------------------

const counsellingDB =require('./Module/CounsellingDB');
app.get('/showCounselling', async (req, resp) => {
    const items = await counsellingDB.find({}).sort({ "jeep":1});
    resp.render('Counselling/showCounselling', { items });
});

const counsellingTenthStudent =require('./Module/counselling12DB');

app.get('/studentSelection10', async (req, resp) => {
    const items = await counsellingTenthStudent.find({class10:req.body.class10}).sort({ "jeep":1});
    resp.render('Counselling/studentSelection', { items });
});

app.get('/studentSelection', async (req, resp) => {
  // const items = await counsellingDB.find({"class10":req.class10}).sort({ "jeep":1});
  const items = await counsellingTenthStudent.find({}).sort({ "jeep":1});

  resp.render('Counselling/studentSelection', { items });
});



// Counselling------------------------------------------------------------[End]---


// First Choice--------------------------------------------------------------------

app.get('/firstChoice',(req,reps)=>{
    reps.render('Counselling/firstChoice');
});
app.post('/firstChoiceSt',async (req,res)=>{
    const items= await counsellingDB.find({firstChoice:req.body.firstChoice, year:req.body.year}).sort({ "jeep":1});
    res.render('Counselling/showCounselling',{items});
})
app.get('/branchDisGn',(req,reps)=>{
    reps.render('Counselling/branchDisGn');
});
app.post('/branchGn',async (req,res)=>{
    const items= await counsellingDB.find({firstChoice:req.body.firstChoice, year:req.body.year , gender:req.body.gender,category:req.body.category,}).sort({ "jeep":1});
    res.render('Counselling/showCounselling',{items});
})






// Counselling Excel File Download Router:--------------------------------[Start]---



const User = require('./Module/CounsellingDB');
const TenthStudents = require('./Module/counselling12DB');
app.get('/export-counselling', async (req, res) => {
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

app.get('/export-counselling12', async (req, res) => {
    try {
      const users = await TenthStudents.find().lean().sort({'jeep':1});
      const workbook = new ExcelJS.Workbook();
      const worksheet = workbook.addWorksheet('Users');
  
      // Add column headers
      worksheet.columns = [
          { header: '10 %', key: 'class10', width: 6 },
        { header: '12 %', key: 'class12', width: 6 },
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
        'attachment; filename=' + 'Counselling12thStudents.xlsx'
      );
  
      await workbook.xlsx.write(res);
      res.status(200).end();
      
    } catch (err) {
      console.error(err);
      res.status(500).send('An error occurred while exporting the data');
    }
  });

app.get('/export-counselling10', async (req, res) => {
  try {
    const users = await User.find().lean().sort({'jeep':1});
    const workbook = new ExcelJS.Workbook();
    const worksheet = workbook.addWorksheet('Users');

    // Add column headers
    worksheet.columns = [
      { header: '10 %', key: 'class10', width: 6 },
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
      'attachment; filename=' + 'Counselling10thStudents.xlsx'
    );

    await workbook.xlsx.write(res);
    res.status(200).end();
    
  } catch (err) {
    console.error(err);
    res.status(500).send('An error occurred while exporting the data');
  }
});


// Counselling Excel File Download Router:--------------------------------[End]---



const port = process.env.PORT || 3000;
app.listen(port,()=>{
    console.log(`working on port number ${port}`);
})
