import { AxiosResponse } from "axios";
import { RepositoryImpl } from "../impl/repository.impl";
import { http } from "../services/http.service";

export class CrudRepository<T> implements RepositoryImpl<T> {

    private path: string = "";

    constructor(readonly _path: string) {
        this.path = _path;
    }

    async save(entity: T): Promise<void> {
        await http.post(this.path + "/save", entity);
    }
    async update(entity: T): Promise<void> {
        await http.put(this.path + "/save", entity);
    }
    async findById(id: number): Promise<T> {
        console.log(this.path);
        const response: AxiosResponse<T> = await http.get(this.path + `/.../${id}`);
        return response.data;
    }

    async findAll(): Promise<T> {
        const response: AxiosResponse<T> = await http.get("?results=50");
        return response.data;
    }
    async deleteById(id: number): Promise<void> {
        await http.delete(this.path + `/.../${id}`);
    }
}