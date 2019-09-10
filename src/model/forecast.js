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

const forecastModel = mongoose.model('forecast', ForecastSchema);

export default forecastModel;
