// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
    console.log(Object.entries(req.body));
 
    let data =  await fetch(`https://api.foodchoo.com/api/v1/common/press-queries`, {
        method: 'POST',
        body: {...req.body}
    })
    data = await data.json();
    res.status(200).json({data})
 }
 