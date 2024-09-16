import RoomAvailabilty from "../models/availabiltyModel.js";

const storeRoomAvailability = async (req,res) => {
    const{date , availability} = req.body;

    try{
        let roomAvailability = await RoomAvailabilty.findOneAndUpdate(
            {date},
            {availability},
            {new: true , upsert: true}
        )
        res.json({success: true , message: {roomAvailability}})
    } catch(error){
        console.log(error)
        res.json({success: false , message: "error"})
    }

}

const getRoomAvailabilityInRange = async (req, res) => {
    const { startDate, endDate } = req.query;
  
    try {
      const roomAvailabilities = await RoomAvailabilty.find({
        date: {
          $gte: startDate,
          $lte: endDate,
        },
      });
  
      res.json({success: true , message: {roomAvailabilities}});
    } catch (error) {
      res.status(500).json({ error: "An error occurred while fetching availability data" });
    }
  };

  export {storeRoomAvailability , getRoomAvailabilityInRange}