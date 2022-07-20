const UserEnquiry = require("../models/userEnquiryModel");

module.exports = {
  UserEnquiry: async (req, res) => {
    try {
      const userDetails = new UserEnquiry({
        username: req.body.username,
        email: req.body.email,
        mobile: req.body.mobile,
        checkin: new Date(req.body.checkin),
        checkout: new Date(req.body.checkout),
        howManyPeopleTravel: req.body.howManyPeopleTravel,
      });
   
      console.log("hello");
      console.log(req.body);
     

      const result = await userDetails.save();
      console.log(req.body);
      
      return res.json({
        message:
          "Your enquiry processed successfully, team will connect you soon.",
        data: result,
        statusCode: 200,
      });
    } catch (error) {
      return res.json({
        message: "Please fill all the mendetory fields.",
        data: [],
        statusCode: 400,
      });
    }
  },
};
