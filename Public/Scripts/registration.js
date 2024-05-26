



// function validateForm() {
//     e.preventDefault();
//     let errors = [];
//     let isValid = true;

//     const name = document.getElementById('name').value;
//     if (name.length < 3 || name.includes('@')) {
//         errors.push("Name must be at least 3 characters long.");
//         isValid = false;
//     }
    
//     const fatherName = document.getElementById('fname').value;
//     if (fatherName.length < 3 || fatherName.includes('@')) {
//         errors.push("Father Name must be at least 3 characters long.");
//         isValid = false;
//     }
        
//     const MatherName= document.getElementById('Mname').value;
//     if (MatherName.length < 3 || MatherName.includes('@')) {
//         errors.push("Mather Name must be at least 3 characters long.");
//         isValid = false;
//     }
        
//     const email = document.getElementById('email').value;
//     if (!email.includes('@')) {
//         errors.push("Email must be a valid email address.");
//         isValid = false;
//     }

//     const dob = document.getElementById('DoB').value;
//     if(dob>Date()){
//         errors.push("Invalid Date of Barth.");
//         isValid = false;
//     }
        
        
//     const rank = document.getElementById('roll').value;
//     if (roll.length==0) {
//         errors.push("Please Enter You Jeep Rank");
//         isValid = false;
//     }
    
//     const phone_number= document.getElementById('phone_number').value;
//     if (phone_number.length < 10) {
//         errors.push("InValid Mobile Number");
//         isValid = false;
//     }

//     if (!isValid) {
//         alert("Validation errors:\n" + errors.join("\n"));
//     }
//     if (errors.length > 0) {
//         alert("Validation errors:\n" + errors.join("\n"));
//         return false;
//     }
//     return true;
// }
