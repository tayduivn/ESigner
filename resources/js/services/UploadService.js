import axios from 'axios';

export default class UploadService {
    /**
     * Used to upload a document and create a document record in database
     * @param name
     * @param base64
     * @param signaturePositionId
     * @param width
     * @param height
     * @param numPages
     * @returns {Promise<any>}
     */
    static uploadDocument(name, base64, signaturePositionId, width, height, numPages) {
        return new Promise((resolve, reject) => {
            axios.post('/api/documents', {
                name: name===''?'Please sign the document':name,
                base64: base64,
                signature_position_id: signaturePositionId,
                width: width,
                height: height,
                numPages: numPages
            }).then(response => {
                resolve(response.data);
            }).catch(reason => {
                reject(reason);
            });
        });
    }
}