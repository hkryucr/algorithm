const axios = require("axios");
export const fetchQuestions = axios.get("http://interview.workwhilejobs.com/quiz/questions")
  .catch((error) => {
    console.log(error);
  });
