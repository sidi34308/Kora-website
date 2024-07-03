import { getAllUsers, createUser, updateUser, deleteUser, getUser } from '../repo/usersRepo';

export async function GET(request) {
    try {
        const Users = await getAllUsers();
        return new Response(JSON.stringify(Users), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching games" }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const data = await request.json();
        const newUser = await createUser(data);
        return new Response(JSON.stringify(newUser), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error creating game" }), { status: 500 });
    }
}
