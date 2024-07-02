import { getAllOrganizers,getOrganizer, createOrganizer, updateOrganizer, deleteOrganizer } from './organizers';

export async function GET(request, { params }) {
    try {
        // const { id } = params;
        // if (id) {
        //     if (id!='organizer') {
        //         console.log('id')
        //         const organizer = await getOrganizer(id);

        //         return new Response(JSON.stringify(organizer), { status: 200 });
        //     } else {
        //         return new Response(JSON.stringify({ message: "Organizer not found" }), { status: 404 });
        //     }
        // } else {
            const organizers = await getAllOrganizers();
            return new Response(JSON.stringify(organizers), { status: 200 });
        
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching organizers" }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const organizerData = await request.json();
        const organizer = await createOrganizer(organizerData);
        return new Response(JSON.stringify(organizer), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error creating organizer" }), { status: 400 });
    }
}

export async function PUT(request, { params }) {
    try {
        const organizerData = await request.json();
        const updatedOrganizer = await updateOrganizer(params.id, organizerData);
        return new Response(JSON.stringify(updatedOrganizer), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error updating organizer" }), { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await deleteOrganizer(params.id);
        return new Response(JSON.stringify({ message: "Organizer deleted" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error deleting organizer" }), { status: 500 });
    }
}
