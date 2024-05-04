import mongoose from "mongoose";

const donorSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  address:
  {
    type: String,
    required: true
  }, 
  fatherName: {
    type: String,
    required: true
  },
  occupation: {
    type: String,
    required: true
  },
  contactNumber: {
    type: String,
    required: true
  },
  CNICNO: {
    type: String,
    required: true
  },
  imageUrl: String
});

const transactionSchema = new mongoose.Schema({
  txId: {
    type: String,
    required: true
  },
  user: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  cost: {
    type: Number,
    required: true
  }
});

const studentSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true
    },
    fatherName: {
      type: String,
      required: true
    },
    class: {
      type: String,
      required: true
    },
    Fees: {
      type: Number,
      required: true
    },
    RegistrationNumber: {
      type: String,
      required: true
    },
    Age: {
      type: Number,
      required: true
    },
    Email: {
      type: String,
      required: true
    },
    Address: {
      type: String,
      required: true
    },
    PhoneNumber: {
      type: String,
      required: true
    },
    city: {
      type: String,
      required: true
    },
    zipcode: {
      type: String,
      required: true
    },
    institution: {
      type: String,
      required: true
    },
    id: {
      type: String,
      required: true
    }
  });

  const iflstatistics= new mongoose.Schema({
    chitral: Number,
    ghanche: Number,
    Gilgit :Number,
    skardu: Number,
    Hunza: Number,
    Yaseen: Number,
    astore: Number,
  });

  const faqSchema = new mongoose.Schema({
    question: {
      type: String,
      required: true
    },
    answer: {
      type: String,
      required: true
    }
  });
  
  const FAQ = mongoose.model("FAQ", faqSchema);

const Donor = mongoose.model("Donor", donorSchema);
const Transaction = mongoose.model("Transaction", transactionSchema);
const StudentDetails = mongoose.model("StudentDetails", studentSchema);
const statistics = mongoose.model("IFLstatistics", iflstatistics)

export { Donor, Transaction, StudentDetails, statistics, FAQ };