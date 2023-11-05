import { Address, AddressBody } from "./address";
import { Doctor, DoctorBody } from "./doctor";
import { RendezVous, RendezVousBody } from "./rendezVous";


export interface Patient{
    id: number;
    name: string;
    email: string;
    vaccinated: boolean;
    doctor: Doctor;
}

export interface PatientRequest{
    id?: number;
    name: string;
    email: string;
}

export interface PatientBody{
    id: number;
}