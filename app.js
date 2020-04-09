// Write a JavaScript find the armstrong numbers of 3 digits

function myFunc() {
    var i,j,k;
    for (i = 1; i < 10; ++i) {
        for (j = 0; j < 10; ++j) {
            for (k = 0; k < 10; ++k) {
                var pow = (Math.pow(i,3) + Math.pow(j,3) + Math.pow(k,3));
                var plus = (i * 100 + j * 10 + k);
                if(pow == plus) {
                    console.log(pow);
                }
            }
        }
    }
}

myFunc()