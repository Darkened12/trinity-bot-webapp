export interface IPartialCharacter {
    name: string;
    gamePrefix: string;
    iconUrl: string;
    
}

export interface IMatchedPartialCharacter extends IPartialCharacter {
    levenshteinDistance: number;
}