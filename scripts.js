let numbers = new Array(11);
numbers[0] = "1";
numbers[1] = "2";
numbers[2] = "3";
numbers[3] = "4";
numbers[4] = "5";
numbers[5] = "6";
numbers[6] = "7";
numbers[7] = "8";
numbers[8] = "9";
numbers[9] = "*";
numbers[10] = "0";
numbers[11] = "#";

let alphabets = new Array(11);
alphabets[0] = ".,?!'";
alphabets[1] = "abc";
alphabets[2] = "def";
alphabets[3] = "ghi";
alphabets[4] = "jkl";
alphabets[5] = "mno";
alphabets[6] = "pqrs";
alphabets[7] = "tuv";
alphabets[8] = "wxyz";
alphabets[9] = "+";
alphabets[10] = "_";
alphabets[11] = "";


let text = "";
let counter = 0;
let clicked = false;

function start() {

  let div_content = "";

  for (i = 0; i <= 11; i++) {
    let element = "number" + i;
    div_content = div_content + '<div class="letter" onclick="printKey(' + i + ')" id="' + element + '">' + numbers[i] + '<br>' + alphabets[i] + '</div>';
    if ((i + 1) % 3 == 0) div_content = div_content + '<div style="clear:both;"></div>';
  }

  document.getElementById("design").innerHTML = div_content;


}

function printKey(nr) {


  for (i = 0; i <= 11; i++) {
    let element = "number" + i;
    document.getElementById(element).addEventListener("mouseleave", choiseAndReset);
  }


  switch (nr) {
    case 0:
      counter++;

      if (counter >= 7) {
        counter = 1;
        text = text.toString().replace(/.$/, ".");
        document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 6 == 0) {
          text = text.toString().replace(/.$/, "1");
          document.getElementById("userInput").value = text;
        }else if (counter % 5 == 0) {
          text = text.toString().replace(/.$/, "'");
          document.getElementById("userInput").value = text;
        }
        else if (counter % 4 == 0) {
          text = text.toString().replace(/.$/, "!");
          document.getElementById("userInput").value = text;
        }else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "?");
          document.getElementById("userInput").value = text;
        }
        else if (counter % 2 == 0) {
          text = text.toString().replace(/.$/, ",");
          document.getElementById("userInput").value = text;
        }

        else {
          text += ".";
          document.getElementById("userInput").value = text;

        }
      }

      break;

    case 1:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "a");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "2");
            document.getElementById("userInput").value = text;
        }else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "c");
          document.getElementById("userInput").value = text;
        }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "b");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "a";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 2:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "d");
          document.getElementById("userInput").value = text;

      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "3");
            document.getElementById("userInput").value = text;
        } else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "f");
          document.getElementById("userInput").value = text;
      }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "e");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "d";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 3:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "g");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "4");
            document.getElementById("userInput").value = text;
        }
        else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "i");
          document.getElementById("userInput").value = text;
      }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "h");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "g";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 4:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "j");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "5");
            document.getElementById("userInput").value = text;
        }
        else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "l");
          document.getElementById("userInput").value = text;
      }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "k");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "j";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 5:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "m");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "6");
            document.getElementById("userInput").value = text;
        }
        else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "o");
          document.getElementById("userInput").value = text;
      }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "n");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "m";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 6:
      counter++;

      if (counter >= 6) {
          counter = 1;
          text = text.toString().replace(/.$/, "p");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 5 == 0) {
            text = text.toString().replace(/.$/, "7");
            document.getElementById("userInput").value = text;
        }else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "r");
          document.getElementById("userInput").value = text;
      }

        else if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "s");
            document.getElementById("userInput").value = text;
        }

        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "q");
            document.getElementById("userInput").value = text;
        }

        else {
            text += "p";
            document.getElementById("userInput").value = text;

        }
      }
      break;
    case 7:
      counter++;

      if (counter >= 5) {
          counter = 1;
          text = text.toString().replace(/.$/, "t");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "8");
            document.getElementById("userInput").value = text;
        }else  if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "v");
          document.getElementById("userInput").value = text;
      }
        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "u");
            document.getElementById("userInput").value = text;
        }
        else {
            text += "t";
            document.getElementById("userInput").value = text;
        }
      }
      break;
    case 8:
      counter++;

      if (counter >= 6) {
          counter = 1;
          text = text.toString().replace(/.$/, "w");
          document.getElementById("userInput").value = text;
      }
      else {
        if (counter % 5 == 0) {
            text = text.toString().replace(/.$/, "9");
            document.getElementById("userInput").value = text;
        }else if (counter % 3 == 0) {
          text = text.toString().replace(/.$/, "y");
          document.getElementById("userInput").value = text;
      }

        else if (counter % 4 == 0) {
            text = text.toString().replace(/.$/, "z");
            document.getElementById("userInput").value = text;
        }

        else if (counter % 2 == 0) {
            text = text.toString().replace(/.$/, "x");
            document.getElementById("userInput").value = text;
        }

        else {
            text += "w";
            document.getElementById("userInput").value = text;

        }
      }
      break;
    case 9:
      counter++;

      if (counter >= 1) {
        text += "+";
        document.getElementById("userInput").value = text;
      }

      break;
    case 10:
      counter++;

      if (counter >= 1) {
        text += " ";
        document.getElementById("userInput").value = text;
      }

      break;
    case 11:
      counter++;

      if (counter >= 1) {
        text += "#";
        document.getElementById("userInput").value = text;
      }
      break;


  }


  function choiseAndReset() {

    document.getElementById("userInput").value = text;
    counter = 0;
    return counter;
  }
}