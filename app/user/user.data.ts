export interface IUserVO {
    id: String;
    name: String;
    desc: String;
    pos: String;
    mail: String;
    phone: String;
}

let userData: IUserVO[] = [
    {
        "id": "us",
        "name": "Saban Ünlü",
        "pos": "Dev/CEO",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "fd",
        "name": "Florian Diesner",
        "pos": "Dev/CEO",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "bu",
        "name": "Bayram Ünlü",
        "pos": "PM",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "ak",
        "name": "Kadir Uludag",
        "pos": "Dev",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "sl",
        "name": "Stefan Liebehenz",
        "pos": "Dev",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "tk",
        "name": "Tim Kwiatkowski",
        "pos": "Edu",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "tv",
        "name": "TypeScript VBScript",
        "pos": "Dev",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "raw",
        "name": "Ruby ActionScript VBScript",
        "pos": "Des",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    },
    {
        "id": "joa",
        "name": "JavaScript ObjectivC ActionScript",
        "pos": "Dev",
        "mail": "info@netTrek.de",
        "phone": "+49 2362 999444 0",
        "desc": "'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A, adipisci aperiam autem beatae dolorum eveniet laboriosam nam obcaecati odit officia optio.'"
    }
];

export class UserDataService {

    getUserList():IUserVO[]{
        return userData;
    }
}