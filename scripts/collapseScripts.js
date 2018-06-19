/// ABOUT COLLAPSE JQUERY
$(document).ready(function(){
  $('#collapseAbout').collapse('toggle');
});

$('#openAbout').click(function(){
  $('#collapseAbout').collapse('toggle');
});

$('#collapseAbout').on('shown.bs.collapse', function() {
  $('#plusMinusAbout').text('-');
});

$('#collapseAbout').on('hidden.bs.collapse', function() {
  $('#plusMinusAbout').text('+');
});

/// PROJECTS COLLAPSE JQUERY
$('#openProjects').click(function(){
  $('#collapseProjects').collapse('toggle');
});

$('#collapseProjects').on('shown.bs.collapse', function() {
  $('#plusMinusProjects').text('-');
});

$('#collapseProjects').on('hidden.bs.collapse', function() {
  $('#plusMinusProjects').text('+');
});

/// SKILLS COLLAPSE JQUERY
$('#openSkills').click(function(){
  $('#collapseSkills').collapse('toggle');
});

$('#collapseSkills').on('shown.bs.collapse', function() {
  $('#plusMinusSkills').text('-');
});

$('#collapseSkills').on('hidden.bs.collapse', function() {
  $('#plusMinusSkills').text('+');
});

/// EXPERIENCE COLLAPSE JQUERY
$('#openExperience').click(function(){
  $('#collapseExperience').collapse('toggle');
});

$('#collapseExperience').on('shown.bs.collapse', function() {
  $('#plusMinusExperience').text('-');
});

$('#collapseExperience').on('hidden.bs.collapse', function() {
  $('#plusMinusExperience').text('+');
});

/// HOBBIES COLLAPSE JQUERY
$('#openHobbies').click(function(){
  $('#collapseHobbies').collapse('toggle');
});

$('#collapseHobbies').on('shown.bs.collapse', function() {
  $('#plusMinusHobbies').text('-');
});

$('#collapseHobbies').on('hidden.bs.collapse', function() {
  $('#plusMinusHobbies').text('+');
});
