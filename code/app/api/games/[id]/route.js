import { getGame, updateGame, deleteGame } from "../../repo/gamesRepo";

export async function GET(request, { params }) {
    try {
        const { id } = params;
        const game = await getGame(id);
        return new Response(JSON.stringify(game), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching game" }), { status: 500 });
    }
}

export async function PUT(request, { params }) {
    try {
        const { id } = params;
        const data = await request.json();
        const updatedGame = await updateGame(id, data);
        return new Response(JSON.stringify(updatedGame), { status: 200 });
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
