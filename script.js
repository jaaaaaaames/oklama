const folders = document.querySelectorAll(".folder")

folders.forEach(folder => {
  folder.addEventListener("dragstart", () => {
    console.log("drag start")
  })

  folder.addEventListener("dragend", () => {
    console.log("drag end")
  })
})