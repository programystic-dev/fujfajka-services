import * as functions from "firebase-functions/v1";

import {User} from "./models/User";
import {
  addUserToFirestore,
  deleteUserFromFirestore,
} from "./services/userService";

import {region} from "./admin";

export const createUserDocuments = functions
  .region(region)
  .auth.user()
  .onCreate(async (user) => {
    // Extract user data from Auth trigger
    const {uid, email} = user;

    // Create a new User object
    const newUser = new User({
      uid: uid,
      email: email || "",
    });

    try {
      // Add User document to Firestore
      await addUserToFirestore(newUser);
    } catch (error) {
      throw new functions.https.HttpsError(
        "internal",
        `Failed to create user documents: ${error}`
      );
    }
  });

export const deleteUserDocuments = functions
  .region(region)
  .auth.user()
  .onDelete(async (user) => {
    // Extract user data from Auth trigger
    const {uid} = user;

    try {
      // Delete User document from Firestore
      await deleteUserFromFirestore(uid);
    } catch (error) {
      throw new functions.https.HttpsError(
        "internal",
        `Failed to delete user documents: ${error}`
      );
    }
  });
