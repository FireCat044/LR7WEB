document.addEventListener("DOMContentLoaded", function () {
    const body = document.querySelector("body");

    const container = document.createElement("div");
    container.className = "magic-ball-container";

    const h1 = document.createElement("h1");
    h1.textContent = "Магічна куля";
    container.appendChild(h1);

    const p = document.createElement("p");
    p.textContent = "Задайте своє питання:";
    container.appendChild(p);

    const input = document.createElement("input");
    input.type = "text";
    input.placeholder = "Напишіть питання...";
    container.appendChild(input);

    const answerDiv = document.createElement("div");
    answerDiv.id = "answer";
    container.appendChild(answerDiv);
    
    const magicBall = document.createElement("img");
    magicBall.style.width = "700px";
    magicBall.style.zIndex = -1;
    magicBall.style.height = "550px";
    magicBall.src = "magic-ball.png";
    magicBall.alt = "Magic ball";
    magicBall.id = "magic-ball";
    magicBall.style.cursor = "pointer";
    const container1 = document.querySelector('#image-container');
    container.append(magicBall);
    
    body.appendChild(container);
    answerDiv.textContent = "Відповідь: "


    magicBall.addEventListener("click", function(){
        const question = input.value.trim();

        if (question !== "") {
            const answers = [
                "Так",
                "Ні",
                "Можливо",
                "Не впевнений",
                "Поговори знову пізніше",
                "Сконцентруйся та спробуй знову"
            ];

            const randomIndex = Math.floor(Math.random() * answers.length);
            const randomAnswer = answers[randomIndex];

            answerDiv.textContent = "Відповідь: " + randomAnswer;

            input.value = "";
        } else {
            answerDiv.textContent = "Будь ласка, поставте питання.";
        }
    });
});
