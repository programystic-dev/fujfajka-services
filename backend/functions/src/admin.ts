import * as admin from "firebase-admin";

import * as fs from "fs";
import * as path from "path";

export const region = "europe-central2";

// const serviceAccountPath = path.join(
//   __dirname,
//   process.env.ENV === "production" ?
//     "serviceAccountKey.production.json" :
//     "serviceAccountKey.staging.json"
// );
const serviceAccountPath = path.join(
  __dirname,
  "serviceAccountKey.production.json"
);
const serviceAccount = JSON.parse(fs.readFileSync(serviceAccountPath, "utf8"));

// admin.initializeApp({
//   credential: admin.credential.cert(serviceAccount),
//   databaseURL:
//     process.env.ENV === "production"
//       ? "https://arcandemy-6aaee.firebaseio.com"
//       : "https://arcandemystaging.firebaseio.com",
// });
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://fujfajka.firebaseio.com",
});

export const db = admin.firestore();
