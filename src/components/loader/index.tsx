import React from "react";
import { LoaderStyled } from "./loader.styled";

const Loader = React.forwardRef<HTMLDivElement>((_props, ref) => (
    <LoaderStyled ref={ref} />
));

export default Loader