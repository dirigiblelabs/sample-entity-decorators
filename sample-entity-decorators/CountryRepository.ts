import { CountryEntity } from "./CountryEntity";
import { Repository, EntityConstructor } from "sdk/db";
import { Component } from "sdk/component";

@Component('CountryRepository')
export class CountryRepository extends Repository<CountryEntity> {

    constructor() {
        super((CountryEntity as EntityConstructor));
    }

}

CountryRepository;