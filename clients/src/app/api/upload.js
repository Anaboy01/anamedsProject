// import { v2 as cloudinary } from 'cloudinary';



// import cloudinary from '../lib/cloudinary';

// const upload_preset = process.env.NEXT_PUBLIC_CLOUDINARY_UPLOAD_PRESET



// export default async function handler(req, res) {
//   if (req.method === 'POST') {
//     try {
//       const { image } = req.body;
//       const uploadResponse = await cloudinary.uploader.upload(image, {
//         folder: 'medFile',
//         upload_preset: 'anate'
//       });

//       res.status(200).json({ url: uploadResponse.secure_url });
//     } catch (error) {
//       res.status(500).json({ error: 'Error uploading image' });
//     }
//   } else {
//     res.status(405).json({ error: 'Method not allowed' });
//   }
// }
