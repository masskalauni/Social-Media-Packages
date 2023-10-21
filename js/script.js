/*===================jquery for see more and see less button  */

$(document).ready(function () {
  // Handle "See more" button click
  $(".see-more-btn").click(function () {
      $(this).hide();
      $(this).siblings(".see-less").show();
  });

  // Handle "See less" button click
  $(".see-less").click(function () {
      $(this).hide();
      $(this).siblings(".see-more-btn").show();
  });
});







/*===================javascript for see more and see less button  */


// const seeless   = document.getElementById("see-less-btn");
// const seemore   = document.getElementById("see-more-btn");
// const seelesss  = document.getElementById("see-less-btns");
// const seemoree  = document.getElementById("see-more-btns");

// function display(btn) {
//   seemore.style.display = "none";
//   seeless.style.display = "block";
// }
// function optionclose(btn) {
//   seemore.style.display = "block";
//   seeless.style.display = "none";
// }

// function displays(btn) {
//   seemoree.style.display = "none";
//   seelesss.style.display = "block";
// }
// function optioncloses(btn) {
//   seemoree.style.display = "block";
//   seelesss.style.display = "none";
// }
