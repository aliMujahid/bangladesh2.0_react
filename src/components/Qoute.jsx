import { Typography } from "@mui/material";

import "../css/qoute.css";

export default function Qoute() {
  return (
    <div id="qoute">
      <p>
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis quas,
        ducimus labore sequi quos deserunt optio id repellendus tempora veniam
        amet porro corporis exercitationem numquam debitis culpa laudantium
        odio, velit vel minus sit? Veritatis aut maiores ducimus fugit error ex
        sit, dignissimos eum tempora perferendis a rem culpa ab aliquid modi?
        Est vitae neque esse, cumque, quam tenetur rem earum eaque mollitia modi
        ipsum aspernatur, dignissimos excepturi aliquam architecto soluta
        necessitatibus vero?"
      </p>
      <div className="citation">
        <Typography variant="h6"> Dr. Muhammad Yunus</Typography>
        <p>Chief Adviser of the People's Republic of Bangladesh</p>
      </div>
    </div>
  );
}
