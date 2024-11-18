import { useEffect, useMemo, useState } from "react";
import { FunctionModelStruct } from "../models/function.model";
import { CrudRepositoryService } from "../services/crud.service";
import { UserApiDTO } from "../dto/user-api.dto";
import { ResultApiDTO } from "../dto/result-api.dto";
import { HookModelStruct } from "../models/hook.model";
import { FetchHookModelStruct } from "../models/fetch.model";
import { useSelect } from "./useSelect";
import { searchSlice } from "../redux/slices/search.slice";
import { ModalHookModelStruct } from "../models/modal.model";
import { modalSlice } from "../redux/slices/modal.slice";

export const useFetch: FunctionModelStruct<FetchHookModelStruct> = (): FetchHookModelStruct => {
    const [loading, setLoading]: HookModelStruct<boolean> = useState<boolean>(false);
    const [data, setData]: HookModelStruct<UserApiDTO[]> = useState<UserApiDTO[]>([]);

    const search: string = useSelect(searchSlice.name);
    const modal: ModalHookModelStruct = useSelect(modalSlice.name);
    
    const userData: UserApiDTO[] = useMemo((): UserApiDTO[] => {
        const elements: UserApiDTO[] = [...data].filter((str: UserApiDTO): boolean => 
            str.name.first.toLowerCase().includes(search.toLowerCase()) || str.name.last.toLowerCase().includes(search.toLowerCase()));

        return elements;
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [data, search, modal]);

    useEffect((): void => {
        const getData: FunctionModelStruct<Promise<void>> = async (): Promise<void> => {
            setLoading(true);
            const repository: CrudRepositoryService<ResultApiDTO> = new CrudRepositoryService<ResultApiDTO>("path");
            const { results }: ResultApiDTO = await repository.findAll();
            setLoading(false);
            setData(results);
        };

        getData();
    }, []);

    return {
        loading,
        data,
        userData,
        setData
    };
};