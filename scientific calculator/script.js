const result = document.getElementById('result');
const operation = document.getElementById('operation');
const buttonRadDeg = document.getElementById('toggleRadDeg');
const buttonSecond = document.getElementById('toggleSecond');

let data = {
    formats: [],
    operations: [],
    result: 0,
    resultformat: [],
    staging: []
};

console.log(data);

document.querySelectorAll("button").forEach(button => {
    button.addEventListener("click", () => {
        let val = button.innerText.trim();
        let id = button.id;

        // ============= CONDITION BASED LOGIC =============
        if (id === "toggleSecond") {
            if (buttonSecond.value === "0") {
                document.getElementById('trigonometric-sin').innerText = "sec";
                document.getElementById('trigonometric-cos').innerText = "csc";
                document.getElementById('trigonometric-tan').innerText = "cot";
                buttonSecond.value = "1";
            } else {
                document.getElementById('trigonometric-sin').innerText = "sin";
                document.getElementById('trigonometric-cos').innerText = "cos";
                document.getElementById('trigonometric-tan').innerText = "tan";
                buttonSecond.value = "0";
            }
        }

        else if (id === "toggleRadDeg") {
            if (buttonRadDeg.innerText === "rad") {
                buttonRadDeg.innerText = "deg";
                buttonRadDeg.value = "deg";
            } else {
                buttonRadDeg.innerText = "rad";
                buttonRadDeg.value = "rad";
            }
        }

        else if (val === "AC") {
            data = { formats: [], operations: [], result: 0, resultformat: [], staging: [] };
            result.value = "";
            operation.value = "";
        }

        else if (!isNaN(val) || val === ".") {
            data.staging.push(val);
            result.value = data.staging.join('');
        }

        else if (val === "+" || val === "-" || val === "×" || val === "÷" || val === "^") {
            let opSymbol = val === "×" ? "*" : val === "÷" ? "/" : val === "^" ? "**" : val;
            data.operations.push(data.staging.join(''));
            data.formats.push(data.staging.join(''));
            data.operations.push(opSymbol);
            data.formats.push(val);
            data.staging = [];
            operation.value = data.formats.join('');
        }

        else if (val === "=") {
            data.operations.push(data.staging.join(''));
            let expression = data.operations.join('');
            try {
                data.result = eval(expression);
                result.value = data.result;
                operation.value = data.formats.join('') + "=";
            } catch {
                result.value = "Error";
            }
            data.operations = [];
            data.formats = [];
            data.staging = [];
        }

        else if (val === "π") {
            data.result = Math.PI;
            result.value = data.result;
            operation.value += "π";
        }

        else if (val === "e") {
            data.result = Math.E;
            result.value = data.result;
            operation.value += "e";
        }

        else if (val === "√") {
            if (data.staging.length > 0) {
                let num = parseFloat(data.staging.join(''));
                data.result = Math.sqrt(num);
                result.value = data.result;
                operation.value += `√(${num})`;
                data.staging = [];
            }
        }

        else if (val === "%") {
            if (data.staging.length > 0) {
                let num = parseFloat(data.staging.join(''));
                data.result = num * 0.01;
                result.value = data.result;
                operation.value += "%";
                data.staging = [];
            }
        }

        else if (["sin", "cos", "tan", "sec", "csc", "cot"].includes(val)) {
            let num = data.staging.length ? parseFloat(data.staging.join('')) : data.result;
            let angle = buttonRadDeg.value === "deg" ? num * Math.PI / 180 : num;
            switch (val) {
                case "sin": data.result = Math.sin(angle); break;
                case "cos": data.result = Math.cos(angle); break;
                case "tan": data.result = Math.tan(angle); break;
                case "sec": data.result = 1 / Math.cos(angle); break;
                case "csc": data.result = 1 / Math.sin(angle); break;
                case "cot": data.result = 1 / Math.tan(angle); break;
            }
            result.value = data.result;
            operation.value += val + "(" + num + ")";
            data.staging = [];
        }

        else if (val === "log" || val === "ln" || val === "x!") {
            let num = data.staging.length ? parseFloat(data.staging.join('')) : data.result;
            if (val === "log") data.result = Math.log10(num);
            else if (val === "ln") data.result = Math.log(num);
            else if (val === "x!") {
                let fact = 1;
                for (let i = 1; i <= num; i++) fact *= i;
                data.result = fact;
            }
            result.value = data.result;
            operation.value += val + "(" + num + ")";
            data.staging = [];
        }

        else if (val === "(" || val === ")") {
            data.operations.push(val);
            data.formats.push(val);
            operation.value = data.formats.join('');
        }

        console.log(data);
    });
});
