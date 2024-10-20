 function check() {
            let a = parseFloat(document.getElementById('a').value);
            let b = parseFloat(document.getElementById('b').value);
            let c = parseFloat(document.getElementById('c').value);
            let d = parseFloat(document.getElementById('d').value);

            if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d)) {
                document.getElementById('result').innerText = "Пожалуйста, введите все значения!";
                return;
            }
            let result='';
            // Проверка по обеим ориентациям: (a <= c и b <= d) или (a <= d и b <= c)
            if ((a <= c && b <= d) || (a <= d && b <= c)) {
                result = "Прямоугольник со сторонами " + a + " и " + b + " может уместиться.";

            } else {
                result = "Прямоугольник со сторонами " + a + " и " + b + " не может уместиться.";

            }
            // Отображаем результат на экране
    document.getElementById('result').innerText = result;

    // Записываем результат в скрытое поле для последующей отправки формы
    document.getElementById('hiddenResult').value = result;
        }