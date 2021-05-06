function makeFriendsList(friends) {
  let ul = document.createElement("ul");
  let html = "";
  for (let user of friends) {
    const { firstName, lastName } = user;
    html += `
    <li>${firstName} ${lastName}</li>
    `;
  }
  ul.innerHTML = html;
  return ul;
}
