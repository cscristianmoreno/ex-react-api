export interface RepositoryImpl<T> {
    save(entity: T): Promise<void>;

    update(entity: T): Promise<void>;

    findById(id: number): Promise<T>;

    findAll(): Promise<T>;

    deleteById(id: number): Promise<void>;
}