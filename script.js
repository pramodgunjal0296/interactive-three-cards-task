function toggleBox(selectedBox) {
  document.querySelectorAll(".box").forEach(box => {
    if (box !== selectedBox) {
      box.classList.remove("expanded");
    }
  });
  selectedBox.classList.toggle("expanded");
}
