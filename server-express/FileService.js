import * as uuid from 'uuid'
import * as path from 'path'

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
}

export default new FileService();
