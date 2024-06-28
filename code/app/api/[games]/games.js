import prisma from "@/app/util/prisma";

export async function getAllGames() {
    return prisma.game.findMany({
    });
}

export async function getGame(id) {
    return prisma.game.findUnique({
        where: {
            id: id,
        },
        include: {
            registeredPlayers: true,
        },
    });
}

export async function createGame(data) {
    return prisma.game.create({
        data: data,
    });
}

export async function updateGame(id, data) {
    return prisma.game.update({
        where: {
            id: id,
        },
        data: data,
    });
}

export async function deleteGame(id) {
    return prisma.game.delete({
        where: {
            id: id,
        },
    });
}