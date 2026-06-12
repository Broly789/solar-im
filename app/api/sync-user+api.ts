import { StreamChat } from 'stream-chat';
const API_KEY = process.env.EXPO_PUBLIC_STREAM_API_KEY!
const SECRET_KEY = process.env.STREAM_SECRET_KEY

export async function POST(request: Request) {
    const client = StreamChat.getInstance(API_KEY, SECRET_KEY);
    const { userId, name, image } = await request.json();
    if (!userId) {
        return Response.json({ message: 'userId is required' }, { status: 400 });
    }

    try {
        await client.upsertUser({
            id: userId,
            name: name || "Guest", // name is optional
            image: image,
        })
     
        return Response.json({ success: true, userId, message: 'User synced successfully' });
    } catch (error) {
        return Response.json({ message: 'Error syncing user' }, { status: 500 });
    }
}
   