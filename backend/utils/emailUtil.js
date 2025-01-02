
// const nodemailer = require('nodemailer');

// const sendRegistrationEmail = async (recipientEmail) => {
//     try {
//         const transporter = nodemailer.createTransport({
//             host: 'smtp.gmail.com',
//             port: 587,
//             secure: false, // Use true for port 465 if needed
//             auth: {
//                 user: process.env.EMAIL, // Your Gmail address
//                 pass: process.env.EMAIL_PASSWORD, // Your App Password
//             },
//         });

//         const mailOptions = {
//             from: `"Wellnest" <${process.env.EMAIL}>`,
//             to: recipientEmail,
//             subject: 'Congratulations on Registering!',
//             text: 'Welcome to Wellnest! We are thrilled to have you on board as you embark on your fitness and wellness journey. Our platform is designed to help you achieve a balanced and healthy lifestyle with a variety of tools and resources tailored just for you.!',
//         };

//         await transporter.sendMail(mailOptions);
//         console.log('Registration email sent successfully!');
//     } catch (error) {
//         console.error('Error sending registration email:', error.message);
//         if (error.response) {
//             console.error('SMTP Response:', error.response);
//         }
//     }
// };

// module.exports = sendRegistrationEmail;
const nodemailer = require('nodemailer');

const sendRegistrationEmail = async (recipientEmail) => {
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false, // Use true for port 465 if needed
            auth: {
                user: process.env.EMAIL, // Your Gmail address
                pass: process.env.EMAIL_PASSWORD, // Your App Password
            },
        });

        const mailOptions = {
            from: `"Wellnest" <${process.env.EMAIL}>`,
            to: recipientEmail,
            subject: 'Congratulations on Registering!',
            text: `Welcome to Wellnest! We're thrilled to have you on board as you embark on your fitness and wellness journey. Our platform is designed to help you achieve a balanced and healthy lifestyle with a variety of tools and resources tailored just for you.

Here's a glimpse of what you can explore:

Meditation Page: Discover guided meditation sessions, breathing exercises, and relaxation techniques to enhance your mental clarity and reduce stress.

Nutrition Page: Access personalized meal plans, nutritional tips, and a library of healthy recipes to fuel your body and mind.

Workout Page: Whether you're a beginner or an experienced fitness enthusiast, explore a wide range of workouts tailored to help you meet your fitness goals.

User Profile: Create and customize your personal profile to track your wellness journey, access your favorite content, and stay connected.

Workout Journal: Log your daily workouts, set goals, and monitor your progress to stay motivated and consistent.

BMI Calculator: Quickly calculate your Body Mass Index (BMI) and receive tailored suggestions to better understand your health status.

We believe in your potential and are here to support you every step of the way. Start exploring and take the first step towards a healthier, happier you!

Feel free to reach out if you have any questions or need assistance. We're here to help!

Stay well,  
Team Wellnest 

Contact us:(https://wellnest04.netlify.app/contact)`
        };

        await transporter.sendMail(mailOptions);
        console.log('Registration email sent successfully!');
    } catch (error) {
        console.error('Error sending registration email:', error.message);
        if (error.response) {
            console.error('SMTP Response:', error.response);
        }
    }
};

module.exports = sendRegistrationEmail;
 