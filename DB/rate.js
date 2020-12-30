function rateStars(evt, rate, tabContentName) {
    if (rate > 0 && rate < 2) {

        document.getElementById("star1" + tabContentName).checked = true;
        document.getElementById("star2" + tabContentName).checked = false;
        document.getElementById("star3" + tabContentName).checked = false;
        document.getElementById("star4" + tabContentName).checked = false;
        document.getElementById("star5" + tabContentName).checked = false;

    } else if (rate > 1 && rate < 3) {

        document.getElementById("star1" + tabContentName).checked = true;
        document.getElementById("star2" + tabContentName).checked = true;
        document.getElementById("star3" + tabContentName).checked = false;
        document.getElementById("star4" + tabContentName).checked = false;
        document.getElementById("star5" + tabContentName).checked = false;


    } else if (rate > 2 && rate < 4) {

        document.getElementById("star1" + tabContentName).checked = true;
        document.getElementById("star2" + tabContentName).checked = true;
        document.getElementById("star3" + tabContentName).checked = true;
        document.getElementById("star4" + tabContentName).checked = false;
        document.getElementById("star5" + tabContentName).checked = false;

    } else if (rate > 3 && rate < 5) {

        document.getElementById("star1" + tabContentName).checked = true;
        document.getElementById("star2" + tabContentName).checked = true;
        document.getElementById("star3" + tabContentName).checked = true;
        document.getElementById("star4" + tabContentName).checked = true;
        document.getElementById("star5" + tabContentName).checked = false;


    } else if (rate > 4 && rate == 5) {

        document.getElementById("star1" + tabContentName).checked = true;
        document.getElementById("star2" + tabContentName).checked = true;
        document.getElementById("star3" + tabContentName).checked = true;
        document.getElementById("star4" + tabContentName).checked = true;
        document.getElementById("star5" + tabContentName).checked = true;

    }
}