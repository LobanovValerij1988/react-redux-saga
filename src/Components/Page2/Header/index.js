import { useSelector } from "react-redux";

function Header() {
  const header = useSelector(state => state.reducer2.header);
  return (
        <h1>{header}</h1>
    );
  }
  
  export default Header;