import { getAllGames, createGame, updateGame, deleteGame } from './games';

export async function GET(request, { params }) {
    try {
        const { id } = params;
        console.log(params);
        if (id) {
            const Game = await getGame(id);
            return new Response(JSON.stringify(Game), { status: 200 });
        } else {
            const Games = await getAllGames();
            return new Response(JSON.stringify(Games), { status: 200 });
        }
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error fetching products" }), { status: 500 });
    }
}

export async function POST(request) {
    try {
        const GameData = await request.json();
        const Game = await createGame(GameData);
        return new Response(JSON.stringify(Game), { status: 201 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error creating product" }), { status: 400 });
    }
}

export async function PUTCH(request, { params }) {

    console.log("here");
    try {
        const GameData = await request.json();
        const updatedGame = await updateGame(params.id, GameData);
        return new Response(JSON.stringify(updatedProduct), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error updating product" }), { status: 400 });
    }
}

export async function DELETE(request, { params }) {
    try {
        await deleteGame(params.id);
        return new Response(JSON.stringify({ message: "Product deleted" }), { status: 200 });
    } catch (error) {
        console.error(error);
        return new Response(JSON.stringify({ message: "Error deleting product" }), { status: 500 });
    }
}