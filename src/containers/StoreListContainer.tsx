import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationLink from "../components/common/PaginationLink";
import StoreList from "../components/StoreList";
import { RootState } from "../modules";
import { getStoreThunk } from "../modules/store";

export type StoreListContainerProps = {
    page: string;
    table: string;
    prefix: string;
};

function StoreListContainer({ page, table, prefix }: StoreListContainerProps) {
    const { data, loading, error } = useSelector((state: RootState) => state.store.storeFile);
    const {input_text} = useSelector((state:RootState) => state.search);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStoreThunk(parseInt(page), 12, table, input_text));
    }, [page, input_text]);

    return (
        <>
            {data && (
                <>
                    <StoreList storeList={data.store_list} />
                    <PaginationLink page={parseInt(page)} limit={data.last_page} prefix_url={`/${prefix}/`} />
                </>
            )}
        </>
    );
}

export default StoreListContainer;
