const getColors = () => {
  const rgb = [
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
    Math.round(Math.random() * 255),
  ];
  const brightness = Math.round(
    (parseInt(rgb[0]) * 299 + parseInt(rgb[1]) * 587 + parseInt(rgb[2]) * 114) /
      1000
  );
  return {
    color: brightness > 125 ? "black" : "white",
    backgroundColor: `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`,
  };
};

(function (bufferSize = 10) {
  let couter = 1;
  const target = document.querySelector(".observer");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const { target } = entry;
          const newNodes = document.createDocumentFragment();
          Array(bufferSize)
            .fill()
            .forEach(() => {
              const node = document.createElement("section");
              const { color, backgroundColor } = getColors();
              // console.log(color, backgroundColor);
              node.style.color = color;
              node.style.backgroundColor = backgroundColor;
              node.innerHTML = `<h1>${couter++}</h1>`;
              newNodes.append(node);
            });

          target.parentNode.insertBefore(newNodes, target);
        }
      });
    },
    {
      rootMargin: "1000%",
      root: document.querySelector(".container"),
      threshold: [],
    }
  );
  observer.observe(target);
})(50);
