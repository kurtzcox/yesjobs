export class Dashboard {
    usercount: number;
    jobcount: number;
    compcount: number;
    billcount: number;
}


export class Usermonth {
    month: string;
    count: number;
    high: number;
}

export class Compdata {
    id: number;
    comp: string;
    posted: number;
    hired: number;
}


export class jobpost {
    id: number;
    title: string;
    vacancy: number;
    applied: number;
    shortlisted: number
}
