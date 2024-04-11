var good = document.querySelector('.good'),
    fast = document.querySelector('.fast'),
    cheap = document.querySelector('.cheap');

function changed(e1) {
    isGood = good.checked;
    isFast = fast.checked;
    isCheap = cheap.checked;

    if (isGood && isFast && isCheap && e1 == cheap) {
        fast.checked = false;
    }
    if (isGood && isCheap && isFast && e1 == fast) {
        good.checked = false;
    }
    if (isCheap && isFast && isGood && e1 == good) {
        cheap.checked = false;
    }
}