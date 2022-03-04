import { ref, onValue, push, update, get } from "firebase/database";
// import { getDatabase, ref, onValue } from "firebase/database";
import { db } from "../db/firebase-config";
// const messagesRef = ref(db, "teams/");
// export function writeUserData() {
//   // 새로운 id 생성하기
//   const newMsgID = push(messagesRef).key;
//   // update(ref(db, 'teams/' + ID + '/messages/' + newMsgID), {text: input, user: currentUser.displayName, date: new Date()})
//   const updates = {};
//   // json형식으로 만들어서 updates json에 넣기
//   updates["lastMessage"] = { text: 1, user: 2 };
//   updates["/messages/" + newMsgID] = {
//     text: 1,
//     user: 2,
//     date: new Date(),
//   };
//   // 저db에 저장하기
//   update(ref(db, "teams/"), updates);
// }

export function getNewMessage(newData) {
  const starCountRef = ref(db, "teams/messages");
  onValue(starCountRef, (snapshot) => {
    const data = snapshot.val();
    console.log(data);
  });
}

export const getMessages = () => {
  const messagesRef = ref(db, "teams/messages");
  onValue(messagesRef, (snapshot) => {
    snapshot.forEach((childSnapshot) => {
      const childKey = childSnapshot.key;
      const childData = childSnapshot.val();
      console.log(childKey, childData);
    });
    // const data = snapshot.val();
    // console.log(data);
  });
};

export const addMessage = (text = "new text123", user = "han") => {
  console.log("addMessage");
  const messagesRef = ref(db, "teams/messages");
  const newMsgID = push(messagesRef).key;
  const updates = {};
  updates["lastMessage"] = { text, user };
  updates["/messages/" + newMsgID] = {
    text,
    user,
    date: new Date(),
  };
  update(ref(db, "teams/"), updates);
};
