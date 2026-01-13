alert(
"Table of Contents Script Loaded"
)
console.log("Table of Contents Script Loaded");;
const toc = document.querySelector(".table-of-contents");
if (toc) {
  const headers = document.querySelectorAll("h1, h2, h3, h4, h5, h6");
  const tocList = document.createElement("ul");
    headers.forEach((header) => {
    const tocItem = document.createElement("li");
    const tocLink = document.createElement("a");
    tocLink.textContent = header.textContent;
    tocLink.href = `#${header.id}`;
    tocItem.appendChild(tocLink);
    tocList.appendChild(tocItem);
  });
  toc.appendChild(tocList);
}