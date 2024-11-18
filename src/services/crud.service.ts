import { RepositoryImpl } from "../impl/repository.impl";
import { CrudRepository } from "../repository/crud.repository";

export class CrudRepositoryService<T> implements RepositoryImpl<T> {
    private crudRepository: CrudRepository<T>;

    constructor(readonly path: string) {
        this.crudRepository = new CrudRepository<T>(path);
    }
    async save(entity: T): Promise<void> {
       await this.crudRepository.save(entity);
    }
    async update(entity: T): Promise<void> {
        await this.crudRepository.update(entity);
    }
    async findById(id: number): Promise<T> {
        const result: T = await this.crudRepository.findById(id);
        return result;
    }

    async findAll(): Promise<T> {
        const result: T = await this.crudRepository.findAll();
        return result;
    }

    async deleteById(id: number): Promise<void> {
        await this.crudRepository.deleteById(id);
    }

}