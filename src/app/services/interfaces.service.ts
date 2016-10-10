import { Injectable } from '@angular/core';

@Injectable()
export class InterfacesService {}


export interface Person {
    $key?: string;
    bio: string;
    image: string;
    name: string;
}



