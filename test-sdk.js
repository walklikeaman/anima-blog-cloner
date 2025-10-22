require('dotenv').config();
const { Anima } = require('@animaapp/anima-sdk');

const anima = new Anima({
  auth: {
    token: process.env.ANIMA_API_KEY,
  },
});

async function testSDK() {
  try {
    console.log('Testing Anima SDK...');
    console.log('Available methods:', Object.getOwnPropertyNames(Anima.prototype));
    
    // Try to get more info about the generateCodeFromWebsite method
    console.log('generateCodeFromWebsite method:', anima.generateCodeFromWebsite.toString());
    
  } catch (error) {
    console.error('Error:', error.message);
  }
}

testSDK();
