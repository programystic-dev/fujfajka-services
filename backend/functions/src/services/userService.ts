import {User} from "../models/User";
import {db} from "../admin";

export const userCollectionKey = "users";

/**
 * Adds a user to Firestore
 * @param {User} user - User object
 */
export const addUserToFirestore = async (user: User): Promise<void> => {
  try {
    await db
      .collection(userCollectionKey)
      .doc(user.uid)
      .set(user.toFirestoreObject());
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to add user to Firestore: ${error.message}`);
    } else {
      throw new Error(
        "Failed to add user to Firestore: Unknown error occurred"
      );
    }
  }
};

/**
 * Deletes a user from Firestore
 * @param {string} uid - User object
 */
export const deleteUserFromFirestore = async (uid: string): Promise<void> => {
  try {
    const userRef = db.collection(userCollectionKey).doc(uid);
    await db.recursiveDelete(userRef);
  } catch (error: unknown) {
    if (error instanceof Error) {
      throw new Error(`Failed to delete user from Firestore: ${error.message}`);
    } else {
      throw new Error(
        "Failed to delete user from Firestore: Unknown error occurred"
      );
    }
  }
};
