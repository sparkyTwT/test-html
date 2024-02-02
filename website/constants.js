//constants

var screen_height = window.screen.availHeight;
var screen_width = window.screen.availWidth;

var game_space_width_height_ratio = 0.61;
var tab_holder_height_ratio = 1/8;

var initial_game_space_width = screen_width * 0.7;
var initial_game_space_height = initial_game_space_width * game_space_width_height_ratio;

var initial_sidebar_width = screen_width * 0.2;

var game_space = document.getElementById("game_space");

var tab_holder = document.getElementById("tab_holder");

var game = document.getElementById("game");

var sidebar = document.getElementById("sidebar");

//globals

var game_space_height;
var game_space_width;

var game_height;

var tab_holder_height;

var sidebar_width;

var game_height;

//tab_stuff

var tab_container = [];

var tab_height;
var tab_width;

var close_height;
var close_width;