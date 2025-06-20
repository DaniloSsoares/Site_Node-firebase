// Import the functions you need from the SDKs you need
const { initializeApp, applicationDefault, cert } = require('firebase-admin/app')
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore')
const serviceAccount = require("./serviceAccountKey.json");


initializeApp({
  credential: cert(serviceAccount)
});

const db = getFirestore();

module.exports = db;
