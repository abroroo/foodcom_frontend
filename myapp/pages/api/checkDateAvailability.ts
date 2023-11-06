// pages/api/checkAvailability.js
// import checkDateAvailiability from '../../utils/checkDate'


export default function handler(req : any, res: any) {
    const { date } = req.query;
  
    // TODO: Check if the date is available in your backend database
    //const available = checkAvailability(date);
  
    res.status(200).json({ });
  }
  