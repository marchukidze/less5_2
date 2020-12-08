var str1 = '/76gk_g6747ggf/!!';
var str2 = '!!_gla_5u7g29_/!g!';
var str3 = 'g!t78**#g#/gg!ee!cd!_k_?';
var restrictedList = ['!', 'g', '_', '/'];

var str1 = str1.split('');
var str2 = str2.split('');
var str3 = str3.split('');

for (var i = 0; i < str1.length; i++) {
    for (var j = 0; j < restrictedList.length; j++) {
        if (str1[i] == restrictedList[j]) {
            str1.splice(i, 1);
            i--;
        }
    }
}

for (var i = 0; i < str2.length; i++) {
    for (var j = 0; j < restrictedList.length; j++) {
        if (str2[i] == restrictedList[j]) {
            str2.splice(i, 1);
            i--;
        }
    }
}

for (var i = 0; i < str3.length; i++) {
    for (var j = 0; j < restrictedList.length; j++) {
        if (str3[i] == restrictedList[j]) {
            str3.splice(i, 1);
            i--;
        }
    }
}

console.log(str1.join(''));
console.log(str2.join(''));
console.log(str3.join(''));
