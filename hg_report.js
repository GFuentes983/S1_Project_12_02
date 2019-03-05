"use strict";

/*
   New Perspectives on HTML5 and CSS3, 7th Edition
   Tutorial 10
   Case Problem 2

   Author: Gabriel Fuentes
   Date: 3.1.19  
   
   Filename: hg_report.js
	
*/

// Set gameReport variable to some inner HTML with values concatenated for variables from another JS file.
var gameReport = "<h1>" + itemTitle + "</h1> <h2>By:" + itemManufacturer + "</h2><img src='hg_" + itemID +  ".png' alt='" + itemID + "' id='gameImg' /> <table><tr><th>Product ID</th><td>" + itemID + "</td></tr> <tr><th>List Price</th><td>" + itemPrice + "</td></tr> <tr><th>Platform</th><td>" + itemPlatform + "</td></tr> <tr><th>ESRB Rating</th><td>" + itemESRB + "</td></tr> <tr><th>Condition</th><td>" + itemCondition + "</td></tr> <tr><th>Release</th><td>" + itemRelease + "</td></tr></table>" + itemSummary;

// Set gameReport to be innerHTML of article element.
document.getElementsByTagName("article")[0].innerHTML = gameReport;

// Variable for the sum of ratings.
var ratingSum = 0;

// Set ratingsCount to the value of the ratings array's length.
var ratingsCount = ratings.length;

// For loop to loop ratings 
for (var i = 0; i < ratingsCount; i++) {
    ratingSum += ratings[i];
}

// Declares that ratingsAvg is ratingSum divided by ratingsCount
var ratingsAvg = ratingSum / ratingsCount;

// Sets ratingReport to HTML with some variables
var ratingReport = "<h1>Customer Reviews</h1><h2>" + ratingsAvg + " out of 5 stars (" + ratingsCount + " reviews)</h2>";

// For loop to add the titles, authors, and dates for the aside
for (var j = 0; j <= 2; j++) {
  
    ratingReport += "<div class='review'><h1>" + ratingTitles[j] + "</h1><table><tr><th>By</th><td>" + ratingAuthors[j] + "</td></tr> <tr><th>Review Date</th><td>" + ratingDates[j] + "</td></tr> <tr><th>Rating</th><td>";

    for (var k = 1; k <= ratings[j]; k++) {
      ratingReport += "<img src='hg_star.png' />";  
    }

    ratingReport += "</td></tr></table>" + ratingSummaries[j] + "</div>";
}

// Sets ratingReport to the HTML of the aside.
document.getElementsByTagName("aside")[0].innerHTML = ratingReport;