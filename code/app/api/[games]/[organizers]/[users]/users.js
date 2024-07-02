import prisma from "@/app/util/prisma";

export async function getAllUsers() {
    return prisma.user.findMany({});
}

export async function getUser(id) {
    return prisma.user.findUnique({
        where: {
            id: id,
        },
        include: {
            registeredGames: true,
        },
    });
}

export async function createUser(data) {
    return prisma.user.create({
        data: data,
    });
}

export async function updateUser(id, data) {
    return prisma.user.update({
        where: {
            id: id,
        },
        data: data,
    });
}

export async function deleteUser(id) {
    return prisma.user.delete({
        where: {
            id: id,
        },
    });
}
