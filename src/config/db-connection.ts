import {connect} from 'mongoose';
import 'reflect-metadata';
import {injectable} from "inversify";
@injectable()
export class MongooseService {
    async connectDb(): Promise<void> {
        try {
            const connectDb = await connect(process.env.CONNECTION_STRING as string);
            console.log("Database connected: " + connectDb.connection?.name);
        } catch (e) {
            console.log(e);
            process.exit(1);
        }
    }

}