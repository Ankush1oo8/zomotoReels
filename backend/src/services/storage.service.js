const ImageKit=require("imagekit");

const imagekit=new ImageKit({
    publicKey:process.env.IMAGEKIT_PUBLIC_KEY,
    privateKey:process.env.IMAGEKIT_PRIVATE_KEY,
    urlEndpoint: process.env.IMAGEKIT_URL_ENDPOINT
})

//we can add extension array with saving the file and file but
//file and fileName are required field to save the video
async function uploadFile(file,fileName){
    const res=await imagekit.upload({
        file:file,  //required
        fileName:fileName //required
    })

    return res.url; //want just url to save in mongoDB 
}

module.exports={
    uploadFile
}