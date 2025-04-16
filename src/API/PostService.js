export default class PostService {
    static async getAll() {
        try {
            const response = await fetch('https://jsonplaceholder.typicode.com/posts')
            const json = await response.json()
            return json
        } catch (e) {
            console.log(e)
        }
    }
}