import { getAllUsers, createUser, updateUser, deleteUser, getUser } from '../../repo/usersRepo';

export async function GET(request, { params }) {
    try {   
        const { id } = params;
        const user = await getUser(id);
        return new Response(JSON.stringify(user), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching game" }), { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const updatedUser = await updateUser(id, data);
        return new Response(JSON.stringify(updatedUser), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error updating game" }), { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await deleteGame(id);
        return new Response(null, { status: 204 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error deleting game" }), { status: 500 });
    }
}
