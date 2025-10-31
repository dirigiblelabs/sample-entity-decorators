import { producer } from "sdk/messaging";
import { CountryEntity } from "./CountryEntity";
import { Repository, EntityConstructor } from "sdk/db";

export class CountryRepository extends Repository<CountryEntity> {

    constructor() {
        super((CountryEntity as EntityConstructor));
    }

}