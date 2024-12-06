import multer, { memoryStorage } from "multer"

const storage= memoryStorage();
const singleUpload = multer({ storage: storage }).single("file");

export {singleUpload}

//  make storage
//  make upload function