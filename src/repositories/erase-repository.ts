import prisma from "../config/db";

export async function DeleteUserRepository (id: number) {

    const DeleteUser =  prisma.users.delete({
        where: { id }
      })
      
    const DeleteCredentials =  prisma.credentials.deleteMany({
      where: { user_id:  id },
    })

    const transaction = await prisma.$transaction([DeleteCredentials, DeleteUser])
    return transaction;
}