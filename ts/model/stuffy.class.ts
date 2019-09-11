export class Stuffy {
    id: number;
    type: string;
    color: string;
    size: string;
    limbs: number;

    constructor(i: number = 0, t: string = "", c:string="", s:string = "", l:number = 0)  {

        this.id = i;        //shorter names to save space
        this.type = t;
        this.color = c;
        this.size = s;
        this.limbs = l;
    }

    about(): string {
        return 'Stuffy: id='+this.id
        +' type=' +this.type+', color = ' + this.color+', size='+this.size+', limbs='+this.limbs;
    }
}