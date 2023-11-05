import { Address, AddressBody } from "./address";
import { Doctor, DoctorBody } from "./doctor";
import { RendezVous } from "./rendezVous";


export interface Patient{
    id: number;
    name: string;
    email: string;
    vaccinated: boolean;
    address: Address;
    doctor: Doctor;
    rdv: RendezVous[];
}

export interface PatientRequest{
    id?: number;
    name: string;
    email: string;
    address: AddressBody;
    doctor: DoctorBody;
}