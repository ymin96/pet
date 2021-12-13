import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PaginationLink from "../components/common/PaginationLink";
import StoreList from "../components/StoreList";
import { RootState } from "../modules";
import { getStoreThunk } from "../modules/store";

export type StoreListContainerProps = {
    page: string;
    table: string;
};

function StoreListContainer({ page, table }: StoreListContainerProps) {
    const { data, loading, error } = useSelector((state: RootState) => state.store.storeFile);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getStoreThunk(parseInt(page), 12, table));
    }, [page]);

    return (
        <>
            {data && (
                <>
                    <StoreList storeList={data.store_list} />
                    <PaginationLink page={parseInt(page)} limit={data.last_page} prefix_url={"/store/"} />
                </>
            )}
        </>
    );
}

export default StoreListContainer;
