// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    const {center, radius, type} = req.query;
    
   let data = await fetch(`https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=${center}&${type ? '&type='+type : ''}&rankby=distance&sensor=true&key=AIzaSyAVwyKaZ6NFVTM5kVpAGElJKFfND5pH8yk`)
    data = await data?.json();

    if(data.status === "OK"){
        const response = data.results?.map(r => r?.geometry?.location)
        res.status(200).json({data: response})
    } else {
        res.status(200).json({data: data.results})
    }
 
 }
 