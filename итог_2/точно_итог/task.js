 function check() {
            let a = parseFloat(document.getElementById('a').value);//parseFloat: Преобразует строковые значения,
            //введённые пользователем в поля ввода (которые возвращаются как строки), в числа с плавающей точкой.
            let b = parseFloat(document.getElementById('b').value);
            //document.getElementById('a').value: Это команда для получения значения из поля ввода с идентификатором 'a'.
            let c = parseFloat(document.getElementById('c').value);
            let d = parseFloat(document.getElementById('d').value);

            if (isNaN(a) || isNaN(b) || isNaN(c) || isNaN(d) || a <= 0 || b <= 0 || c <= 0 || d <= 0) {
                document.getElementById('result').innerText = "Пожалуйста, введите все значения! значения должны быть <0";
                return;
            }
            //isNaN:  "не числом" (NaN, Not-a-Number).

            let result='';
            // (a <= c и b <= d) или (a <= d и b <= c)
            if ((a <= c && b <= d) || (a <= d && b <= c)) {
                result = "Прямоугольник со сторонами " + a + " и " + b + " может уместиться.";
// && = и
// || = или
            } else {
                result = "Прямоугольник со сторонами " + a + " и " + b + " не может уместиться.";

            }
            // результат на экране
    document.getElementById('result').innerText = result;

    // результат для отправки формы на сервер
    document.getElementById('hiddenResult').value = result;
        }

//Функция check() выполняется при каком-либо событии (например, нажатии на кнопку).
//Она получает данные из полей формы, проверяет их корректность, вычисляет,
//помещается ли один прямоугольник в другой, и выводит результат пользователю.