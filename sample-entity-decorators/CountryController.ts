import { Controller, Get, Documentation, request } from "sdk/http"
import { HttpUtils } from "sdk/http/utils";
import { Options } from "sdk/db";
import { CountryEntity } from "./CountryEntity";
import { CountryRepository } from "./CountryRepository";

@Controller
@Documentation("Sample Country Controller")
class CountryController {

    private readonly repository = new CountryRepository();

    @Get("/")
    @Documentation("Sample Get All Countries")
    public getAll(_: CountryEntity, ctx: any): CountryEntity[] {
        try {
            const options: Options = {
                limit: ctx.queryParameters["$limit"] ? parseInt(ctx.queryParameters["$limit"]) : 20,
                offset: ctx.queryParameters["$offset"] ? parseInt(ctx.queryParameters["$offset"]) : 0
            };

            return this.repository.findAll(options);
        } catch (error: any) {
            this.handleError(error);
        }
        return [];
    }

    private handleError(error: any) {
        if (error.name === "ForbiddenError") {
            HttpUtils.sendForbiddenRequest(error.message);
        } else if (error.name === "ValidationError") {
            HttpUtils.sendResponseBadRequest(error.message);
        } else {
            HttpUtils.sendInternalServerError(error.message);
        }
    }

}
