 
import { getAllOrganizers, getOrganizer, createOrganizer, updateOrganizer, deleteOrganizer } from '../repo/organizersRepo';



export async function GET(request) {
    try {
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