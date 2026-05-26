const marketData = {
  hongkong: {
    label: "Lead diligence market",
    score: "Hong Kong",
    title: "Why Hong Kong leads",
    points: [
      "Named alumni and supporter infrastructure through Hong Kong Friends and the OW Hong Kong Guild.",
      "Proven appetite for elite British schools at the top end of the market.",
      "Northern Metropolis gives a policy frame for education, talent, innovation, and site planning.",
    ],
  },
  singapore: {
    label: "Asian comparator",
    score: "Singapore",
    title: "Why Singapore remains in view",
    points: [
      "A mature international-school market with high fee tolerance and global family confidence.",
      "A useful benchmark for partner governance, safeguarding controls, and academic autonomy.",
      "More crowded and less network-advantaged for Winchester, so best treated as a comparator before a first move.",
    ],
  },
};

const buttons = document.querySelectorAll("[data-market]");
const label = document.querySelector("#market-label");
const score = document.querySelector("#market-score");
const title = document.querySelector("#market-title");
const list = document.querySelector("#market-list");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const market = marketData[button.dataset.market];

    buttons.forEach((item) => {
      const selected = item === button;
      item.classList.toggle("is-active", selected);
      item.setAttribute("aria-selected", String(selected));
    });

    label.textContent = market.label;
    score.textContent = market.score;
    title.textContent = market.title;
    list.replaceChildren(
      ...market.points.map((point) => {
        const item = document.createElement("li");
        item.textContent = point;
        return item;
      }),
    );
  });
});
