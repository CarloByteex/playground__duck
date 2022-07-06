// © 2022 Michael Kolesidis. All rights reserved.
// michael.kolesidis@gmail.com

export default function intro() {
  const intro = document.getElementById("intro");

  if (intro != null) {
    let whoami = document.createElement("p");
    whoami.innerText = `I'm Michael Kolesidis.(as you might have already guessed from the huge heading)`;
    intro.appendChild(whoami);

    let whatami = document.createElement("p");
    whatami.setAttribute("id", "right");

    whatami.innerText = `I am a Front-End Web Developer with a diverse background in computer science, economics and the arts. I enjoy being creative and inquisitive, learning and building exciting new things every day. I am passionate about solving problems, while creating innovative, engaging experiences using the appropriate tools and technologies.`;
    intro!.appendChild(whatami);
  }
}
