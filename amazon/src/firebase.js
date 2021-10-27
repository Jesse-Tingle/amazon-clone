import firebase from "firebase"

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
	apiKey: "AIzaSyDX-drxtVskkwppqf7RrMYXGaMiVPSKD44",
	authDomain: "clone-a51b4.firebaseapp.com",
	projectId: "clone-a51b4",
	storageBucket: "clone-a51b4.appspot.com",
	messagingSenderId: "859117498054",
	appId: "1:859117498054:web:396276e290666b436cf1c7",
	measurementId: "G-W5Q0WFEDVV",
}

const firebaseApp = firebase.initializeApp(firebaseConfig)

const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth }
