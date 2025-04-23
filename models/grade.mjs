// Grade Schema
const gradeSchema = new mongoose.Schema({
    learner_id: Number,
    class_id: Number,
    scores: [
      {
        type: { String },
        score: Number
      }
    ]
  });
  
  export default mongoose.model("Grade", gradeSchema);
  