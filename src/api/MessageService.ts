import axios, {AxiosResponse} from 'axios'

export default class MessageService {
    static async createMessage(message: string, passphrase: string, duration: number): Promise<AxiosResponse> {
        return await axios.post('http://localhost:5000/messages/create', {message, passphrase, duration}, {})
    }

    static async decryptMessage(url: string, passphrase: string): Promise<AxiosResponse> {
        return await axios.post('http://localhost:5000/messages/decrypt/' + url, {passphrase})
    }

    static async validateMessageId(url: string): Promise<AxiosResponse> {
        return await axios.get('http://localhost:5000/messages/validate/' + url)
    }
}