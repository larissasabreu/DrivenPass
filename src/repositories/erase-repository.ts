import prisma from "../config/db";

export async function DeleteUserRepository (id: number) {
    const DeleteUser = prisma.users.delete({
        where: { id }
      })
      
    // const DeleteCredentials = prisma.credentials.delete({
    //   where: {
    //     user_id: id ,
    //   },
    // })

    // const transaction = await prisma.$transaction([DeleteUser, DeleteCredentials])
    return DeleteUser;
}