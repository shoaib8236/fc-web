// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
   const {origin, destination} = req.query;
try {
   let data = await fetch(`https://maps.googleapis.com/maps/api/directions/json?origin=${origin}&travelMode=driving&destination=${destination}&key=AIzaSyDDgBk0yQiffvk7Lu97jJ7jl9tmgkUTX4U&mode=driving&language=en&region=undefined`)
   data = await data.json();
   res.status(200).json({data: data})
   
} catch (error) {
   console.log('error', error)
   res.status(400).json({error})
}
}
