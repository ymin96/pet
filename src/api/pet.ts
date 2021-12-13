import axios, { AxiosResponse } from "axios";

export async function getStoreFile(offset: number, limit: number, table: string) {
    let response: AxiosResponse<StoreListPage>;
    
    response = await axios.get<StoreListPage>(`http://127.0.0.1:8080/store?offset=${offset}&limit=${limit}&table=${table}`);

    return response.data;
}

export interface Store {
    name: string;
    address_marking: string;
    parcel_addressing: string;
    lat: number;
    lng: number;
    id: number;
    number: number;
    reference_date: string;
}

export interface StoreListPage {
    last_page: number;
    cur_page: number;
    store_list: Store[];
}
