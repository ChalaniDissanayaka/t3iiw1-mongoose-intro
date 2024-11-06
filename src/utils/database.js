const mongoose = require("mongoose");
const { PostModel } = require("../models/PostModel");
const { UserModel } = require("../models/UserModel");

// Function to connect to whatever DB our environment variable says to connect to 
async function dbConnect(){
	// console.log(process.env.DATABASE_URL);
	// Connection to cloud database if not provided connect to localhost
	// let databaseUrl = process.env.DATABASE_URL || `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;
	// Only connection to localhost
	let databaseUrl = `mongodb://127.0.0.1:27017/${process.env.npm_package_name}`;

	console.log(databaseUrl);

	await mongoose.connect(databaseUrl);
}

async function dbDisconnect(){
	// await mongoose.disconnect()
	// Graceful disconnect from MongoDB
	await mongoose.connection.close();
}

async function dbDrop(){
	await mongoose.connection.db.dropDatabase();
}

module.exports = {
	dbConnect, dbDisconnect, dbDrop
}