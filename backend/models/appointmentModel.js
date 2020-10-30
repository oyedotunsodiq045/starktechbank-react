import mongoose from 'mongoose'
const Schema = mongoose.Schema;

const appointmentSchema = new Schema({
  date: {
    type: Date,
    required: [true, 'Please add a date']
  },
  location: {
    type: String,
    required: [true, 'Please add a location']
  },
  description: {
    type: String,
    required: [true, 'Please add a description'],
    maxlength: [500, 'Description can not be more than 500 characters']
  },
  isConfirmed: {
    type: Boolean,
    default: true
  },
  // createdAt: {
  //   type: Date,
  //   default: Date.now,
  // },
  userRef: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
}, {
  timestamps: true
});

// 1 user to 1 appointment
// AppointmentSchema.index({
//   _id: 1,
//   user: 1
// }, {
//   unique: true
// });

const Appointment = mongoose.model('Appointment', appointmentSchema);

export default Appointment