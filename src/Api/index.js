import { getDatabase, ref, onValue, push, update } from "firebase/database";
import { db } from "../db/firebase-config";
const messagesRef = ref(db, "teams/");
export function writeUserData() {
  // 새로운 id 생성하기
  const newMsgID = push(messagesRef).key;
  // update(ref(db, 'teams/' + ID + '/messages/' + newMsgID), {text: input, user: currentUser.displayName, date: new Date()})
  const updates = {};
  // json형식으로 만들어서 updates json에 넣기
  updates["lastMessage"] = { text: 1, user: 2 };
  updates["/messages/" + newMsgID] = {
    text: 1,
    user: 2,
    date: new Date(),
  };
  // 저db에 저장하기
  update(ref(db, "teams/"), updates);
}
