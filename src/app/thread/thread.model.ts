export class Thread {
    id:string;
    lastMessage:any;
    name:string;
    avatarSrc:string;

    constructor(id?:string,name?:string,avatarSrc?:string){
        this.id = id;
        this.name = name;
        this.avatarSrc = avatarSrc;
    }
}
