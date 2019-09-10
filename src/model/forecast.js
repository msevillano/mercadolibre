import mongoose from 'mongoose';

const ForecastSchema = new mongoose.Schema({
  day: {
    type: Number,
    index: true,
    unique: true,
  },
  forecast: {
    type: String,
    required: true,
  },
});

let forecastModel;
try {
  forecastModel = mongoose.model('forecast');
} catch (error) {
  forecastModel = mongoose.model('forecast', ForecastSchema);
}

export default forecastModel;
