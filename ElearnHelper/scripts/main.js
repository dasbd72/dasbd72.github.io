function chooseChapter(numChapter){
    var chapters = document.getElementsByClassName("question");
    var choosenChapter = document.getElementById(`chapter${numChapter}`)
    for(var chapter of chapters) chapter.style.display = "none";
    choosenChapter.style.display = "block";
}
window.onload = chooseChapter(23);