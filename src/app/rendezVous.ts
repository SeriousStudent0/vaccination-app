import { Doctor, DoctorBody } from "./doctor";
import { Patient, PatientBody } from "./patient";


export interface RendezVous{
    id: number;
    date: Date;
    doctor: Doctor;
    patient: Patient;
    validated: boolean;
}

export interface RendezVousRequest{
    id?: number;
    date: Date;
    patient: PatientBody;
}

export interface RendezVousBody{
    id: number;
}