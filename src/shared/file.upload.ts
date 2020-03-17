import { extname } from 'path';
import { uuid } from 'uuidv4';

// Filter files by extension
export const imageFileFilter = (req, file, callback) => {
    if(!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return callback(new Error('Only image files allowed'), false);
    }
    callback(null, true);
}

// Unique name for file
export const editFileName = (req, file, callback) => {
    const fileExtName = extname(file.originalname); // extension
    const randomName = uuid(); // 121 55415 21 
    callback(null, `${randomName}${fileExtName}`); // 4545.jpg
}