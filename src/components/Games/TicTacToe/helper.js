export function buildBoard(props) {
  const { size } = props;

  let body = document.querySelector("body");
  let b = document.createElement("div");
  b.setAttribute("id", "div_board_size");
  body.append(b);

  // let b = document.getElementById("div_board_size");
  //   b.addEventListener("click", inp);

  let i = 0;
  for (let r = 0; r < size; r++) {
    let row = document.createElement("DIV");
    row.setAttribute("class", `row`);

    for (let d = 0; d < size; d++) {
      let square = document.createElement("DIV");
      square.setAttribute("id", `c${i}`);
      square.setAttribute("class", `cell`);
      row.appendChild(square);
      i++;
    }
    b.appendChild(row);
  }
  //   console.log(b);
  return b;
}
