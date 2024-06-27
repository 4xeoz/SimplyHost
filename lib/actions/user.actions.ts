'use server'

import { revalidatePath } from 'next/cache'

import { connectToDatabase } from '@/lib/mongodb/database'
import User from '@/lib/mongodb/database/models/user.model'
import Order from '@/lib/mongodb/database/models/order.model'
import Event from '@/lib/mongodb/database/models/event.model'
import { handleError } from '@/lib/utils'

import { CreateUserParams, UpdateUserParams } from '@/types'


export const createUser = async (user: CreateUserParams) => {
    try {
        await connectToDatabase();
        const newUser = await User.create(user);
        return JSON.parse(JSON.stringify(newUser));

    } catch (error) {
        handleError(error)

    }

}

export const updateUser = async (clerkId: string, user: any) => {

    try {
        await connectToDatabase();
        const updatedUSer = await User.findByIdAndUpdate(clerkId, user, { new: true });

        if (!updatedUSer) {
            throw new Error('User could not be updated');
        }
        return JSON.parse(JSON.stringify(updatedUSer));
    } catch (error) {
        handleError(error)

    }

}

export const deleteUser = async (id: string) => {
    try {
        await connectToDatabase();
        // find user to delete

        const userToDelete = await User.findById({ clerkId: id });

        if (!userToDelete) {
            throw new Error('User not found');
        }

        // Unlink relationships
        await Promise.all([
            // Update the 'events' collection to remove references to the user
            Event.updateMany(
                { _id: { $in: userToDelete.events } },
                { $pull: { organizer: userToDelete._id } }
            ),

            // Update the 'orders' collection to remove references to the user
            Order.updateMany({ _id: { $in: userToDelete.orders } }, { $unset: { buyer: 1 } }),
        ])

        // Delete user
        const deletedUser = await User.findByIdAndDelete(userToDelete._id)
        revalidatePath('/')

        return deletedUser ? JSON.parse(JSON.stringify(deletedUser)) : null
    } catch (error) {
        handleError(error)

    }
}