(function () {
  var calm = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  // Falling emoji confetti
  function confetti(list) {
    if (calm) return;
    for (var i = 0; i < 28; i++) {
      var s = document.createElement('span');
      s.className = 'bit';
      s.textContent = list[i % list.length];
      s.style.left = (Math.random() * 95) + 'vw';
      s.style.animationDuration = (2 + Math.random() * 2) + 's';
      s.style.animationDelay = (Math.random() * 0.6) + 's';
      document.body.appendChild(s);
      setTimeout(function (el) { el.remove(); }, 5000, s);
    }
  }

  // "Do you forgive me?" buttons
  var yes = document.getElementById('yes');
  var no = document.getElementById('no');
  var ans = document.getElementById('answer');
  var btns = document.getElementById('btns');
  var noLines = ["Are you sure? 🥺", "Pretty please?", "I'll bring snacks 🍫", "Last chance… 😭"];
  var n = 0;

  no.addEventListener('click', function () {
    n++;
    if (n > noLines.length) {
      no.remove();
      ans.textContent = "Okay, the 'No' button gave up. 😌";
      return;
    }
    no.textContent = noLines[n - 1];
    yes.style.transform = 'scale(' + (1 + n * 0.18) + ')';
    btns.style.gap = (0.7 + n * 0.35) + 'rem';
  });

  yes.addEventListener('click', function () {
    ans.textContent = "Yay!! Thank you, love. 🥹💗 I'll make it up to you.";
    no.style.display = 'none';
    confetti(['💗', '✨', '🌸', '🍫', '💖']);
  });

  // Exam pep talks
  var peps = [
    "You know more than you think you do. Trust your brain. 🧠",
    "One question at a time. That's all it takes. 💪",
    "Breathe in, breathe out. You've handled harder things. 🌬️",
    "Even if a question is tricky, you can still figure it out. ✨",
    "Whatever happens tomorrow, I'm proud of you already. 💗",
    "Future you is going to be so happy this is finished. 🎉"
  ];
  var p = 0;
  var pep = document.getElementById('pep');

  document.getElementById('pepbtn').addEventListener('click', function () {
    pep.textContent = peps[p % peps.length];
    p++;
    confetti(['⭐', '✨', '📚']);
  });
})();