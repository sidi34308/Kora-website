
import { getAllOrganizers, getOrganizer, createOrganizer, updateOrganizer, deleteOrganizer } from '../../repo/organizersRepo';

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const organizer = await getOrganizer(id);
        return new Response(JSON.stringify(organizer), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching game" }), { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const updatedOrganizer = await updateOrganizer(id, data);
        return new Response(JSON.stringify(updatedOrganizer), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error updating game" }), { status: 500 });
    }
}

export async function DELETE(request, { params }) {
    try {
        const { id } = params;
        await deleteOrganizer(id);
        return new Response(null, { status: 204 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error deleting organizer" }), { status: 500 });
    }
}
