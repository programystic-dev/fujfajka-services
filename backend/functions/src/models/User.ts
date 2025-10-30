type UserConstructor = {
  uid: string;
  email?: string;
};

/**
 * Represents a User.
 */
export class User {
  uid: string;
  email?: string;

  /**
   * Creates a new User instance.
   * @param {UserConstructor} params - The parameters to initialize the User.
   * @param {string} params.uid - The unique identifier for the user.
   * @param {string} params.email - The email address of the user.
   */
  constructor({uid, email}: UserConstructor) {
    this.uid = uid;
    this.email = email;
  }

  /**
   * Converts the User instance to a plain object suitable for Firestore.
   * @return {Object} Plain object representation of the User.
   */
  toFirestoreObject(): object {
    return {
      uid: this.uid,
      email: this.email || null,
    };
  }
}
