export class User {
    id:string;

    constructor(id:string ,public name:string, public avatarSrc:string){
        this.id = id;
    }
}
