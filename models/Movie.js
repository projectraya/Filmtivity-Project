import mongoose from "mongoose";

const movieSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    movieId: {
        type: String,
        required: true,
        unique: true,
        trim: true
    },
    poster_path: {type: String},
    overview: {type: String},
    release_date: {type: String},
    vote_average: {type: Number},
    original_language: {type: String},
    savedBy[{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }]
        
}, { timestamps: true });
const Movie = mongoose.model('Movie', movieSchema);
export default Movie;