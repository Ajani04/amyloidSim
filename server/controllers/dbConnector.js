import mongoose from 'mongoose'

const connectDb = async (uri) => {
  try {
    await mongoose.connect(uri);
    console.log("\nSuccessfully connected to the amyloidSim database");
  } catch (e) {
    console.log(e.message);
  }
}

export {connectDb};