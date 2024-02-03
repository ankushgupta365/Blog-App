const router = require("express").Router();
const Questions = require("../models/Questions");
const sendEmail = require("./emailSendgrid");


//post question
router.post("/", async (req, res) => {
  const question = new Questions(req.body);
  try {
    const savedQuestion = await question.save();
    const dynamicTemplateData = {
        email: req.body.email,
        query: req.body.query
    }
    await sendEmail('ankushgupta0365@gmail.com', "New question on your blog","d-bc6cd961686a4562b5b968aeb0bbb518", dynamicTemplateData)
    res.status(200).json(savedQuestion);
  } catch (err) {
    res.status(500).json(err.message);
  }
});


//answer question
router.post("/answer", async(req,res)=>{
    try {
        await Questions.findOneAndUpdate({_id: req.body.questionId}, {
            answer: req.body.answer
        })
        res.status(201).json({msg: "question answered successfully"})
    } catch (error) {
        res.status(500).json(error.message)
    }
})


//get all the questions
router.get("/", async (req, res) => {
    try {
      const questions = await Questions.find().sort({createdAt: -1});
      res.status(200).json(questions);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;
