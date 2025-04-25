import 'dotenv/config';

const secret = {
    key: String(process.env.SECRET)
}

export default secret;