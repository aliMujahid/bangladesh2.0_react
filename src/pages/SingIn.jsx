import SignUp from "./SignUp";
import { Link } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";

export default function SignIn() {
  return (
    <>
      <h1>SignIn</h1>
      <Link component={RouterLink} to="/signup">
        Sign up
      </Link>
    </>
  );
}
