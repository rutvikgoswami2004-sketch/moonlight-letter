const sky = document.getElementById("sky");

// ⭐ Create Stars
for (let i = 0; i < 300; i++) {

    let star = document.createElement("div");

    star.className = "star";

    let size = Math.random() * 3;

    star.style.width = size + "px";

    star.style.height = size + "px";

    star.style.left = Math.random() * 100 + "vw";

    star.style.top = Math.random() * 70 + "vh";

    star.style.animationDelay = Math.random() * 2 + "s";

    sky.appendChild(star);

}

// 📩 Envelope
const envelope = document.getElementById("envelope");

// ✍️ Letter
const message = `Dear Anjani,

Happy Friendship Day. 💛

Some letters are written to begin a conversation.

This one is simply written to bring a smile.

Life changes routines, conversations and distances.

But it never erases the value of people who once made ordinary days brighter.

Thank you for every smile, every conversation and every memory we shared.

I don't expect anything from this letter.

I simply wanted to wish you happiness, peace, success and countless reasons to smile.

No matter where life takes us,

I'm grateful our paths crossed.

Happy Friendship Day, Anya. 🌙

Keep shining... always.

— Rutvik`;

function typeWriter() {

    const target = document.getElementById("typed");

    target.textContent = "";

    let i = 0;

    function type() {

        if (i < message.length) {

            target.textContent += message.charAt(i);

            i++;

            setTimeout(type, 28);

        }

    }

    type();

    const music = document.getElementById("bgMusic");

    if (music) {

        music.play().catch(() => {});

    }

}

envelope.onclick = () => {

    envelope.classList.add("open");

    typeWriter();

};
