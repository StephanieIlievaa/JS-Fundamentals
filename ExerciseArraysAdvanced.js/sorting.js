function sorting(input) {

    input.sort(customSort);

    function customSort(a, b) {
        if (a > b) {
            return 1;
        } else if (a < b) {
            return -1;
        } else {
            return 0;
        }
    }

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]); 