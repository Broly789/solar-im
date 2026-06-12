import { StreamChat } from 'stream-chat';
const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY!
const SECRET_KEY = process.env.STREAM_SECRET_KEY

export async function POST(request: Request) {
    const client = StreamChat.getInstance(API_KEY, SECRET_KEY);
    const { userId } = await request.json();
    if (!userId) {
        return Response.json({ message: 'userId is required' }, { status: 400 });
    }
    const token = client.createToken(userId);
    return Response.json({ token, userId });
}

export async function GET(request: Request) {
    return Response.json({ message: 'Hello API' });
}