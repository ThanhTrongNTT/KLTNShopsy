export interface User {
    id: string;
    userName: string;
    email: string;
    password: string;
    activeFlag: boolean;
    removalFlag: boolean;
    userProfile: UserProfile;
}

export interface UserProfile {
    id: string;
    name: string;
    avatar: MediaFile;
    removalFlag: boolean;
}

export interface MediaFile {
    id: string;
    fileName: string;
    fileType: string;
    url: string;
    removalFlag: boolean;
}
