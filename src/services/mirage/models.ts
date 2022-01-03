import { Model } from "miragejs";

type User = {
    name: string;
    email: string;
    created_at: string
}

const models = {
    user: Model.extend<Partial<User>>({})
};

export { models };
