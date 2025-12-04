/* generated using openapi-typescript-codegen -- do not edit */
/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
export type SignUpDTO = {
    firstName: string;
    lastName: string;
    email: string;
    dateOfBirth: string;
    password: string;
    gender: SignUpDTO.gender;
};
export namespace SignUpDTO {
    export enum gender {
        MALE = 'Male',
        FEMALE = 'Female',
    }
}

