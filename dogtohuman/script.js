document.addEventListener("DOMContentLoaded", () => {
  document.querySelector("button").addEventListener("click", () => {
    const btns = document.querySelectorAll(".item");

    btns.forEach((btn) => {
      btn.addEventListener("click", () => {
        btns.forEach(async (b) => b.classList.remove("active"));
        btn.classList.add("active");
      });
    });

    const age = document.querySelector("input").value;
    const humanAge = 16 * Math.log(age) + 31;
    alert(`Your dog is ${humanAge.toFixed(0)} years old in human years!`);
  });
});
