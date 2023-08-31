import Mock from "mockjs";

export default function () {
  const state = {
    // current user
    user: {
      uid: 1,
      name: "Luna",
    },
    userMap: {},
    chatMap: {},
  };

  // generate random data
  this.init = function () {
    const mockCount = 10;
    const uids = new Array(mockCount).fill(0).map((i, idx) => idx + 1);
    uids.forEach((uid) => {
      const name = Mock.Random.name();

      state.chatMap[uid] = new Array(mockCount).fill(0).map(() => {
        const isMe = Mock.Random.integer(0, 1) === 1;
        return {
          from: isMe ? state.user.uid : uid,
          to: isMe ? uid : state.user.uid,
          name: isMe ? state.user.name : name,
          msg: Mock.Random.paragraph(2, 6),
          time: Mock.Random.time("HH:mm a"),
        };
      });

      const allBadges = ["medal", "strategist", "trader", "valour"];
      const badges = allBadges.filter((_) => Mock.Random.integer(0, 1) === 1);
      const chat = state.chatMap[uid] || [];
      const lastMsg = chat[chat.length - 1] || {};
      state.userMap[uid] = {
        uid,
        name,
        followers: Mock.Random.integer(0, 10000),
        instagram: Mock.Random.string("abcdefghijklmnopqrstuvwxyz", 5, 10),
        twitter: Mock.Random.string("abcdefghijklmnopqrstuvwxyz", 5, 10),
        domain: Mock.Random.domain(),
        bio: Mock.Random.paragraph(),
        badges: badges.length ? badges : allBadges[Mock.Random.integer(0, 3)],
        score: Mock.Random.integer(-20, 20),
        time: lastMsg.time,
        msg: lastMsg.msg,
        // avatar
      };
    });
  };

  this.getContacts = function () {
    return Object.values(state.userMap).filter(
      (item) => item.uid !== state.user.uid
    );
  };

  this.getUserByUid = function (uid) {
    if (!state.userMap[uid]) {
      console.error("user not exits", uid);
      return {};
    }
    return state.userMap[uid];
  };

  this.getChatByUid = function (uid) {
    if (!state.chatMap[uid]) {
      console.error("chat not exits", uid);
      return {};
    }
    return state.chatMap[uid] || {};
  };
}
