function problem7(user, friends, visitors) {
  const userName = user;
  const allUserList = friends.flat().filter(arr => arr !== userName);
  const delDupUserList = [...new Set([...new Set(allUserList), ...new Set(visitors)])].filter(
    arr => arr !== userName
  );

  // 점수 리스트
  const userPointList = Object.assign({}, ...delDupUserList.map((key, i) => ({[key]: 0})));
  // friends 점수 +10
  for (let friends of allUserList) {
    userPointList[friends] += 10;
  }
  // visitors 점수 +1
  for (let visitor of visitors) {
    userPointList[visitor] += 1;
  }

  // user의 친구 구하기
  let myFriends = [];
  for (let a of friends) {
    if (a[0] === userName) {
      myFriends.push(a[1]);
    }
    if (a[1] === userName) {
      myFriends.push(a[0]);
    }
  }
}

module.exports = problem7;
