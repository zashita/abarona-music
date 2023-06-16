import * as uuid from 'uuid'
import * as path from 'path'
import {deleteFile} from "express-fileupload/lib/utilities.js";

class FileService{
    saveFile(file, type){
        try{
            const fileType = type === 1? 'audio': 'image'
            const ext = type === 1? '.mp3': '.jpeg';
            const fileName = uuid.v4() + ext;
            const filePath = path.resolve(`static/${fileType}`, fileName)
            file.mv(filePath)
            return fileType + '/' + fileName;
        }catch (e){
            console.log(e)
        }


    }
    deleteFile(fileName){
        try{
            const filePath = path.resolve(`static/`, fileName);
            deleteFile(filePath, () => {console.log('file deleted')})


        } catch (e) {
            console.log(e)

        }
    }
}

export default new FileService();
