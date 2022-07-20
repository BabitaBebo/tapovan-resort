const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@cluster0.omd1l.mongodb.net/${process.env.DB_NAME}?retryWrites=true&w=majority`,

  {
    useNewUrlParser: true,
    // useFindAndModify: false,
    useUnifiedTopology: true,
  },
  (error, data) => {
    if (error) {
      console.log("DB not Connected", error);
    }
    console.log("DB Connected successfully");
  }
);
