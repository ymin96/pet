import React, { useCallback, useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router";
import HeaderInput from "../components/common/Header/HeaderInput";
import { RootState } from "../modules";
import { setSearch } from "../modules/search";

export type HeaderInputContainerProps = {
    mobile: boolean;
};

function HeaderInputContainer({ mobile }: HeaderInputContainerProps) {
    const { input_text } = useSelector((state: RootState) => state.search);
    const dispatch = useDispatch();
    const history = useHistory();

    const [input, setInput] = useState<string | undefined>(undefined);
    const searchRef = useRef<HTMLInputElement>(null);

    const onClick = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            setInput(searchRef.current?.value);
            dispatch(setSearch(searchRef.current?.value));
            history.push("/veterinary/1");
            console.log("mouse event");
        },
        [input]
    );

    return (
        <>
            <HeaderInput onClick={onClick} searchRef={searchRef} mobile={mobile} />
        </>
    );
}

export default HeaderInputContainer;
